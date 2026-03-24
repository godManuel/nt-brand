import React from "react";

import AboutUsOverview from "../components/home/AboutusOverview";
import HeroSection from "../components/home/HeroSection";
import TeamSection from "../components/home/TeamSection";
import ServicesOverview from "../components/home/ServicesOverview";
import ReviewsSection from "../components/home/ReviewsSection";
import InstagramFeed from "../components/home/InstagramFeed";

export default function Home() {
  return (
    <div className="pb-16 md:pb-0">
      <HeroSection />
      <AboutUsOverview />
      <ServicesOverview />
      <TeamSection />
      <ReviewsSection />
      <InstagramFeed />
    </div>
  );
}
