import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// const WHATSAPP_NUMBER = "+447407326662";
// const WHATSAPP_MSG = encodeURIComponent(
//   "Hi! I'm interested in learning more about your Microlocs/Sisterlocks services.",
// );

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/saloon-cover.jpg"
          alt="Saloon Cover"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-accent text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4 md:mb-6"
          >
            Microlocs & Sisterlocs Specialists
          </motion.span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-2">
            HairbyNT is a London-based natural{" "}
            <span className="italic text-accent"> hair brand</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 md:mb-5 max-w-lg">
            specialising in premium Microlocs & Sisterlocks™️ installation,
            retightening, repairs, and long-term loc care for Afro-textured
            hair.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="https://ntbranduk.as.me"
              className="flex gap-2 items-center w-full sm:w-auto h-13 md:h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-sm md:text-base font-semibold shadow-lg"
              target="_blank"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Link>

            {/* <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-13 md:h-14 px-8 rounded-full text-sm md:text-base font-semibold border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat With Us
              </Button>
            </a> */}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
