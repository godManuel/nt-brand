import React from "react";
import { motion } from "framer-motion";
import { Instagram, Award } from "lucide-react";

const TEAM = [
  {
    name: "Elizabeth Idowu",
    role: "Salon Manager/Managing Director",
    image: "/ceo.jpg",
    bio: "Certified Sisterlocks consultant with 10+ years of experience specializing in fine and textured hair.",
    instagram: "#",
  },
  {
    name: "Tosin Peace",
    role: "Senior Loctician",
    image:
      "https://plus.unsplash.com/premium_vector-1728574629243-0e8ac88442f1?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert in microloc installation and creative styling with 8 years of dedicated loc experience.",
    instagram: "#",
  },
  {
    name: "Tasha",
    role: "Loc Maintenance Expert",
    image:
      "https://plus.unsplash.com/premium_vector-1728572090388-ac31f1669c9c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Passionate about loc health and maintenance, ensuring every client's locs thrive beautifully.",
    instagram: "#",
  },
];

export default function TeamSection() {
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
            Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Meet Your Loc Artists
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Our team of certified specialists bring passion, expertise, and
            artistry to every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-white/80 text-xs font-medium">
                      Certified Specialist
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium mt-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {member.bio}
              </p>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors mt-3"
              >
                <Instagram className="w-4 h-4" /> Follow
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
