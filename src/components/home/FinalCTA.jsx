import React from "react";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/overview/hero1.jpg"
          alt="Ashby Manor Cape Town"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/45" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-5xl font-medium mb-4">
          Your Cape Town Escape Awaits
        </h2>
        <p className="text-white/70 font-body text-sm md:text-base mb-8 max-w-lg">
          Book direct for the best rate. Complimentary breakfast, free parking &amp; personalised service included.
        </p>
        <CTAButton href={BOOKING_URL} variant="primary">
          Check Availability
        </CTAButton>
      </div>
    </section>
  );
}
