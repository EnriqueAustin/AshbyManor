import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

const heroImages = [
  "/images/overview/hero1.jpg",
  "/images/overview/hero2.jpg",
  "/images/overview/702451820.jpg",
  "/images/overview/714309515.jpg",
  "/images/overview/702451873.jpg",
  "/images/overview/809341491.jpg",
];

export default function DualHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background images - stacked absolutely for crossfade */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt="Ashby Manor Cape Town"
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/50 z-[2]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 text-xs md:text-sm tracking-[0.2em] uppercase font-body mb-5"
        >
          Fresnaye · Sea Point · Cape Town
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] max-w-5xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Ashby Manor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/80 font-body font-light text-base md:text-lg lg:text-xl mt-4 max-w-2xl leading-relaxed"
        >
          A Victorian heritage guest house with rooftop ocean views, curated art &amp; the warmth of a Cape Town home.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <CTAButton href={BOOKING_URL}>Check Availability</CTAButton>
          <CTAButton variant="ghost" to="/rooms">Explore Rooms</CTAButton>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show slide ${i + 1} of ${heroImages.length}`}
              aria-current={i === current}
              className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? "w-10 bg-white" : "w-5 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
