import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const WHATSAPP_NUMBER = "+447407326662";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Ultimate Guide to Microlocs Installation",
    excerpt:
      "Everything you need to know before getting microlocs - from consultation to aftercare.",
    content: `
      <p>Microlocs are a beautiful, versatile protective style that offers the freedom of locs with smaller, more manageable sections. Whether you're considering microlocs for the first time or looking to deepen your understanding, this comprehensive guide covers everything you need to know.</p>
      
      <h2>What Are Microlocs?</h2>
      <p>Microlocs are small-diameter locs that are typically installed using braids, twists, or interlocking methods. Unlike traditional locs which are larger in size, microlocs offer more styling versatility and can be parted and styled similarly to loose natural hair.</p>
      
      <h2>Installation Methods</h2>
      <p>There are several methods for installing microlocs:</p>
      <ul>
        <li><strong>Two-Strand Twists:</strong> A popular method where hair is divided into small sections and twisted. Over time, these twists will naturally loc.</li>
        <li><strong>Braided Base:</strong> Hair is braided at the root before being twisted or left to loc. This provides extra security for the loc foundation.</li>
        <li><strong>Interlocking:</strong> A method that uses a tool to pull the end of the loc through the root, creating a tight, uniform loc.</li>
        <li><strong>Crochet Method:</strong> Uses a specialized needle to create instant locs by pulling hair through itself.</li>
      </ul>
      
      <h2>Installation Time</h2>
      <p>Microlocs installation can take anywhere from 6 to 48 hours depending on:</p>
      <ul>
        <li>Length and density of your hair</li>
        <li>Size of the locs (smaller locs take longer)</li>
        <li>Installation method chosen</li>
        <li>Experience level of the loctician</li>
      </ul>
      <p>Most installations are completed over 2-3 sessions to ensure comfort and precision.</p>
      
      <h2>Cost of Microlocs</h2>
      <p>The investment for microlocs varies based on several factors. At HairbyNT, pricing starts from £400 for a full installation. Factors affecting cost include:</p>
      <ul>
        <li>Hair length and density</li>
        <li>Installation method</li>
        <li>Desired loc size</li>
        <li>Any additional services (detox, treatment, etc.)</li>
      </ul>
      
      <h2>The Consultation Process</h2>
      <p>A thorough consultation is essential before committing to microlocs. During your consultation we will:</p>
      <ul>
        <li>Assess your hair texture and density</li>
        <li>Discuss your lifestyle and maintenance expectations</li>
        <li>Determine the best loc size and method for you</li>
        <li>Provide a detailed quote and timeline</li>
        <li>Answer all your questions about the process</li>
      </ul>
      
      <h2>Aftercare and Maintenance</h2>
      <p>Proper maintenance is key to healthy, beautiful locs. Here's what to expect:</p>
      <ul>
        <li><strong>First 4 weeks:</strong> Avoid washing your locs. Gently mist with a light spray if needed.</li>
        <li><strong>First Retie (4-6 weeks):</strong> Your first maintenance appointment to tighten new growth.</li>
        <li><strong>Regular Maintenance:</strong> Retie appointments every 4-8 weeks depending on your hair growth rate.</li>
        <li><strong>Night Protection:</strong> Always wear a satin bonnet or use a satin pillowcase.</li>
        <li><strong>Washing:</strong> Use residue-free, clarifying shampoos to prevent buildup.</li>
      </ul>
      
      <h2>Common Concerns</h2>
      <p><strong>Will microlocs damage my hair?</strong> When installed and maintained correctly, microlocs are gentle on your hair. The key is finding an experienced loctician and following proper maintenance.</p>
      <p><strong>How long do microlocs last?</strong> With proper care, microlocs can last for years. Many clients maintain their locs indefinitely with regular reties.</p>
      <p><strong>Can I style my microlocs?</strong> Yes! Microlocs offer incredible styling versatility. You can wear them up, down, in braids, ponytails, and even curled or heat-styled with proper precautions.</p>
      
      <h2>Is Now the Right Time?</h2>
      <p>Microlocs are a commitment, but they're also liberating. If you're ready to embrace low-maintenance, versatile, protective styling, microlocs might be perfect for you. Book a consultation to start your journey today.</p>
    `,
    image:
      "https://images.pexels.com/photos/3807745/pexels-photo-3807745.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorBio:
      "Certified Sisterlocks & Microlocs specialist with over 8 years of experience. Passionate about helping clients embrace their natural hair journey.",
    authorAvatar: "/avatar.jpg",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Installation",
    tags: ["Microlocs", "Beginners Guide", "Installation", "Loc Care"],
  },
  {
    id: 2,
    title: "Sisterlocks vs Microlocs: What's the Difference?",
    excerpt:
      "A detailed comparison between Sisterlocks and Microlocs to help you choose the right loc system.",
    content: `
      <p>Choosing between Sisterlocks and Microlocs is one of the most common questions clients ask. While both are small-diameter loc systems, they have distinct differences that may make one better suited for your hair type and lifestyle.</p>
      
      <h2>What Are Sisterlocks?</h2>
      <p>Sisterlocks is a patented loc system created by Dr. JoAnne Cornwell. It requires certification to install and uses a specific tool and technique to create uniform, consistently sized locs. The installation process is meticulous and results in very fine, lightweight locs.</p>
      
      <h2>What Are Microlocs?</h2>
      <p>Microlocs are small locs installed using various methods including twists, braids, or interlocking. Unlike Sisterlocks, there's no single "correct" method - the technique is tailored to your hair texture and desired outcome.</p>
      
      <h2>Key Differences</h2>
      <ul>
        <li><strong>Installation Method:</strong> Sisterlocks require a certified technician using a specific tool. Microlocs can be installed by any experienced loctician.</li>
        <li><strong>Loc Size:</strong> Sisterlocks are uniformly tiny (typically the size of a pencil lead). Microlocs can vary from very small to medium-sized.</li>
        <li><strong>Cost:</strong> Sisterlocks installation is typically more expensive due to the certification and specialized technique.</li>
        <li><strong>Maintenance:</strong> Both require regular reties, but Sisterlocks maintenance can only be performed by certified Sisterlocks technicians.</li>
        <li><strong>Hair Types:</strong> Sisterlocks work on a wide range of hair textures but were specifically designed for naturally textured hair. Microlocs can be adapted for most hair types.</li>
      </ul>
      
      <h2>Which Is Right for You?</h2>
      <p>Choose Sisterlocks if you want the "official" patented system with strict uniformity and access to certified technicians. Choose Microlocs if you want flexibility in size and method, more affordable options, and the ability to switch between maintenance providers.</p>
    `,
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nadege T",
    authorBio:
      "Certified Sisterlocks & Microlocs specialist with over 8 years of experience.",
    authorAvatar: "/avatar.jpg",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Education",
    tags: ["Sisterlocks", "Microlocs", "Comparison"],
  },
  // Add other blog posts with similar structure...
];

// Related posts component
function RelatedPosts({ currentPostId, category }) {
  const relatedPosts = BLOG_POSTS.filter(
    (post) => post.id !== currentPostId && post.category === category,
  ).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Related Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.id} to={createPageUrl(`BlogPost/${post.id}`)}>
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Share buttons component
function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
      >
        <Facebook className="w-4 h-4 text-muted-foreground" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
      >
        <Twitter className="w-4 h-4 text-muted-foreground" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
      >
        <Linkedin className="w-4 h-4 text-muted-foreground" />
      </a>
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-full hover:bg-muted transition-colors relative"
      >
        <LinkIcon className="w-4 h-4 text-muted-foreground" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-2 py-1 rounded whitespace-nowrap">
            Link copied!
          </span>
        )}
      </button>
    </div>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Find the post by id
    const foundPost = BLOG_POSTS.find((p) => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    }
    setLoading(false);
  }, [id]);

  // Scroll to top when post loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-4">
          Post Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to={createPageUrl("Blog")}>
          <Button className="bg-accent hover:bg-accent/90 text-white rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const postUrl = window.location.href;

  return (
    <div className="pb-16 md:pb-0">
      {/* Hero with post image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="px-3 py-1 rounded-full bg-accent text-white text-xs">
                  {post.category}
                </span>
                <span className="text-white/70">{post.readTime}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back button */}
        <Link to={createPageUrl("Blog")} className="inline-block mb-8">
          <Button
            variant="ghost"
            className="pl-0 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article content */}
        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-li:text-muted-foreground prose-strong:text-foreground max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8 pt-4 border-t border-border">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`${createPageUrl("Blog")}?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-1.5 rounded-full bg-secondary text-xs text-foreground/70 hover:bg-accent/10 hover:text-accent transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Author bio */}
        <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 my-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-accent">
                {post.author.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                Written by {post.author}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {post.authorBio}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I read your article "${post.title}" and have a question.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                Ask {post.author} a question
              </a>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between py-4 border-y border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                liked
                  ? "bg-red-500/10 text-red-500"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              <span className="text-sm">Like</span>
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                saved
                  ? "bg-accent/10 text-accent"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
              <span className="text-sm">Save</span>
            </button>
          </div>
          <ShareButtons title={post.title} url={postUrl} />
        </div>

        {/* Related posts */}
        <RelatedPosts currentPostId={post.id} category={post.category} />

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
            Ready to Start Your Loc Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Book a consultation with our certified specialists and let's bring
            your loc vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={createPageUrl("BookConsultation")}>
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full">
                Book Consultation
              </Button>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              a
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Questions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
