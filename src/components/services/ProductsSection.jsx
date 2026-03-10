import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "1234567890";

const PRODUCTS = [
  {
    name: "Loc Moisturizing Spray",
    description:
      "Lightweight daily moisturizer that keeps locs hydrated without buildup.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    amazonLink: "https://amazon.com",
    whatsappMsg:
      "Hi! I'm interested in the Loc Moisturizing Spray. Is it available?",
  },
  {
    name: "Scalp Oil Treatment",
    description: "Nourishing oil blend for healthy scalp and strong loc roots.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
    amazonLink: "https://amazon.com",
    whatsappMsg:
      "Hi! I'm interested in the Scalp Oil Treatment. Can you tell me more?",
  },
  {
    name: "Clarifying Shampoo",
    description:
      "Gentle yet effective cleanser formulated specifically for locs.",
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&q=80",
    amazonLink: "https://amazon.com",
    whatsappMsg: "Hi! I'm interested in the Clarifying Shampoo for locs.",
  },
  {
    name: "Loc Gel & Edge Control",
    description:
      "Strong hold gel for styling and edge control without flaking.",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    amazonLink: "https://amazon.com",
    whatsappMsg: "Hi! I'm interested in the Loc Gel & Edge Control.",
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
