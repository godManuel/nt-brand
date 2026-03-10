import React from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  GraduationCap,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const COURSES = [
  {
    title: "Sisterlocks Fundamentals",
    description:
      "Learn the foundational techniques of sisterlocks installation and maintenance. Perfect for beginners.",
    level: "Beginner",
    format: "Online + In-Person",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Microlocs Masterclass",
    description:
      "Advanced techniques in microloc installation, including crochet, interlocking, and creative parting patterns.",
    level: "Intermediate",
    format: "In-Person Workshop",
    icon: Award,
    link: "#",
  },
  {
    title: "Loc Business Bootcamp",
    description:
      "Everything you need to start and grow your own loc business. Marketing, pricing, client management, and more.",
    level: "All Levels",
    format: "Online Course",
    icon: Users,
    link: "#",
  },
];

export default function TrainingSection() {
  return (
    <section id="training" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Education
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Training & Courses
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg text-sm md:text-base">
            Level up your skills with our professional training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/30 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <course.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-1">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  {course.level}
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {course.format}
                </span>
              </div>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Learn More
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
