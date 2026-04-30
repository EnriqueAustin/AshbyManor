import React from "react";
import DualHero from "@/components/home/DualHero";
import HighlightsBar from "@/components/home/HighlightsBar";
import ImmersiveStory from "@/components/home/ImmersiveStory";
import VideoPlaceholder from "@/components/home/VideoPlaceholder";
import ExperienceGrid from "@/components/home/ExperienceGrid";
import ImageMosaic from "@/components/home/ImageMosaic";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import LocationTeaser from "@/components/home/LocationTeaser";
import FinalCTA from "@/components/home/FinalCTA";
import WhatsAppButton from "@/components/home/WhatsAppButton";

export default function Home() {
  return (
    <>
      <DualHero />
      <HighlightsBar />
      <ImmersiveStory />
      <VideoPlaceholder />
      <ExperienceGrid />
      <ImageMosaic />
      <FeaturedRooms />
      <Testimonials />
      {/* <NewsletterSignup /> */}
      <LocationTeaser />
      <FinalCTA />
      <WhatsAppButton />
    </>
  );
}
