"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface CourseTabsNavProps {
  basePath?: string;
}

export const CourseTabsNav: React.FC<CourseTabsNavProps> = () => {
  const pathname = usePathname();

  const isReviews = pathname.includes("reviews");
  const isLessons = pathname.includes("lessons");
  const isAbout = !isReviews && !isLessons;

  return (
    <nav className="flex items-center gap-4 mb-8" aria-label="Course sections">
      <Link
        href="/course-details"
        className={`inline-flex items-center h-[43px] px-6 rounded-full text-[16px] font-medium leading-[1.2] transition-colors ${
          isAbout
            ? "bg-secondary-400 text-neutral-950"
            : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
        }`}
        aria-current={isAbout ? "page" : undefined}
      >
        About
      </Link>
      <Link
        href="/course-lessons"
        className={`inline-flex items-center h-[43px] px-6 rounded-full text-[16px] font-medium leading-[1.2] transition-colors ${
          isLessons
            ? "bg-secondary-400 text-neutral-950"
            : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
        }`}
        aria-current={isLessons ? "page" : undefined}
      >
        Lessons
      </Link>
      <Link
        href="/course-reviews"
        className={`inline-flex items-center h-[43px] px-6 rounded-full text-[16px] font-medium leading-[1.2] transition-colors ${
          isReviews
            ? "bg-secondary-400 text-neutral-950"
            : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
        }`}
        aria-current={isReviews ? "page" : undefined}
      >
        Reviews
      </Link>
    </nav>
  );
};
