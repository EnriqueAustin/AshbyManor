import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOKING_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled ? "bg-navy shadow-lg" : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-display text-white text-xl md:text-2xl font-semibold tracking-wide leading-tight">
            Ashby Manor
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-slate_mid font-body">
            Guest House
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-body font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-terracotta"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-body font-semibold px-6 py-2.5 rounded-full transition-all duration-150 hover:-translate-y-px"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-body py-2 ${
                    location.pathname === link.path
                      ? "text-terracotta"
                      : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-terracotta text-white text-center font-body font-semibold px-6 py-3 rounded-full"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}