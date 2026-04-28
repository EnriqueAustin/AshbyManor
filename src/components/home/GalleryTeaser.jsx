import React from "react";
import CTAButton from "@/components/shared/CTAButton";

export default function GalleryTeaser({ images }) {
  return (
    <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Gallery</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-medium">
            Every Room Tells a Story
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img
                src={img}
                alt="Ashby Manor"
                className={`w-full object-cover hover:scale-[1.04] transition-transform duration-500 h-40 ${i === 0 ? "md:h-full" : "md:h-48"}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton variant="ghost" to="/gallery">
            Explore the Gallery
          </CTAButton>
        </div>
      </div>
    </section>
  );
}