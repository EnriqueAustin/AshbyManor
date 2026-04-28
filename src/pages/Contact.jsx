import React, { useState } from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL } from "@/lib/constants";
import { MapPin, Phone, Mail, Facebook, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        image="/images/overview/702451793.jpg"
        title="Get in Touch"
        subtitle="We'd love to hear from you."
        compact
      />

      <SectionWrapper bg="ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Details */}
          <div>
            <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Contact</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-medium mb-8">Ashby Manor Guest House</h2>
            
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-navy text-sm font-semibold">Address</p>
                  <p className="font-body text-navy/70 text-sm">242 High Level Road, Fresnaye / Sea Point, Cape Town, 8005</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-navy text-sm font-semibold">Phone</p>
                  <p className="font-body text-navy/70 text-sm">+27 (0) 21 434 0083</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-navy text-sm font-semibold">Email</p>
                  <p className="font-body text-navy/70 text-sm">info@ashbymanor.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Facebook size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-navy text-sm font-semibold">Facebook</p>
                  <a href="https://facebook.com/ashbymanorcapetown" target="_blank" rel="noopener noreferrer" className="font-body text-terracotta text-sm hover:text-terracotta-dark transition-colors">
                    ashbymanorcapetown
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-64">
              <iframe
                title="Ashby Manor Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4!2d18.375!3d-33.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc674e92e068af%3A0xbe05e5e40e5c0e0!2s242%20High%20Level%20Rd%2C%20Fresnaye%2C%20Cape%20Town%2C%208005!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Enquiry</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-medium mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                <CheckCircle size={48} className="text-teal mx-auto mb-4" />
                <h3 className="font-display text-navy text-2xl font-medium mb-2">Thank you!</h3>
                <p className="font-body text-navy/70 text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Full Name</Label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 bg-white border-ash"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-body text-navy text-sm font-medium">Email</Label>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 bg-white border-ash"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <Label className="font-body text-navy text-sm font-medium">Phone</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5 bg-white border-ash"
                      placeholder="+27 ..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-body text-navy text-sm font-medium">Check-in Date</Label>
                    <Input
                      type="date"
                      value={form.checkin}
                      onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                      className="mt-1.5 bg-white border-ash"
                    />
                  </div>
                  <div>
                    <Label className="font-body text-navy text-sm font-medium">Check-out Date</Label>
                    <Input
                      type="date"
                      value={form.checkout}
                      onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                      className="mt-1.5 bg-white border-ash"
                    />
                  </div>
                </div>
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Message</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 bg-white border-ash h-32"
                    placeholder="Tell us about your stay plans, special requests, or any questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-body font-semibold text-sm py-3.5 rounded-md transition-all duration-150 shadow-sm"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Secondary CTA */}
      <div className="bg-navy py-12">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-display text-white text-2xl md:text-3xl font-medium mb-4">Ready to book now?</h3>
          <CTAButton href={BOOKING_URL}>Check Availability & Book</CTAButton>
        </div>
      </div>
    </>
  );
}