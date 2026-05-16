import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  Tag,
  Search,
} from "lucide-react";

const WHATSAPP_NUMBER = "+447407326662";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Ultimate Guide to Microlocs Installation",
    excerpt:
      "Everything you need to know before getting microlocs - from consultation to aftercare. Learn about the different methods, maintenance schedules, and what to expect during your loc journey.",
    image:
      "https://images.pexels.com/photos/3807745/pexels-photo-3807745.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorAvatar: "/avatar.jpg",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Installation",
    tags: ["Microlocs", "Beginners Guide", "Installation"],
    featured: true,
  },
  {
    id: 2,
    title: "Sisterlocks vs Microlocs: What's the Difference?",
    excerpt:
      "A detailed comparison between Sisterlocks and Microlocs to help you choose the right loc system for your hair type and lifestyle goals.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorAvatar: "/avatar.jpg",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Education",
    tags: ["Sisterlocks", "Microlocs", "Comparison"],
    featured: false,
  },
  {
    id: 3,
    title: "Essential Loc Care Routine for Healthy Locs",
    excerpt:
      "Learn the daily, weekly, and monthly routines to keep your locs clean, moisturized, and thriving at every stage of your journey.",
    image:
      "https://images.pexels.com/photos/3998400/pexels-photo-3998400.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorAvatar: "/avatar.jpg",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "Maintenance",
    tags: ["Loc Care", "Maintenance", "Moisture"],
    featured: false,
  },
  {
    id: 4,
    title: "How Often Should You Retie Your Locs?",
    excerpt:
      "A comprehensive guide to retie schedules, factors affecting growth, and tips for maintaining neat, healthy locs between appointments.",
    image:
      "https://images.pexels.com/photos/3998402/pexels-photo-3998402.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorAvatar: "/avatar.jpg",
    date: "February 28, 2026",
    readTime: "5 min read",
    category: "Maintenance",
    tags: ["Retie", "Maintenance", "New Growth"],
    featured: false,
  },
  {
    id: 5,
    title: "Loc Detox: Why Your Locs Need Deep Cleansing",
    excerpt:
      "Discover the benefits of professional loc detox treatments and how they remove buildup, restore shine, and promote healthy loc growth.",
    image:
      "https://images.pexels.com/photos/3998406/pexels-photo-3998406.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorAvatar: "/avatar.jpg",
    date: "February 20, 2026",
    readTime: "7 min read",
    category: "Treatment",
    tags: ["Detox", "Deep Cleanse", "Scalp Health"],
    featured: false,
  },
  {
    id: 6,
    title: "Protecting Your Locs While Sleeping",
    excerpt:
      "The best bonnets, pillowcases, and nighttime routines to prevent breakage, frizz, and maintain your loc style.",
    image:
      "https://images.pexels.com/photos/4025062/pexels-photo-4025062.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorAvatar: "/avatar.jpg",
    date: "February 15, 2026",
    readTime: "4 min read",
    category: "Care Tips",
    tags: ["Night Care", "Bonnets", "Protection"],
    featured: false,
  },
];

const CATEGORIES = [
  { name: "All Posts", count: BLOG_POSTS.length },
  {
    name: "Installation",
    count: BLOG_POSTS.filter((p) => p.category === "Installation").length,
  },
  {
    name: "Maintenance",
    count: BLOG_POSTS.filter((p) => p.category === "Maintenance").length,
  },
  {
    name: "Education",
    count: BLOG_POSTS.filter((p) => p.category === "Education").length,
  },
  {
    name: "Treatment",
    count: BLOG_POSTS.filter((p) => p.category === "Treatment").length,
  },
  {
    name: "Care Tips",
    count: BLOG_POSTS.filter((p) => p.category === "Care Tips").length,
  },
];

const POPULAR_TAGS = [
  "Microlocs",
  "Sisterlocks",
  "Loc Care",
  "Maintenance",
  "Retie",
  "Detox",
  "Beginners Guide",
  "Moisture",
  "Scalp Health",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((post) => post.featured);

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Our Blog</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-primary-foreground">
              Locs & Lifestyle
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Expert advice, care tips, and inspiration for your loc journey —
              from installation to lifelong maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar - Mobile */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost &&
              selectedCategory === "All Posts" &&
              !searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl overflow-hidden border border-border/30">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <span className="px-2 py-1 rounded-full bg-accent/10 text-accent">
                            Featured
                          </span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {featuredPost.author}
                          </div>
                        </div>
                        <Link to={createPageUrl(`BlogPost/${featuredPost.id}`)}>
                          <Button className="bg-accent hover:bg-accent/90 text-white rounded-full">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/30 group hover:shadow-md transition-all duration-300"
                  >
                    <Link to={createPageUrl(`BlogPost/${post.id}`)}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span className="px-2 py-1 rounded-full bg-accent/10 text-accent">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link to={createPageUrl(`BlogPost/${post.id}`)}>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                        </div>
                        <Link to={createPageUrl(`BlogPost/${post.id}`)}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-accent"
                          >
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">
                  No posts found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Posts");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:block mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-card rounded-2xl border border-border/30 p-5 mb-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-accent" />
                Categories
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors text-left ${
                      selectedCategory === category.name
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-muted/50 text-foreground/70"
                    }`}
                  >
                    <span className="text-sm">{category.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-card rounded-2xl border border-border/30 p-5 mb-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-secondary text-xs text-foreground/70 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-accent/20 p-5">
              <h3 className="font-semibold text-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Get the latest loc care tips and updates straight to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent mb-3"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full text-sm">
                Subscribe
              </Button>
            </div> */}

            {/* Connect */}
            <div className="mt-6 text-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                Have questions? Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
