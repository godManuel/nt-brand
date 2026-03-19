import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Nana Acquah",
    rating: 5,
    text: "It’s my first time ever getting locs & honestly I couldn’t be happier. She was very accommodating from my consultation (all my worries & questions answered) to my appointment. Clear communication & amazing hands! I haven’t stopped receiving compliments about my install. Would recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Latifa Tampuri",
    rating: 5,
    text: "Best service ever. Thank you NT and Tash. I will surely be back.",
    date: "2 weeks ago",
  },
  {
    name: "Ceccy",
    rating: 5,
    text: "I loved every minute I spent there because the care and attention given was a 💯 neat salon space warm enough to spend the whole day every service was worth the money spent.",
    date: "3 weeks ago",
  },
  // {
  //   name: "Danielle R.",
  //   rating: 5,
  //   text: "The consultation was so thorough. They really understand different hair textures and gave me the perfect loc plan for my hair type.",
  //   date: "2 months ago",
  // },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-3">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-muted-foreground text-sm font-medium">
              5.0 on Google
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {review.date}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://www.google.com/search?kgmid=/g/11yyxllw74&hl=en-GB&q=HairbyNT&shndl=30&source=sh/x/loc/osrp/m1/2&kgs=5a0269bd94f1aad1&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/osrp/m1/2#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
          >
            See all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
