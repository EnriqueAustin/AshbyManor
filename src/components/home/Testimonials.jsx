import React, { useState, useEffect } from "react";
import { REVIEWS } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-terracotta fill-terracotta" />
          ))}
        </div>
        <p className="text-white/60 font-body text-xs tracking-[0.1em] uppercase mb-8">
          8.7 / 10 — Booking.com Excellent · 113 Reviews
        </p>

        <div className="relative min-h-[160px] flex items-center">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="px-10"
            >
              <p className="font-display text-terracotta text-5xl leading-none mb-4">"</p>
              <p className="font-display text-white text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                {REVIEWS[current].text}
              </p>
              <p className="text-slate_mid font-body text-sm">
                — {REVIEWS[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % REVIEWS.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-terracotta w-6" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}