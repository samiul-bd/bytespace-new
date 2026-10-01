"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CourseCard } from "@/components/common/CourseCard";
import { Course } from "@/types";
import { CATEGORIES } from "@/data/courses";

export interface SearchGridProps {
  courses: Course[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export const SearchGrid: React.FC<SearchGridProps> = ({
  courses,
  activeCategory,
  onCategoryChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 320, behavior: "smooth" });
    }
  };

  return (
    <main className="w-[min(100%-48px,1200px)] mx-auto pt-10 sm:pt-[72px] pb-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 sm:gap-[17px]">
          <button
            type="button"
            className="inline-flex items-center gap-[9px] h-[47px] px-[18px] border border-neutral-200 hover:border-neutral-400 rounded-full bg-white text-[16px] text-neutral-700 transition-colors cursor-pointer"
          >
            <Image
              src="/assets/svg/icon-filter.svg"
              alt=""
              width={17}
              height={17}
              className="w-[17px] h-[17px] shrink-0"
            />
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-[9px] h-[47px] px-[18px] border border-neutral-200 hover:border-neutral-400 rounded-full bg-white text-[16px] text-neutral-700 transition-colors cursor-pointer"
          >
            <Image
              src="/assets/svg/icon-level-dark.svg"
              alt=""
              width={16}
              height={17}
              className="w-[16px] h-[17px] shrink-0"
            />
            Level
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-[7px] h-[47px] px-[18px] border border-neutral-200 hover:border-neutral-400 rounded-full bg-white text-[16px] text-neutral-700 transition-colors cursor-pointer"
          >
            <Image
              src="/assets/svg/icon-category.svg"
              alt=""
              width={20}
              height={21}
              className="w-[20px] h-[21px] shrink-0"
            />
            Category
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 h-[47px] px-[18px] border border-neutral-200 hover:border-neutral-400 rounded-full bg-white text-[16px] text-neutral-700 transition-colors cursor-pointer"
        >
          <Image
            src="/assets/svg/icon-sort.svg"
            alt=""
            width={19}
            height={13}
            className="w-[19px] h-[13px] shrink-0"
          />
          Most relevant
        </button>
      </div>

      <div
        className="flex gap-3 sm:gap-[16.4px] mt-8 overflow-x-auto pb-2 scrollbar-none"
        role="tablist"
        aria-label="Course categories"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.slug;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(cat.slug)}
              className={`inline-flex items-center h-[43px] px-[17.3px] rounded-full text-[16px] font-normal leading-[1.2] whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                isActive
                  ? "bg-secondary-400 text-neutral-950 font-medium"
                  : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {courses.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-10 justify-items-center mt-12 lg:mt-[77px]">
          {courses.map((course, idx) => (
            <li key={`${course.id}-${idx}`} className="w-full max-w-[373px]">
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-16 py-14 text-center text-[18px] text-neutral-500">
          No courses in this category yet.
        </p>
      )}

      <nav
        className="flex items-center justify-center gap-4 sm:gap-[24.5px] mt-16 lg:mt-[73px]"
        aria-label="Pagination"
      >
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="grid place-items-center w-[55px] h-[47px] border border-neutral-200 hover:border-neutral-400 rounded-full bg-white disabled:opacity-40 transition-colors cursor-pointer"
        >
          <Image
            src="/assets/svg/icon-arrow-left.svg"
            alt=""
            width={13}
            height={21}
            className="w-[13px] h-[21px]"
          />
        </button>

        <ol className="flex items-center gap-4 sm:gap-6 h-[47px]">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            const isCurrent = currentPage === pageNum;
            return (
              <li key={pageNum}>
                <button
                  type="button"
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => handlePageChange(pageNum)}
                  className={`text-[20px] font-medium leading-[1.2] transition-colors cursor-pointer ${
                    isCurrent
                      ? "text-neutral-300"
                      : "text-neutral-950 hover:text-primary-800"
                  }`}
                >
                  {pageNum}
                </button>
              </li>
            );
          })}
        </ol>

        <button
          type="button"
          aria-label="Next page"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="grid place-items-center w-[55px] h-[47px] border border-neutral-200 hover:border-neutral-400 rounded-full bg-white disabled:opacity-40 transition-colors cursor-pointer"
        >
          <Image
            src="/assets/svg/icon-arrow-right.svg"
            alt=""
            width={13}
            height={21}
            className="w-[13px] h-[21px]"
          />
        </button>
      </nav>
    </main>
  );
};
