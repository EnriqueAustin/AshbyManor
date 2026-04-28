import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import RoomCard from "@/components/shared/RoomCard";
import { ROOMS } from "@/lib/constants";

export default function FeaturedRooms() {
  const featured = [ROOMS[1], ROOMS[3], ROOMS[6]]; // Luxury Double, Family, Studio

  return (
    <SectionWrapper bg="white">
      <div className="text-center mb-12">
        <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Accommodation</p>
        <h2 className="font-display text-navy text-3xl md:text-5xl font-medium">Choose Your Retreat</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-terracotta font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          View All Rooms <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  );
}