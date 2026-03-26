import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "+447407326662";

const PRODUCTS = [
  {
    name: "Extensions",
    description:
      "Premium Brazilian Kinky Human Hair Extensions available in 3B to 4C textures, including Burmese curls. Perfect for adding length and volume with a seamless blend.",
    image: "/products/extention-product.jpg",
    amazonLink: "#",
    whatsappMsg:
      "Hi! I'm interested in your Extensions. Do you have them in stock?",
  },
  {
    name: "Favorite Loc Essentials",
    description:
      "Essential loc care products including moisturizing spray, loc gel, and edge control for daily maintenance and styling.",
    image: "/products/loc-essentials.jpg",
    amazonLink: "#",
    whatsappMsg:
      "Hi! I'm interested in your Favorite Loc Essentials. Can you tell me more?",
  },
  {
    name: "ACV Rinse Clarifying Shampoo",
    description:
      "Apple Cider Vinegar Clarifying Rinse is a unique deep cleanser that is perfect for removing weekly product build-up without stripping hair of its moisture.",
    image: "/products/acv.jpg",
    amazonLink: "https://amzn.to/4t1oc6e",
    whatsappMsg: "Hi! I'm interested in the ACV Rinse. Is it available?",
  },
  {
    name: "Suave Clarifying Shampoo",
    description:
      "Suave Essentials Daily Clarifying Shampoo gently cleanses hair, provides 2X more moisture when used with Daily Clarifying Conditioner and brings out hair's natural beauty and shine",
    image: "/products/suave-shampoo.jpg",
    amazonLink: "https://amzn.to/3NpCmyN",
    whatsappMsg: "Hi! I'm interested in the Suave Shampoo.",
  },
  {
    name: "Bonnets",
    description:
      "Satin lined bonnets and extra large loc bonnets designed to protect your locs while sleeping, retain moisture, and prevent frizz.",
    image: "/products/bonnets.jpg",
    amazonLink: "#",
    whatsappMsg:
      "Hi! I'm interested in the Bonnets. Do you have them in stock?",
  },
  {
    name: "Hair Care Products",
    description:
      "Complete hair care collection including clarifying shampoo and loc repair treatment for healthy, beautiful locs.",
    image: "/products/hair-care-products.jpg",
    amazonLink: "#",
    whatsappMsg: "Hi! I'm interested in your Hair Care Products.",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Shop
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Recommended Products
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg text-sm md:text-base">
            Our hand-picked collection of loc care essentials available on
            Amazon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/30 group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-base">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Shop on Amazon
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="w-full h-11 rounded-full text-sm text-accent hover:text-accent hover:bg-accent/10"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask About This
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Our Amazon Storefront
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
