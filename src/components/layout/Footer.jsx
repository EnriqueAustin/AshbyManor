import React from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "@/lib/constants";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="border-t border-ash/20">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-display text-white text-2xl font-semibold mb-2">Ashby Manor</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-slate_mid font-body mb-4">Guest House</p>
              <p className="text-slate_mid font-body text-sm leading-relaxed">
                A 4-star Victorian heritage guesthouse in Fresnaye, Cape Town — where art, ocean views, and warm hospitality converge.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-body text-xs tracking-[0.12em] uppercase font-semibold mb-6">Explore</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Rooms & Rates", path: "/rooms" },
                  { label: "Gallery", path: "/gallery" },
                  { label: "About", path: "/about" },
                  { label: "Facilities", path: "/facilities" },
                  { label: "Location", path: "/location" },
                  { label: "Contact", path: "/contact" },
                  { label: "FAQ", path: "/faq" },
                  { label: "Reservations", path: "/book" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-slate_mid hover:text-white text-sm font-body transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-body text-xs tracking-[0.12em] uppercase font-semibold mb-6">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-terracotta mt-0.5 flex-shrink-0" />
                  <span className="text-slate_mid text-sm font-body">242 High Level Road, Fresnaye / Sea Point, Cape Town, 8005</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-terracotta flex-shrink-0" />
                  <span className="text-slate_mid text-sm font-body">+27 (0) 21 434 0083</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-terracotta flex-shrink-0" />
                  <span className="text-slate_mid text-sm font-body">info@ashbymanor.co.za</span>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook size={16} className="text-terracotta flex-shrink-0" />
                  <a href="https://facebook.com/ashbymanorcapetown" target="_blank" rel="noopener noreferrer" className="text-slate_mid hover:text-white text-sm font-body transition-colors">
                    ashbymanorcapetown
                  </a>
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-body font-semibold px-6 py-2.5 rounded-full transition-all duration-150"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#0a1520] py-4 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate_mid/60 text-xs font-body">
            © {new Date().getFullYear()} Ashby Manor Guest House. All rights reserved.
          </p>
          <p className="text-slate_mid/60 text-xs font-body">
            242 High Level Road, Fresnaye, Cape Town
          </p>
        </div>
      </div>
    </footer>
  );
}