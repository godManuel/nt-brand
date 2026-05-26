import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  PoundSterlingIcon,
  CheckCircle2,
  XCircle, 
  AlertCircle,
  Sparkles,
  FileText,
  UserCheck,
  BadgeCheck,
  Scissors,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const WHATSAPP_NUMBER = "+447407326662";

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
              Transfer Clients Policy
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Guidelines for clients transferring their loc care to HairbyNT
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
            <Heart className="w-4 h-4" />
            <span>Welcome to HairbyNT</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We're excited to support your Microloc journey. Please review our
            transfer policy to ensure a smooth transition and the best care for
            your locs.
          </p>
        </motion.div>

        {/* Consultation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 bg-card rounded-2xl border border-border/30 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                1. Consultation (Mandatory)
              </h2>
              <p className="text-muted-foreground mb-3">
                A non-refundable virtual consultation is required for your first
                retie appointment.
              </p>
              <div className="bg-secondary/30 rounded-xl p-4 mt-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <p className="font-medium text-foreground">
                      Virtual Consultation Fee
                    </p>
                    <p className="text-2xl font-bold text-accent">£15</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>✓ Fee deductible from retie if you proceed</p>
                    <p>✗ Non-refundable if you do not proceed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Eligibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 bg-card rounded-2xl border border-border/30 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                2. Eligibility
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-foreground">
                      Required
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Last retie within{" "}
                    <span className="font-semibold text-foreground">
                      10 weeks
                    </span>
                  </p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-foreground">
                      Not Accepted
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Loc extensions
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    If these are not met, service cannot proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10 bg-card rounded-2xl border border-border/30 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <PoundSterlingIcon className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Pricing
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-border py-2">
                  <span className="font-medium">200-299 locs</span>
                  <span className="text-xl font-bold text-accent">£90</span>
                </div>
                <div className="flex justify-between items-center border-b border-border py-2">
                  <span className="font-medium">300-399 locs</span>
                  <span className="text-xl font-bold text-accent">£100</span>
                </div>
                <div className="flex justify-between items-center border-b border-border py-2">
                  <span className="font-medium">400-500 locs</span>
                  <span className="text-xl font-bold text-accent">£120</span>
                </div>
                <div className="flex justify-between items-center border-b border-border py-2">
                  <span className="font-medium">500-599 locs</span>
                  <span className="text-xl font-bold text-accent">£150</span>
                </div>
              </div>
              <div className="mt-5 p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <span className="font-medium text-foreground">
                        Please Note:
                      </span>{" "}
                      These prices apply to clients returning within 7 weeks of
                      undergrowth.
                    </p>
                    <p>
                      An additional charge will apply for each week beyond this
                      period due to increased undergrowth.
                    </p>
                    <p>
                      Extra fees also apply for excessive undergrowth,
                      reconstruction, or touch-ups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Includes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10 bg-card rounded-2xl border border-border/30 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Scissors className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Service Includes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">Full retie</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Note:</span>{" "}
                    Transfer reties may take longer due to grid differences or
                    gaps in maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Before Booking Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-10 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/20 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                Before Booking – Please Confirm:
              </h2>
              <div className="space-y-3">
                {[
                  "Loc count",
                  "Date of installation / last retie",
                  "No extensions (service cannot proceed if yes)",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center pt-4"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <p className="text-muted-foreground italic">
              We look forward to supporting your Microloc journey ✨
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://ntbranduk.as.me" target="_blank">
              <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm a transfer client and would like to discuss my locs before booking.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-12 px-8 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <FileText className="w-4 h-4 mr-2" />
                Ask Questions
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
