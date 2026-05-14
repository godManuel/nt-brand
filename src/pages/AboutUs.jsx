import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  Users,
  Award,
  Package,
  ShoppingBag,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Our Story", href: "#our-story" },
  { label: "Experience", href: "#experience" },
  { label: "Products", href: "#products" },
];

const STATS = [
  { label: "Years Experience", value: "8+", icon: Award },
  { label: "Microlocs Installations", value: "100+", icon: Users },
  { label: "Maintenance Sessions", value: "800+", icon: CheckCircle2 },
  { label: "UK Cities Served", value: "10+", icon: MapPin },
];

const PRODUCTS = [
  {
    name: "ACV Rinse Clarifying Shampoo",
    description: "Deep cleansing shampoo for healthy locs",
    price: "£12.99",
    amazonUrl: "https://amzn.to/4t1oc6e",
    image: "/products/acv-rinse.jpg",
  },
  {
    name: "Suave Clarifying Shampoo",
    description: "Gentle clarifying formula for all hair types",
    price: "£8.99",
    amazonUrl: "https://amzn.to/3NpCmyN",
    image: "/products/suave-shampoo.jpg",
  },
];

const PRODUCT_CATEGORIES = [
  "Extensions",
  "Favorite Loc Essentials",
  "ACV Rinse",
  "Suave Shampoo",
  "My Products",
  "Bonnets",
  "Hair Care Products",
];

export default function About() {
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
              About Us
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              London-based natural hair specialists dedicated to empowering
              Black women through expert Microlocs & Sisterlocks™️ care
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

      {/* Our Story Section */}
      <section id="our-story" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                HairbyNT
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HairbyNT is a London-based natural hair brand specialising in
                premium Microlocs & Sisterlocks™️ installation, retightening,
                repairs, and long-term loc care for Afro-textured hair.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower Black women to reclaim the beauty of
                their natural hair through intentional care, education, and
                expert craftsmanship in a safe, welcoming space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img
                  src="/saloon-cover.jpg"
                  alt="HairbyNT Studio"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Years of dedicated service and thousands of satisfied clients
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <h3 className="font-semibold text-lg text-foreground mb-4">
              What sets us apart:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "8+ years combined experience as Microlocs specialists",
                "100+ successful Microlocs installations",
                "800+ maintenance and repair sessions completed",
                "Premium loc care delivered across 10+ UK cities",
                "Extensive experience with a wide range of Afro-textured hair types",
                "Dedicated to ongoing education and technique refinement",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Our Favorites</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Products for Sale
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated essentials for your loc care routine
            </p>
          </motion.div>

          {/* Product Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/70"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Featured Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.description}
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-accent">
                      {product.price}
                    </span>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                        Shop on Amazon
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Products Link */}
          <div className="text-center mt-10">
            <a
              href="https://amazon.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              View all products on Amazon
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
