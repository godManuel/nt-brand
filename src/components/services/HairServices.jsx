import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MessageCircle,
  Clock,
  PoundSterlingIcon,
  Sparkles,
  Scissors,
  Repeat,
  Heart,
  Droplets,
  Flame,
  Wind,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "+447407326662";

const PRIMARY_SERVICES = [
  {
    title: "Sisterlocks™ Installation",
    description:
      "Sisterlocks™ is a refined, lightweight loc system installed using a certified technique tailored to your hair texture, density, and styling needs. It offers a uniform, versatile, and elegant foundation for clients seeking a premium loc experience. Every Sisterlocks™ journey at HairbyNT begins with a detailed in-person consultation.",
    duration: "6-48 hours",
    priceRange: "From £400",
    image: "/sister-locs.jpg",
    icon: Sparkles,
    whatsappMsg:
      "Hi! I'm interested in Sisterlocks installation. Can you tell me more?",
  },
  {
    title: "Microlocs Installation",
    description:
      "Microlocs are small, versatile locs installed using twists, braids, or full interlock depending on your hair profile and desired outcome. They offer flexibility, beauty, and a personalised approach to starting your loc journey. At HairbyNT, each Microlocs installation is tailored through consultation to ensure the most suitable method for you.",
    duration: "6-48 hours",
    priceRange: "From £400",
    image: "/microlocs-pic.jpg",
    icon: Scissors,
    whatsappMsg:
      "Hi! I'm interested in Microlocs installation. Can you tell me more?",
  },
  {
    title: "Retie Service",
    description:
      "Our retie service uses the interlocking method to neatly maintain your locs, secure new growth, and preserve the structure of your style. Each appointment is carried out with precision and care to support a healthy, polished loc journey.",
    duration: "2-6 hours",
    priceRange: "From £150",
    image: "/retie.jpg",
    icon: Repeat,
    whatsappMsg: "Hi! I'd like to book a retie maintenance appointment.",
  },
];

const ADDITIONAL_SERVICES = [
  {
    title: "Repair Session",
    description: "Expert repair for thinning, damaged, or broken locs. Includes assessment and customized repair plan.",
    duration: "1-3 hours",
    priceRange: "From £80",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Shield,
    whatsappMsg: "Hi! I need help with loc repair. Can we discuss my options?",
  },
  {
    title: "Grooming",
    description: "Professional grooming service to shape and style your locs for a polished, well-maintained look.",
    duration: "30-60 mins",
    priceRange: "From £35",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Scissors,
    whatsappMsg: "Hi! I'd like to book a grooming appointment.",
  },
  {
    title: "Scalp & Loc Treatment",
    description: "Comprehensive treatment targeting scalp health and loc nourishment for optimal hair wellness.",
    duration: "45-60 mins",
    priceRange: "From £45",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
    icon: Heart,
    whatsappMsg: "Hi! I'm interested in a scalp and loc treatment.",
  },
  {
    title: "Washing Service",
    description: "Professional wash and conditioning service to keep your locs clean, fresh, and healthy.",
    duration: "30-45 mins",
    priceRange: "From £30",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Droplets,
    whatsappMsg: "Hi! I'd like to book a washing service.",
  },
  {
    title: "Hydration Treatment",
    description: "A lightweight moisture infusion designed to revive dry scalp and dull locs without leaving residue.",
    duration: "10 mins",
    priceRange: "£15",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Wind,
    whatsappMsg: "Hi! I'm interested in the hydration treatment.",
  },
  {
    title: "Hot Oil Treatment",
    description: "A warming scalp ritual designed to nourish, soothe, and stimulate circulation.",
    duration: "45 mins",
    priceRange: "£45",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
    icon: Flame,
    whatsappMsg: "Hi! I'm interested in the hot oil treatment.",
  },
  {
    title: "Loc Detox",
    description: "Our signature deep purification service that gently lifts deep-seated buildup while protecting the integrity of your locs.",
    duration: "1 hr 30 mins",
    priceRange: "£65",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Droplets,
    whatsappMsg: "Hi! I'd like to book a loc detox service.",
  },
  {
    title: "Removal Service",
    description: "Professional and gentle removal of locs when you're ready for a change, without damaging your natural hair.",
    duration: "2-8 hours",
    priceRange: "From £150",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Scissors,
    whatsappMsg: "Hi! I'm interested in loc removal services.",
  },
  {
    title: "Curly Tip Extensions",
    description: "Add length and volume with beautiful curly tip extensions that blend seamlessly with your natural locs.",
    duration: "2-4 hours",
    priceRange: "From £120",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800",
    icon: Sparkles,
    whatsappMsg: "Hi! I'm interested in curly tip extensions.",
  },
  {
    title: "Brazilian Hair Extensions",
    description: "Our Brazilian Kinky Human Hair Extensions are designed to celebrate the beauty of natural textured hair with a seamless, authentic blend.",
    duration: "2-4 hours",
    priceRange: "From £200",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    icon: Sparkles,
    whatsappMsg: "Hi! I'm interested in Brazilian hair extensions.",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/30 hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex flex-col md:flex-row h-[300px]">
        <div className="md:w-72 lg:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex-1 p-5 md:p-8 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <service.icon className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              {service.title}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-3 md:line-clamp-4">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1.5 text-sm text-foreground/70">
              <Clock className="w-4 h-4 text-accent" />
              {service.duration}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-foreground/70">
              <PoundSterlingIcon className="w-4 h-4 text-accent" />
              {service.priceRange}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4">
            <Link to="https://ntbranduk.as.me" target="_blank">
              <Button className="w-full sm:w-auto h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 rounded-full text-sm font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function HairServices() {
  return (
    <section id="hair-services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Services
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Hair Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg text-sm md:text-base">
            From installation to maintenance, we offer comprehensive loc
            services tailored to your needs.
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Primary Services
          </h3>
          <div className="space-y-6">
            {PRIMARY_SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-accent" />
            Additional Services
          </h3>
          <div className="space-y-6">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}