import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const stats = [
  { value: "16", label: "Individually Decorated Rooms" },
  { value: "4-Star", label: "Heritage Classification" },
  { value: "8.7/10", label: "Booking.com Rating" },
  { value: "600+", label: "Guest Reviews" },
];

export default function About() {
  return (
    <>
      <HeroSection
        image="/images/overview/702451785.jpg"
        title="A Victorian Manor with a Contemporary Soul"
        subtitle="242 High Level Road — Fresnaye, Cape Town"
        compact
      />

      <SectionWrapper bg="ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/overview/702451780.jpg"
              alt="Art-filled corridors at Ashby Manor"
              className="w-full h-80 lg:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              Ashby Manor Guest House stands on High Level Road in Fresnaye — one of Cape Town's most prestigious 
              and quietly beautiful neighbourhoods, perched between Signal Hill and the sweep of the Atlantic. 
              The manor is a carefully preserved Victorian building, its bones original, its spirit entirely its own.
            </p>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              Sixteen individually decorated rooms fill the house — each one a considered composition of art, comfort, 
              and character. No two rooms are the same. Curated artworks line every corridor and wall, and the building 
              itself has the feel of a private home that happens to welcome guests.
            </p>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              From the rooftop terrace, Lion's Head fills the frame to the east while the Atlantic stretches out to 
              the west. Start mornings here with coffee and a made-to-order breakfast. Unwind in the afternoon in 
              the garden. End the day with a Swedish massage in the on-site spa.
            </p>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              The team — led by staff who guests consistently describe as among the warmest in the city — are on hand 
              to arrange tours, hiking guides, restaurant reservations, wine route day trips, and everything in between.
            </p>
            <p className="font-display text-navy text-xl italic">
              This is Cape Town at its most authentic: beautiful, unhurried, and genuinely human.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Strip */}
      <div className="bg-navy py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-white text-3xl md:text-4xl font-semibold mb-1">{stat.value}</p>
                <p className="text-slate_mid font-body text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}