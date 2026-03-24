import { motion } from "framer-motion";

export default function Policy() {
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
              Our Policy
            </h1>

            <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto text-sm md:text-base">
              Everything you need for beautiful, healthy locs — from
              installation to products and training.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
