import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UserPlus, RefreshCw, ArrowRight, Calendar } from "lucide-react";
import { createPageUrl } from "@/utils";
import { useNavigate } from "react-router-dom";

export default function ConsultationTypeModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBooking = (type) => {
    const params = new URLSearchParams({
      type: type,
    });

    // Navigate to booking page with params
    navigate(`${createPageUrl("BookConsultation")}?${params.toString()}`);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, type: "spring", damping: 25 }}
              className="w-full max-w-md"
            >
              <div className="bg-card rounded-2xl shadow-xl border border-border/30 overflow-hidden">
                {/* Header */}
                <div className="relative px-6 pt-6 pb-4 border-b border-border">
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-1 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Book a Consultation
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Choose your consultation type
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    {/* New Client Option */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBooking("new_client")}
                      className="w-full group"
                    >
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-200">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center flex-shrink-0">
                          <UserPlus className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            New Client
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            First time booking with LocLuxe
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.button>

                    {/* Transfer Client Option */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBooking("transfer_client")}
                      className="w-full group"
                    >
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-200">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                            Transfer Client
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Already have an account with us
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.button>
                  </div>

                  {/* <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Need help choosing?{" "}
                      <button className="text-accent hover:underline font-medium">
                        Contact support
                      </button>
                    </p>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
