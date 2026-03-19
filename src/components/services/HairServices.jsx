import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MessageCircle,
  Clock,
  DollarSign,
  ChevronRight,
  PoundSterlingIcon,
} from "lucide-react";
import { motion } from "framer-motion";



const WHATSAPP_NUMBER = "+447407326662";

const HAIR_SERVICES = [
  {
    title: "Sisterlocks Installation",
    description:
      "Full head sisterlocks installation using the patented 4-point interlocking technique. Includes consultation and first retie.",
    duration: "6-48 hours",
    priceRange: "£400",
    image: "/sister-locs.jpg",
    whatsappMsg:
      "Hi! I'm interested in Sisterlocks installation. Can you tell me more?",
  },
  {
    title: "Microlocs Installation",
    description:
      "Beautiful, uniform microlocs installed with precision. Choose from crochet, interlocking, or two-strand twist methods.",
    duration: "6-48 hours",
    priceRange: "$600 - $1,200",
    image:
      "/microlocs-pic.jpg",
    whatsappMsg:
      "Hi! I'm interested in Microlocs installation. Can you tell me more?",
  },
  {
    title: "Retie / Maintenance",
    description:
      "Regular maintenance to keep your locs tight, healthy, and looking their best. Recommended every 4-6 weeks.",
    duration: "2-6 hours",
    priceRange: "$150 - $350",
    image: "/retie.jpg",
    whatsappMsg: "Hi! I'd like to book a retie maintenance appointment.",
  },
  {
    title: "Loc Repair & Rescue",
    description:
      "Expert repair for thinning, damaged, or broken locs. Includes assessment and customized repair plan.",
    duration: "3-8 hours",
    priceRange: "$200 - $500",
    image: "repar.jpg",
    whatsappMsg: "Hi! I need help with loc repair. Can we discuss my options?",
  },
  {
    title: "Loc Styling",
    description:
      "Creative loc styling for special occasions or everyday looks. Updos, braids, twists, and more.",
    duration: "1-3 hours",
    priceRange: "$75 - $200",
    image: "/loc-styling.jpg",
    whatsappMsg: "Hi! I'd like to book a loc styling appointment.",
  },
];

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

        <div className="space-y-6">
          {HAIR_SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/30 hover:shadow-md transition-shadow h-80"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-72 lg:w-80 h-full md:h-full flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-5 md:p-8 flex flex-col">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
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
                    <Link to={createPageUrl("BookConsultation")}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
