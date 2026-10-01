import React from "react";
import { CreatorHero } from "@/components/creator/CreatorHero";
import { CreatorToolbar } from "@/components/creator/CreatorToolbar";
import { CreatorCoursesGrid } from "@/components/creator/CreatorCoursesGrid";
import { Footer } from "@/components/common/Footer";
import { PRIMARY_CREATOR } from "@/data/courses";

export default function CreatorProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <CreatorHero creator={PRIMARY_CREATOR} />
        <div className="max-w-[1200px] mx-auto px-6">
          <CreatorToolbar />
          <CreatorCoursesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
