import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CTAButton from "@/components/shared/CTAButton";
import { FAQ_ITEMS, BOOKING_URL } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
      <HeroSection
        image="/images/overview/702451792.jpg"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your stay."
        compact
      />

      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-ivory border border-ash rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-display text-navy text-lg font-medium hover:no-underline py-5 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-navy/70 text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <div className="bg-navy py-14">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-display text-white text-2xl md:text-3xl font-medium mb-2">Still have questions?</h3>
          <p className="text-slate_mid font-body text-sm mb-6">Get in touch or book directly for the best rate.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href={BOOKING_URL}>Check Availability</CTAButton>
            <CTAButton variant="ghost" to="/contact">Contact Us</CTAButton>
          </div>
        </div>
      </div>
    </>
  );
}