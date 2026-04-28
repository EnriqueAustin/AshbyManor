import React from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "@/lib/constants";

export default function CTAButton({ children, variant = "primary", href, to, className = "", ...props }) {
  const base = "inline-flex items-center justify-center font-body font-semibold text-sm transition-all duration-150 hover:-translate-y-px";
  
  const variants = {
    primary: "bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-md shadow-sm",
    ghost: "border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md",
    "ghost-dark": "border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-md",
    pill: "bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full shadow-sm",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}