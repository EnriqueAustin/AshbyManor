import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import RoomCard from "@/components/shared/RoomCard";
import { ROOMS, BOOKING_URL } from "@/lib/constants";
import { Wifi, Tv, Wind, Sparkles, Car, Coffee } from "lucide-react";

const specials = [
  { emoji: "🎉", text: "Pay for 3 nights, stay 4 — FREE night (1 May – 23 Jun 2026)" },
  { emoji: "💛", text: "Last of Summer: 28% Discount (until 30 Apr 2026)" },
  { emoji: "❄️", text: "Winter Deal: 15% Discount (25 Apr – 31 Aug 2026)" },
];

const included = [
  { icon: Wifi, label: "Free WiFi (100 Mbps)" },
  { icon: Tv, label: "Flat-screen TV & DStv" },
  { icon: Wind, label: "Hairdryer & Toiletries" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Car, label: "Free Parking (limited)" },
  { icon: Coffee, label: "Complimentary Breakfast" },
];

export default function Rooms() {
  return (
    <>
      <HeroSection
        image="/images/overview/hero2.jpg"
        title="Rooms & Rates"
        subtitle="Sixteen individually decorated rooms — each with its own character, art, and story."
        compact
      />

      {/* Specials Banner */}
      <div className="bg-terracotta">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
            {specials.map((s, i) => (
              <p key={i} className="text-white font-body text-sm font-medium text-center">
                <span className="mr-1.5">{s.emoji}</span> {s.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <SectionWrapper bg="white">
        <div className="text-center mb-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta font-body text-sm underline underline-offset-2 hover:text-terracotta-dark transition-colors"
          >
            Prices vary by season & dates. Check live availability →
          </a>
        </div>
        <div className="space-y-8">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} horizontal />
          ))}
        </div>
      </SectionWrapper>

      {/* All Rooms Include */}
      <div className="bg-navy py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-white/60 font-body text-xs tracking-[0.15em] uppercase mb-8">All Rooms Include</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {included.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <item.icon size={20} className="text-terracotta" />
                <span className="text-white font-body text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}