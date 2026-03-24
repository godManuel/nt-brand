import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Repeat,
  Scissors,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: Sparkles,
    title: "Sisterlocks Installation",
    description:
      "Precision-installed sisterlocks using the patented technique for a natural, versatile look.",
    image: "/sister-locs.jpg",
  },
  {
    icon: Scissors,
    title: "Microlocs Installation",
    description:
      "Beautiful, uniform microlocs crafted with care for all hair types and textures.",
    image: "/microlocs-pic.jpg",
  },
  {
    icon: Repeat,
    title: "Retie & Maintenance",
    description:
      "Regular maintenance to keep your locs healthy, neat, and thriving at every stage.",
    image: "/retie.jpg",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description:
      "Learn the art of locs through our professional training programs and workshops.",
    image: "/training-pic.jpg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-5 md:p-6 -mt-8 relative">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                  <Link to="https://ntbranduk.as.me" target="_blank">
                    {" "}
                    {service.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-14"
        >
          <Link to={createPageUrl("Services")}>
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
