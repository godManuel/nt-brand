import React, { useState } from "react";
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
  User,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const WHATSAPP_NUMBER = "1234567890";
const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    client_name: "",
    email: "",
    phone: "",
    consultation_type: "",
    preferred_date: "",
    preferred_time: "",
    hair_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // await base44.entities.Consultation.create(formData);

    // // Send confirmation email
    // await base44.integrations.Core.SendEmail({
    //   to: formData.email,
    //   subject: "Your LocLuxe Consultation is Booked!",
    //   body: `
    //     <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    //       <h1 style="font-size: 24px; color: #3d3124; margin-bottom: 20px;">Consultation Confirmed ✨</h1>
    //       <p style="color: #666; line-height: 1.6;">Hi ${formData.client_name},</p>
    //       <p style="color: #666; line-height: 1.6;">Thank you for booking a consultation with LocLuxe! Here are your details:</p>
    //       <div style="background: #f8f5f0; border-radius: 12px; padding: 20px; margin: 20px 0;">
    //         <p style="margin: 8px 0; color: #3d3124;"><strong>Type:</strong> ${formData.consultation_type === "new_client" ? "New Client Consultation" : "Transfer Client Consultation"}</p>
    //         <p style="margin: 8px 0; color: #3d3124;"><strong>Date:</strong> ${formData.preferred_date}</p>
    //         <p style="margin: 8px 0; color: #3d3124;"><strong>Time:</strong> ${formData.preferred_time}</p>
    //       </div>
    //       <p style="color: #666; line-height: 1.6;">We'll confirm your appointment shortly. If you have any questions, feel free to reach out via WhatsApp.</p>
    //       <p style="color: #666; line-height: 1.6;">Looking forward to meeting you!</p>
    //       <p style="color: #b08d57; font-weight: 600;">— The LocLuxe Team</p>
    //     </div>
    //   `,
    // });

    // setIsSubmitting(false);
    // setIsSuccess(true);
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
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={formData.client_name}
                        onChange={(e) =>
                          handleChange("client_name", e.target.value)
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
                    <Label
                      htmlFor="hair"
                      className="text-sm font-medium mb-2 block"
                    >
                      Hair Type / Texture
                    </Label>
                    <Input
                      id="hair"
                      placeholder="e.g., 4C, fine, thick"
                      value={formData.hair_type}
                      onChange={(e) =>
                        handleChange("hair_type", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        onChange={(e) =>
                          handleChange("preferred_date", e.target.value)
                        }
                        className="h-12 pl-10 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Preferred Time *
                    </Label>
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
                        {TIME_SLOTS.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
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
                </div>

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
