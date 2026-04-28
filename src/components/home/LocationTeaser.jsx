import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function LocationTeaser({ image }) {
  const nearby = [
    "Milton Beach — 8 min walk",
    "Sea Point Promenade — 10 min walk",
    "Clifton Beaches — 5 min drive",
    "Table Mountain — 10 min drive",
    "V&A Waterfront — 10 min drive",
  ];

  return (
    <SectionWrapper bg="ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Fresnaye coastline, Cape Town"
            className="w-full h-72 lg:h-96 object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Location</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium mb-4 leading-tight">
            Between the Mountain and the Sea
          </h2>
          <p className="font-body text-navy/80 text-base leading-relaxed mb-6">
            Fresnaye is one of Cape Town's most coveted residential neighbourhoods, nestled on the slopes 
            of Signal Hill above Sea Point. Quiet, green, and gorgeous — yet minutes from everything.
          </p>
          <ul className="space-y-2.5 mb-6">
            {nearby.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-navy/70 font-body text-sm">
                <MapPin size={14} className="text-terracotta flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/location"
            className="inline-flex items-center gap-2 text-terracotta font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            See the Neighbourhood <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}