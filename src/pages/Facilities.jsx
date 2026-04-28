import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Mountain, Flower2, TreePine, Coffee, BookOpen, Car,
  Wifi, Sparkles, Users, Plane, Shirt, Clock, Lock,
  CarFront, Dog, Ban, Palette, BedDouble, Tv, CupSoda,
  Refrigerator, Wind, ShowerHead, Eye
} from "lucide-react";

const facilities = [
  { icon: Mountain, label: "Rooftop terrace", desc: "Lion's Head & ocean views" },
  { icon: Flower2, label: "On-site spa", desc: "Swedish massage & body treatments" },
  { icon: TreePine, label: "Garden & outdoor seating", desc: "Peaceful relaxation space" },
  { icon: Coffee, label: "Complimentary breakfast", desc: "Made-to-order, hearty" },
  { icon: BookOpen, label: "Library & shared lounge", desc: "Cozy reading space" },
  { icon: Car, label: "Free on-site parking", desc: "Limited availability" },
  { icon: Wifi, label: "Free WiFi throughout", desc: "100+ Mbps" },
  { icon: Sparkles, label: "Daily housekeeping", desc: "Fresh & spotless" },
  { icon: Users, label: "Concierge & tour desk", desc: "Local expertise" },
  { icon: Plane, label: "Airport shuttle", desc: "Surcharge, pre-book" },
  { icon: Shirt, label: "Laundry & dry cleaning", desc: "Available on request" },
  { icon: Clock, label: "Express check-in/out", desc: "Quick & seamless" },
  { icon: Lock, label: "Safe deposit box", desc: "At front desk" },
  { icon: CarFront, label: "Car rental desk", desc: "Arranged on request" },
  { icon: Dog, label: "Pet-friendly", desc: "On request, charges apply" },
  { icon: Ban, label: "Non-smoking throughout", desc: "Outdoor area available" },
];

const inRoom = [
  { icon: Palette, label: "Individually curated art & decor" },
  { icon: BedDouble, label: "Premium pillow-top mattresses & bedding" },
  { icon: Tv, label: "Flat-screen TV with satellite channels" },
  { icon: Wifi, label: "Free WiFi (100+ Mbps)" },
  { icon: CupSoda, label: "Espresso / tea & coffee maker" },
  { icon: Refrigerator, label: "Refrigerator & microwave" },
  { icon: Wind, label: "Hairdryer & complimentary toiletries" },
  { icon: ShowerHead, label: "Walk-in shower / private en-suite" },
  { icon: Mountain, label: "Balcony or terrace (select rooms)" },
  { icon: Eye, label: "Ocean or garden views (select rooms)" },
];

const experiences = [
  {
    title: "Morning on the Rooftop",
    text: "Watch Cape Town wake up. Lion's Head to the east, the Atlantic to the west — coffee in hand, nowhere to be.",
    image: "/images/overview/712630148.jpg",
  },
  {
    title: "Spa & Restoration",
    text: "Our in-house therapists offer Swedish massage and body treatments. Because sometimes the best Cape Town attraction is complete stillness.",
    image: "/images/overview/712630199.jpg",
  },
  {
    title: "The Cape Town Explorer",
    text: "Our concierge team knows this city inside out. Table Mountain hikes, Winelands day trips, Robben Island, hidden restaurants, sunset spots — just ask.",
    image: "/images/overview/714306100.jpg",
  },
  {
    title: "Breakfast in the Garden",
    text: "Every morning, a made-to-order breakfast served under the trees or in the dining room. The kind that makes you slow down.",
    image: "/images/overview/714309504.jpg",
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const fromLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
      <motion.div
        className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src={exp.image} alt={exp.title} className="w-full h-72 lg:h-80 object-cover" loading="lazy" />
      </motion.div>
      <motion.div
        className={index % 2 === 1 ? "lg:order-1" : ""}
        initial={{ opacity: 0, x: fromLeft ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <h3 className="font-display text-navy text-2xl md:text-3xl font-medium mb-4">{exp.title}</h3>
        <p className="font-body text-navy/70 text-base leading-relaxed">{exp.text}</p>
      </motion.div>
    </div>
  );
}

export default function Facilities() {
  return (
    <>
      <HeroSection
        image="/images/overview/702451787.jpg"
        title="Facilities & Experiences"
        subtitle="Everything you need for an unforgettable Cape Town stay."
        compact
      />

      {/* Property Facilities */}
      <SectionWrapper bg="ivory">
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Property</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">Property Facilities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((f) => (
            <div key={f.label} className="bg-white rounded-lg p-5 flex items-start gap-4 shadow-[0_2px_12px_rgba(15,28,46,0.06)]">
              <f.icon size={20} className="text-terracotta mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body text-navy text-sm font-semibold">{f.label}</p>
                <p className="font-body text-slate_mid text-xs mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* In-Room Amenities */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">In Your Room</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">In-Room Amenities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {inRoom.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon size={18} className="text-terracotta flex-shrink-0" />
              <span className="font-body text-navy/80 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Experiences */}
      <SectionWrapper bg="ivory">
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Experiences</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">Curated Moments</h2>
        </div>
        <div className="space-y-16 overflow-hidden">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}