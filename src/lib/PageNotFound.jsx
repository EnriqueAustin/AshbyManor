import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">404</p>
        <h1 className="font-display text-navy text-4xl md:text-6xl font-medium mb-4">Page Not Found</h1>
        <p className="font-body text-navy/60 text-base mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to Ashby Manor.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-white font-body font-semibold text-sm px-8 py-3.5 rounded-md transition-all duration-150"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}