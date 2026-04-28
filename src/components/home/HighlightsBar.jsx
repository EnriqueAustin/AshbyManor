import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Mountain, Flower2, Coffee, Wifi } from "lucide-react";

const highlights = [
  { icon: Star, label: "4-Star Heritage Manor" },
  { icon: Mountain, label: "Rooftop Terrace & Ocean Views" },
  { icon: Flower2, label: "On-Site Spa & Massage" },
  { icon: Coffee, label: "Complimentary Breakfast" },
  { icon: Wifi, label: "Free WiFi & Parking" },
];

export default function HighlightsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="bg-navy py-6 md:py-8">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-center gap-6 md:gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex items-center gap-2.5 text-white/90 ${i === highlights.length - 1 ? "col-span-2 justify-center md:justify-start" : ""}`}
            >
              <h.icon size={18} className="text-terracotta flex-shrink-0" />
              <span className="font-body text-xs md:text-sm font-medium">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}