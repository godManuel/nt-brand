import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Expert Microlocs & Sisterlocks™️ Care
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            HairbyNT is a London-based natural hair brand specialising in
            premium Microlocs & Sisterlocks™️ installation, retightening,
            repairs, and long-term loc care for Afro-textured hair.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our mission is to empower Black women to reclaim the beauty of their
            natural hair through intentional care, education, and expert
            craftsmanship in a safe, welcoming space.
          </p>

          <Link to={createPageUrl("About")}>
            <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
