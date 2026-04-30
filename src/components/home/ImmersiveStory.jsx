import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    image: "/images/overview/702451792.jpg",
    eyebrow: "Heritage & Character",
    title: "A Manor Built for Slow Living",
    text: "Ashby Manor is not a hotel. It's a Victorian home on one of Cape Town's finest streets — filled with curated art, ocean views from the rooftop, and the kind of hospitality that remembers your name and your coffee order.",
    link: { label: "Our Story", to: "/about" },
    reverse: false,
  },
  {
    image: "/images/overview/714309504.jpg",
    eyebrow: "Accommodation",
    title: "Sixteen Rooms, Each With a Story",
    text: "From sea-view lofts with Victorian character to spacious studios with private balconies — every room at Ashby Manor has been individually decorated. Wake to ocean views, work from high-speed WiFi, and fall asleep to the sound of the Atlantic.",
    link: { label: "View All Rooms", to: "/rooms" },
    reverse: true,
  },
  {
    image: "/images/overview/702451850.jpg",
    eyebrow: "Wellness & Relaxation",
    title: "Unwind in the Heart of Fresnaye",
    text: "On-site Swedish massage, a tranquil garden for quiet mornings, and a rooftop terrace with panoramic views of Lion's Head and the Atlantic. This is slow living at its finest — in Cape Town's most prestigious neighbourhood.",
    link: { label: "Facilities", to: "/facilities" },
    reverse: false,
  },
];

function StoryBlock({ image, eyebrow, title, text, link, reverse }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] ${reverse ? "" : ""}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden ${reverse ? "lg:order-2" : ""}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-72 lg:h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className={`flex items-center ${reverse ? "lg:order-1" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="px-8 py-16 md:px-16 lg:px-20 max-w-xl"
        >
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
            {title}
          </h2>
          <p className="font-body text-navy/70 text-base leading-relaxed mb-8">
            {text}
          </p>
          <Link
            to={link.to}
            className="inline-flex items-center gap-2 text-terracotta font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            {link.label} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ImmersiveStory() {
  return (
    <section>
      {stories.map((story, i) => (
        <div key={i} className={i % 2 === 0 ? "bg-ivory" : "bg-white"}>
          <StoryBlock {...story} />
        </div>
      ))}
    </section>
  );
}
