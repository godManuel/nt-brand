import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export default function LoadingOverlay({
  isLoading,
  message = "Loading available slots...",
}) {
  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Loading Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, type: "spring", damping: 25 }}
              className="bg-card rounded-2xl shadow-xl border border-border/30 p-8 min-w-[280px]"
            >
              <div className="flex flex-col items-center gap-4">
                {/* Animated Spinner */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-accent/20 border-t-accent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent animate-pulse" />
                  </div>
                </div>

                {/* Loading Message */}
                <div className="text-center">
                  <p className="text-foreground font-medium">{message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Please wait while we fetch available times
                  </p>
                </div>

                {/* Animated Dots */}
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-1.5 h-1.5 rounded-full bg-accent/60"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-accent/60"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-1.5 h-1.5 rounded-full bg-accent/60"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
