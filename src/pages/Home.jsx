import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import CTAButton from "@/components/shared/CTAButton";
import HighlightsBar from "@/components/home/HighlightsBar";
import IntroSection from "@/components/home/IntroSection";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import Testimonials from "@/components/home/Testimonials";
import LocationTeaser from "@/components/home/LocationTeaser";
import FinalCTA from "@/components/home/FinalCTA";
import { BOOKING_URL } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <HeroSection
        image="/images/overview/702451792.jpg"
        eyebrow="Sea Point · Fresnaye · Cape Town"
        title="Where Victorian Grace Meets the Atlantic"
        subtitle="A 4-star heritage guesthouse with rooftop ocean views, on-site spa, and curated art — in Cape Town's most prestigious address."
      >
        <CTAButton href={BOOKING_URL}>Check Availability</CTAButton>
        <CTAButton variant="ghost" to="/rooms">Explore Rooms</CTAButton>
      </HeroSection>

      <HighlightsBar />
      <IntroSection />
      <FeaturedRooms />

      <GalleryTeaser
        images={[
          "/images/overview/702451820.jpg",
          "/images/overview/702451850.jpg",
          "/images/overview/702451873.jpg",
          "/images/overview/714309515.jpg",
          "/images/overview/702451787.jpg",
          "/images/overview/809341491.jpg",
        ]}
      />

      <Testimonials />

      <LocationTeaser image="/images/overview/702451900.jpg" />

      <FinalCTA />
    </>
  );
}