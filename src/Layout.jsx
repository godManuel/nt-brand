import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", page: "Home" },
  { label: "About", page: "About" },
  { label: "Services", page: "Services" },
  { label: "Book", page: "https://ntbranduk.as.me", external: true },
  { label: "Policy", page: "Policy" },
];

const WHATSAPP_NUMBER = "+447407326662";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I'm interested in learning more about your Microlocs/Sisterlocks services.",
);

const ADMIN_PAGES = [
  "AdminDashboard",
  "AdminBookings",
  "AdminTeam",
  "AdminServices",
  "AdminProducts",
  "AdminSettings",
  "AdminLogin",
];

export default function Layout({ children, currentPageName }) {
  const isAdmin = ADMIN_PAGES.includes(currentPageName);
  if (isAdmin) return <>{children}</>;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 group"
            >
              {/* Logo Image */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="NT BRAND LTD Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback-logo.png"; // Optional fallback
                  }}
                />
              </div>

              {/* Brand Name */}
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-semibold text-primary tracking-tight leading-tight">
                  NT BRAND LTD
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground tracking-wide hidden sm:block">
                  Microlocs & Sisterlocks Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.page}
                  to={link.external ? link.page : createPageUrl(link.page)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                    currentPageName === link.page
                      ? "text-accent"
                      : "text-foreground/70"
                  }`}
                  target={link.external ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link to={createPageUrl("BookConsultation")}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-6 rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </Link>
            </nav>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-11 w-11">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] bg-background p-0"
                >
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10">
                          <img
                            src="/logo.png"
                            alt="NT BRAND LTD Logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-serif text-xl font-semibold text-primary">
                          NT BRAND LTD
                        </span>
                      </div>
                    </div>
                    <nav className="flex flex-col p-6 gap-1">
                      {NAV_LINKS.map((link) => (
                        <SheetClose key={link.page} asChild>
                          <Link
                            to={createPageUrl(link.page)}
                            className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                              currentPageName === link.page
                                ? "bg-secondary text-accent"
                                : "text-foreground/70 hover:bg-secondary"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="mt-auto p-6 space-y-3">
                      <SheetClose asChild>
                        <Link
                          to={createPageUrl("BookConsultation")}
                          className="block"
                        >
                          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Consultation
                          </Button>
                        </Link>
                      </SheetClose>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full h-12 rounded-full font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp Us
                        </Button>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <img
                    src="/logo.png"
                    alt="NT BRAND LTD Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif text-3xl font-semibold">
                  NT BRAND LTD
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                HairbyNT is a London-based natural hair brand specialising in
                premium Microlocs & Sisterlocks™️ installation, retightening,
                repairs, and long-term loc care for Afro-textured hair.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/hairbynt_uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} NT Brand Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Sticky Book Button (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-background/95 backdrop-blur-md border-t border-border px-4 py-2.5">
        <Link to={createPageUrl("BookConsultation")}>
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-semibold">
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}
