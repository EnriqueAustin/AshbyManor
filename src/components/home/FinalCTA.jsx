import React from "react";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-5xl font-medium mb-6">
          Your Cape Town Escape Awaits
        </h2>
        <CTAButton href={BOOKING_URL} variant="primary" className="mb-4">
          Check Availability
        </CTAButton>
        <p className="text-slate_mid font-body text-sm mt-4">
          Direct booking · Best rate guaranteed · Personalised service
        </p>
      </div>
    </section>
  );
}