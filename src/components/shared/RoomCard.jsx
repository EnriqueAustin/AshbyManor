import React from "react";
import { BOOKING_URL } from "@/lib/constants";
import { Users } from "lucide-react";

export default function RoomCard({ room, horizontal = false }) {
  if (horizontal) {
    return (
      <div className="bg-ivory rounded-[10px] shadow-[0_2px_16px_rgba(15,28,46,0.08)] overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-[45%] relative overflow-hidden group">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-navy/90 text-white text-[10px] tracking-[0.1em] uppercase font-body font-semibold px-3 py-1.5 rounded-full">
              {room.badge}
            </span>
          </div>
        </div>
        <div className="lg:w-[55%] p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-navy text-2xl md:text-3xl font-semibold mb-2">{room.name}</h3>
            <p className="text-slate_mid font-body text-sm leading-relaxed mb-4">{room.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {room.amenities.map((amenity) => (
                <span key={amenity} className="text-navy/70 font-body text-xs bg-ash/50 px-3 py-1 rounded-full">
                  {amenity}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-slate_mid font-body mb-4">
              <span className="flex items-center gap-1"><Users size={14} /> {room.maxGuests}</span>
              <span>{room.childPolicy}</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-ash">
            <div>
              <span className="text-terracotta text-xs font-body font-semibold tracking-wider uppercase">From</span>
              <p className="text-navy font-display text-2xl font-semibold">{room.price}<span className="text-sm text-slate_mid font-body font-normal"> / night</span></p>
              <p className="text-slate_mid text-xs font-body">for 2 adults</p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta hover:bg-terracotta-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-md transition-all duration-150 hover:-translate-y-px shadow-sm"
            >
              Book This Room
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory rounded-[10px] shadow-[0_2px_16px_rgba(15,28,46,0.08)] overflow-hidden flex flex-col h-full group">
      <div className="relative overflow-hidden h-56">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-navy/90 text-white text-[9px] tracking-[0.1em] uppercase font-body font-semibold px-2.5 py-1 rounded-full">
            {room.badge}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-navy text-xl font-semibold mb-1.5">{room.name}</h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {room.amenities.slice(0, 4).map((amenity) => (
            <span key={amenity} className="text-slate_mid font-body text-[10px] bg-ash/50 px-2 py-0.5 rounded-full">
              {amenity}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-3 border-t border-ash flex items-end justify-between">
          <div>
            <span className="text-terracotta text-[10px] font-body font-semibold tracking-wider uppercase">From</span>
            <p className="text-navy font-display text-xl font-semibold">{room.price}<span className="text-xs text-slate_mid font-body font-normal"> / night</span></p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta hover:bg-terracotta-dark text-white font-body font-semibold text-xs px-4 py-2 rounded-md transition-all duration-150 hover:-translate-y-px"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
}