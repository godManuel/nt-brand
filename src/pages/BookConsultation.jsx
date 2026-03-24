import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  Loader2,
  Phone,
  Mail,
  Tag,
  User,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";

import InlineLoadingOverlay from "@/components/BookingOverlay";
import BookingSuccessModal from "@/components/modals/BookingSuccess";

import { getAvailableSlots, createBooking } from "@/services/bookings";
import { createPageUrl, formatDateTime, formatTimeNative } from "@/utils";

const WHATSAPP_NUMBER = "+447407326662";

const appointmentTypes = [
  {
    service_name: "Consultation",
    apptID: "90777075",
  },
  {
    service_name: "Microlocs Installation",
    apptID: "90909242",
  },
  {
    service_name: "Sisterlocs Installation",
    apptID: "90909372",
  },
  {
    service_name: "Retie Service",
    apptID: "90909458",
  },
];

export default function BookConsultation() {
  const [searchParams] = useSearchParams();
  const consultationType = searchParams.get("type");
  const [timeSlots, setTimeSlots] = useState([]);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    client_name: "",
    email: "",
    phone: "",
    consultation_type: consultationType || "",
    preferred_date: "",
    preferred_time: "",
    hair_type: "",
    service_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const fetchAvailableSlots = async (appointmentID, date) => {
    setLoadingSlots(true);

    setTimeSlots([]); // Clear previous slots
    setFormData((prev) => ({ ...prev, preferred_time: "" })); // Reset time selection

    try {
      const res = await getAvailableSlots(appointmentID, date);

      if (res.ok) {
        setTimeSlots(res.data.data);
      }

      if (!res.ok) {
        // const { dismiss } = toast({
        //   title: "Error",
        //   description: "Something went wrong",
        //   variant: "destructive",
        // });
      }
    } catch (error) {
      console.error("Error fetching slots:", error);
      setTimeSlots([]);
      toast({
        title: "Something went wrong",
        description: "An error occured",
        variant: "destructive",
      });
    } finally {
      setLoadingSlots(false);
    }
  };

  // useEffect(() => {
  //   if (formData.preferred_date) {
  //     fetchAvailableSlots(formData.service_type, formData.preferred_date);
  //   }
  // }, [formData.preferred_date, formData.service_type]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setIsSubmitting(true);

    // const [surname, firstname] = formData.client_name.split(" ");

    // const bookingData = {
    //   appointmentTypeID: formData.service_type,
    //   date: formData.preferred_date,
    //   time: formatTimeNative(formData.preferred_time).split(" ")[0],
    //   firstName: firstname,
    //   lastName: surname,
    //   email: formData.email,
    //   phone: formData.phone,
    //   notes: formData.message,
    // };

    // try {
    //   const res = await createBooking(bookingData);

    //   if (res.ok) {
    //     setShowSuccessModal(true);

    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 3000);
    //   }

    //   if (!res.ok) {
    //     if (res.data.error) {
    //       alert(res.data.error.message);
    //     }
    //     console.log(res);
    //   }
    // } catch (error) {
    //   alert("Something went wrong");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-primary-foreground">
              Book Your Consultation
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-lg text-sm md:text-base">
              Start your loc journey with a personalized consultation. We'll
              discuss your hair goals and create a custom plan just for you.
            </p>
          </motion.div>
        </div>
      </section>

      <InlineLoadingOverlay isLoading={loadingSlots} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl shadow-lg p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                You're All Set!
              </h2>
              <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                We've sent a confirmation to your email. We'll reach out shortly
                to confirm your appointment time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <Link to={createPageUrl("Home")}>
                  <Button
                    variant="outline"
                    className="h-12 px-6 rounded-full font-medium"
                  >
                    Back to Home
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I just booked a consultation and have a question.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-medium">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Us
                  </Button>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl shadow-lg p-6 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Consultation Type */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Consultation Type *
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        value: "new_client",
                        label: "New Client",
                        desc: "First time getting locs",
                      },
                      {
                        value: "transfer_client",
                        label: "Transfer Client",
                        desc: "Existing locs, new stylist",
                      },
                    ].map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          handleChange("consultation_type", type.value)
                        }
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.consultation_type === type.value
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/30"
                        }`}
                      >
                        <p className="font-medium text-foreground text-sm">
                          {type.label}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {type.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
                    >
                      Full Name (Surname first) *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={formData.client_name}
                        onChange={(e) =>
                          handleChange("client_name", e.target.value.trim())
                        }
                        className="h-12 pl-10 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
                    >
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="h-12 pl-10 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium mb-2 block"
                    >
                      Phone *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="h-12 pl-10 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Select Service *
                    </Label>
                    <Select
                      value={formData.service_type}
                      onValueChange={(v) => {
                        handleChange("service_type", v);
                        setFormData((prev) => ({
                          ...prev,
                          preferred_date: "",
                        }));
                      }}
                      required
                    >
                      <SelectTrigger className="h-12 rounded-xl">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-muted-foreground" />
                          <SelectValue placeholder="Select service" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((service, i) => (
                          <SelectItem key={i} value={service.apptID}>
                            {service.service_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* {formData.service_type && ( */}
                  <div>
                    <Label
                      htmlFor="date"
                      className="text-sm font-medium mb-2 block"
                    >
                      Preferred Date *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                      <Input
                        id="date"
                        type="date"
                        required
                        min={getTomorrow()}
                        value={formData.preferred_date}
                        onChange={(e) => {
                          handleChange("preferred_date", e.target.value);
                          setFormData((prev) => ({
                            ...prev,
                            preferred_time: "",
                          }));
                        }}
                        className="h-12 pl-10 rounded-xl"
                      />
                    </div>
                  </div>
                  {/* )} */}

                  {/* {formData.preferred_date && ( */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Preferred Time *
                    </Label>
                    {/* {timeSlots && timeSlots.length > 0 ? ( */}
                    <Select
                      value={formData.preferred_time}
                      onValueChange={(v) => handleChange("preferred_time", v)}
                      required
                    >
                      <SelectTrigger className="h-12 rounded-xl">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <SelectValue placeholder="Select time" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot, i) => (
                          <SelectItem key={i} value={slot.time}>
                            {formatTimeNative(slot.time)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {/* ) : (
                        <div className="rounded-xl border border-border bg-background">
                          <div className="text-center py-6">
                            <Clock className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              No available time slots for this date
                            </p>
                            <button
                              onClick={() => handleChange("preferred_date", "")}
                              className="mt-3 text-sm text-accent hover:underline"
                            >
                              Choose another date
                            </button>
                          </div>
                        </div>
                      )} */}
                  </div>
                  {/* )} */}
                </div>

                {/* Message */}
                {/* <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 block"
                  >
                    Additional Notes
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your loc goals, any questions, or special requests..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="min-h-[100px] rounded-xl resize-none"
                  />
                </div> */}

                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.consultation_type ||
                    !formData.preferred_time
                  }
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Confirm Consultation
                    </>
                  )}
                </Button>

                <p className="text-center text-muted-foreground text-xs">
                  By booking, you agree to receive email confirmations and
                  appointment reminders.
                </p>
              </form>

              <BookingSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                message="Your consultation has been successfully scheduled"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Info cards below form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Calendar,
              title: "Easy Booking",
              desc: "Pick your preferred date and time",
            },
            {
              icon: Mail,
              title: "Email Confirm",
              desc: "Instant confirmation to your inbox",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp Support",
              desc: "Quick answers anytime via chat",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-5 rounded-xl bg-secondary/50"
            >
              <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-medium text-foreground text-sm">
                {item.title}
              </p>
              <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
