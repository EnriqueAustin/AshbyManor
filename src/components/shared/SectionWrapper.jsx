import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({ children, className = "", bg = "ivory", id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const bgMap = {
    ivory: "bg-ivory",
    white: "bg-white",
    navy: "bg-navy",
  };

  return (
    <section ref={ref} id={id} className={`${bgMap[bg] || bg} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1200px] mx-auto px-6 py-20 md:py-28"
      >
        {children}
      </motion.div>
    </section>
  );
}