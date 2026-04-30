import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, PawPrint, Sunrise, Utensils, Car, Waves } from "lucide-react";

const experiences = [
  {
    icon: Wifi,
    image: "/images/overview/702451797.jpg",
    title: "Digital Nomad Ready",
    text: "100+ Mbps WiFi, quiet workspaces, and great coffee — stay productive with ocean views.",
  },
  {
    icon: PawPrint,
    image: "/images/overview/702451780.jpg",
    title: "Pet Friendly",
    text: "Your furry companions are welcome. Garden space and pet-friendly rooms available on request.",
  },
  {
    icon: Sunrise,
    image: "/images/overview/702451900.jpg",
    title: "Rooftop Views",
    text: "Panoramic vistas of Lion's Head, Signal Hill, and the Atlantic from our rooftop terrace.",
  },
  {
    icon: Utensils,
    image: "/images/overview/702451850.jpg",
    title: "Breakfast Included",
    text: "A complimentary made-to-order breakfast served daily in the garden or dining room.",
  },
  {
    icon: Car,
    image: "/images/overview/714309508.jpg",
    title: "Free Parking",
    text: "Complimentary on-site parking — a rare find in Sea Point and Fresnaye.",
  },
  {
    icon: Waves,
    image: "/images/overview/714309504.jpg",
    title: "Steps from the Sea",
    text: "Milton Beach is an 8-minute walk. The Sea Point Promenade and Clifton are just minutes away.",
  },
];

export default function ExperienceGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">
            The Ashby Experience
          </p>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-medium">
            More Than a Place to Stay
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg h-72"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <exp.icon size={22} className="text-terracotta mb-3" />
                <h3 className="font-display text-white text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{exp.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
