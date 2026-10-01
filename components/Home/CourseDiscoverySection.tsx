"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseCard } from "@/components/common/CourseCard";
import { COURSES, EXPLORE_PATHS } from "@/data/courses";

const ROW_1_TABS = [
  { id: "all", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing-painting", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social-media", label: "Social Media" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "creative-marketing", label: "Creative Marketing" },
];

const ROW_2_TABS = [
  { id: "digital-illustration", label: "Digital Illustration" },
  { id: "film-video", label: "Film & Video" },
  { id: "crafts", label: "Crafts" },
  { id: "freelance-entrepreneurship", label: "Freelance & Entrepreneurship" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "photography", label: "Photography" },
];

const ROW_3_TABS = [
  { id: "productivity", label: "Productivity" },
  { id: "web-development", label: "Web Development" },
  { id: "data-science", label: "Data Science" },
  { id: "cooking", label: "Cooking" },
];

export const CourseDiscoverySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCourses =
    activeTab === "all"
      ? COURSES
      : COURSES.filter((c) => c.categories.includes(activeTab));

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : COURSES.slice(0, 6);

  const renderTab = (tab: { id: string; label: string }) => {
    const isActive = activeTab === tab.id;
    return (
      <button
        key={tab.id}
        type="button"
        role="tab"
        aria-selected={isActive}
        onClick={() => setActiveTab(tab.id)}
        className={`inline-flex items-center gap-2 h-[43px] px-4 rounded-full text-[16px] font-medium leading-[1.2] whitespace-nowrap transition-colors cursor-pointer ${
          isActive
            ? "bg-secondary-400 text-neutral-950"
            : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
        }`}
      >
        {tab.label}
      </button>
    );
  };

  return (
    <section className="bg-white py-16 lg:py-[74px]" aria-labelledby="discover-title">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <h2
            id="discover-title"
            className="text-[32px] sm:text-[40px] lg:text-[44px] font-heading font-semibold text-ink leading-[1.2] tracking-[-0.75px]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="max-w-[935px] mx-auto mt-[14px] text-[16px] sm:text-[18px] leading-[1.6] text-neutral-400">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from
            technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div
          className="flex flex-col items-center gap-[18px] lg:gap-[21px] mt-10 lg:mt-[46px]"
          role="tablist"
          aria-label="Course categories"
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {ROW_1_TABS.map(renderTab)}
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {ROW_2_TABS.map(renderTab)}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {ROW_3_TABS.map(renderTab)}
            <Link
              href="/search"
              className="inline-flex items-center gap-2 h-[43px] px-4 rounded-full bg-neutral-50 hover:bg-neutral-100 text-primary-800 font-medium text-[16px] leading-[1.2] whitespace-nowrap transition-colors"
            >
              + More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center mt-12 lg:mt-[74px]">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center pt-16 lg:pt-[72px]">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-heading font-semibold text-ink leading-[1.2] tracking-[-0.45px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[930px] mx-auto mt-[17px] text-[16px] sm:text-[18px] leading-[1.6] text-neutral-400">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there's
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>

          <nav
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10 mt-12 lg:mt-[67px]"
            aria-label="Course categories"
          >
            {EXPLORE_PATHS.map((item) => (
              <Link
                key={item.slug}
                href={`/search?c=${item.slug}`}
                className="flex flex-col items-center h-[167px] pt-[35px] border border-neutral-200 rounded-[24px] bg-white text-[20px] font-normal text-neutral-950 transition-all duration-200 hover:border-secondary-500 hover:shadow-card-hover group"
              >
                <div className="w-[60px] h-[60px] mb-[13px] relative flex items-center justify-center transition-transform group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt=""
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px]"
                  />
                </div>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
