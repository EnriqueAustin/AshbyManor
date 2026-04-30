import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/overview/702451900.jpg"
          alt="Ashby Manor rooftop view"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      <div ref={ref} className="relative z-10 max-w-[700px] mx-auto px-6 py-20 md:py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3"
        >
          Stay Connected
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-white text-3xl md:text-4xl font-medium mb-4"
        >
          Seasonal Specials &amp; Cape Town Insider Tips
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/60 font-body text-sm mb-8"
        >
          Join our mailing list for exclusive rates and travel inspiration. No spam, unsubscribe anytime.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body text-sm focus:outline-none focus:border-terracotta transition-colors"
          />
          <button
            type="submit"
            className="bg-terracotta hover:bg-terracotta-dark text-white font-body font-semibold text-sm px-8 py-3 rounded-md transition-all duration-150 hover:-translate-y-px"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
