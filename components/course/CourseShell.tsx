"use client";

import React from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseVideoPreview } from "@/components/course/CourseVideoPreview";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseTabsNav } from "@/components/course/CourseTabsNav";

export interface CourseShellProps {
  children: React.ReactNode;
}

export const CourseShell: React.FC<CourseShellProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <div
        className="absolute top-0 inset-x-0 h-[850px] lg:h-[957px] grid-bg z-0"
        aria-hidden="true"
      />

      <Header theme="light" />

      <div className="relative z-10 w-[min(100%-48px,1200px)] mx-auto flex-1">
        <CourseHero
          title="Build Digital Asset: A Comprehensive Guide"
          subtitle="Unlock the Power of Digital Creation with Expert Guidance"
          creatorName="purepearl studio"
          creatorSlug="purepearl-studio"
          level="Intermediate"
          ratingText="4.8 (172 reviews)"
          studentsText="199 Students"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-8 flex flex-col">
            <CourseVideoPreview />
            <div className="mt-10 sm:mt-14 pb-16">
              <CourseTabsNav />
              {children}
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-8">
            <CourseSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
