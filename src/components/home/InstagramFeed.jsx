import React from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = [
  {
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    likes: 234,
  },
  {
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
    likes: 189,
  },
  {
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=400&q=80",
    likes: 312,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&q=80",
    likes: 156,
  },
  {
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    likes: 278,
  },
  {
    image:
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&q=80",
    likes: 198,
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <Instagram className="w-8 h-8 text-accent mx-auto mb-3" />
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">@locluxe</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {POSTS.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium text-sm">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us on Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
