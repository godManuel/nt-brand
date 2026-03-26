import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import HairServices from "../components/services/HairServices";
import ProductsSection from "../components/services/ProductsSection";
import TrainingSection from "../components/services/TrainingSection";

const NAV_ITEMS = [
  { label: "Hair Services", href: "#hair-services" },
  { label: "Products", href: "#products" },
  { label: "Training", href: "#training" },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-primary-foreground">
              Our Services
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto text-sm md:text-base">
              Everything you need for beautiful, healthy locs — from
              installation to products and training.
            </p>
          </motion.div>

          {/* Quick nav pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-5 py-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm border border-primary-foreground/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <HairServices />
      <ProductsSection />
      <TrainingSection />
    </div>
  );
}
