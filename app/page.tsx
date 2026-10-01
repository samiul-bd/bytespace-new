import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CourseDiscoverySection } from "@/components/home/CourseDiscoverySection";
import { HomeFeatureSection } from "@/components/home/HomeFeatureSection";
import { CreatorCtaSection } from "@/components/home/CreatorCtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/common/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HomeHero />
        <PartnersSection />
        <CourseDiscoverySection />
        <HomeFeatureSection />
        <CreatorCtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
