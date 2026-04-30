import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoPlaceholder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[450px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/images/overview/702451873.jpg"
          alt="Ashby Manor Guest House Cape Town"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/60 flex items-center justify-center mb-6 cursor-pointer hover:bg-white/10 transition-colors duration-300"
        >
          <Play size={32} className="text-white ml-1" fill="white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/70 text-xs tracking-[0.2em] uppercase font-body mb-3"
        >
          Coming Soon
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-display text-white text-3xl md:text-5xl font-light"
        >
          Experience Ashby Manor
        </motion.h2>
      </div>
    </section>
  );
}
