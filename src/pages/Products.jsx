// Products.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import ProductsSection from "@/components/services/ProductsSection";

const WHATSAPP_NUMBER = "+447407326662";

export default function Products() {
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
              Our Products
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Hand-picked loc care essentials curated for healthy, beautiful
              locs — from extensions to daily maintenance products.
            </p>
          </motion.div>
        </div>
      </section>

      <ProductsSection />
    </div>
  );
}
