import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { MapPin, Waves, Mountain, UtensilsCrossed, Landmark, Bus } from "lucide-react";

const categories = [
  {
    icon: Waves,
    title: "Beaches & Coast",
    items: [
      "Milton Beach — 8 min walk",
      "Sea Point Promenade & Pavilion — 10 min walk",
      "Clifton Beaches (1st–4th) — 5 min drive",
      "Camps Bay Beach — 10 min drive",
    ],
  },
  {
    icon: Mountain,
    title: "Nature & Adventure",
    items: [
      "Lion's Head Hiking Trail — 5 min drive to trailhead",
      "Signal Hill — 5 min drive",
      "Table Mountain — 10 min drive",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Drink",
    items: [
      "Sea Point Main Road dining strip — 5 min walk (50+ restaurants)",
      "Bootlegger Coffee — 5 min walk",
      "Brad's Grill Sea Point — 8 min walk",
      "Primi, Anatoli, The Slug & Lettuce — all nearby",
    ],
  },
  {
    icon: Landmark,
    title: "Cape Town Icons",
    items: [
      "V&A Waterfront — 10 min drive",
      "Robben Island Ferry — 12 min drive",
      "Two Oceans Aquarium — 12 min drive",
      "Bo-Kaap Museum — 8 min drive",
      "Cape Town Stadium — 5 min drive",
    ],
  },
  {
    icon: Bus,
    title: "Transport",
    items: [
      "Disandt MyCiTi Bus Stop — 150m walk",
      "Cape Town CBD — 5 min drive",
      "Cape Town International Airport — 25 km (~35 min drive)",
      "Airport shuttle available (surcharge, pre-book required)",
    ],
  },
];

export default function Location() {
  return (
    <>
      <HeroSection
        image="/images/overview/702451797.jpg"
        title="Between the Mountain and the Sea"
        subtitle="242 High Level Road, Fresnaye / Sea Point, Cape Town, 8005"
        compact
      />

      <SectionWrapper bg="ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] lg:h-full min-h-[400px]">
            <iframe
              title="Ashby Manor Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4!2d18.375!3d-33.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc674e92e068af%3A0xbe05e5e40e5c0e0!2s242%20High%20Level%20Rd%2C%20Fresnaye%2C%20Cape%20Town%2C%208005!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Neighbourhood Copy */}
          <div>
            <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">The Neighbourhood</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-medium mb-4 leading-tight">
              Fresnaye, Cape Town
            </h2>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-6">
              Fresnaye is one of Cape Town's most coveted residential neighbourhoods, nestled on the slopes of 
              Signal Hill above Sea Point. It's quiet, green, and gorgeous — yet minutes from everything.
            </p>
            <div className="flex items-start gap-2 text-slate_mid font-body text-sm">
              <MapPin size={16} className="text-terracotta mt-0.5 flex-shrink-0" />
              <span>242 High Level Road, Fresnaye / Sea Point, Cape Town, 8005, South Africa</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Nearby Categories */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">Nearby Attractions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-ivory rounded-lg p-6 shadow-[0_2px_12px_rgba(15,28,46,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={20} className="text-terracotta" />
                <h3 className="font-display text-navy text-xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-navy/70 text-sm">
                    <span className="text-terracotta mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}