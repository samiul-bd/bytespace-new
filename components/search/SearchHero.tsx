"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/common/Header";

export interface SearchHeroProps {
  query: string;
  onQueryChange: (q: string) => void;
  scope: string;
  onScopeChange: (s: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchHero: React.FC<SearchHeroProps> = ({
  query,
  onQueryChange,
  scope,
  onScopeChange,
  onSubmit,
}) => {
  return (
    <section
      className="relative grid-bg min-h-[360px] overflow-hidden text-white flex flex-col"
      aria-labelledby="search-title"
    >
      <Header theme="light" />

      <div className="relative z-10 w-[min(100%-48px,1200px)] mx-auto pt-[140px] pb-10 flex flex-col items-center text-center">
        <h1
          id="search-title"
          className="text-[28px] sm:text-[34px] lg:text-[36px] font-heading font-semibold text-neutral-50 leading-[1.2]"
        >
          Find Your Next Course
        </h1>

        <form
          onSubmit={onSubmit}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[624px]"
          role="search"
        >
          <label className="flex items-center gap-3 w-full sm:w-[461px] h-[52px] px-[27px] rounded-full bg-white text-neutral-950 shadow-md">
            <Image
              src="/assets/svg/icon-search.svg"
              alt=""
              width={18}
              height={18}
              className="w-[17.5px] h-[17.5px] shrink-0"
            />
            <span className="sr-only">Search</span>
            <input
              type="search"
              name="q"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onQueryChange(e.target.value)
              }
              placeholder="Search"
              className="w-full bg-transparent text-[16px] sm:text-[18px] text-neutral-950 placeholder:text-neutral-400 outline-none"
            />
          </label>

          <label className="relative block w-full sm:w-[147px] h-[48px] shrink-0">
            <span className="sr-only">Search in</span>
            <select
              name="scope"
              value={scope}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onScopeChange(e.target.value)
              }
              className="w-full h-full pl-[24.5px] pr-[40px] border-none rounded-full outline-none bg-secondary-400 text-neutral-950 text-[16px] font-medium leading-[1.2] cursor-pointer appearance-none transition-colors hover:bg-secondary-300"
              style={{
                backgroundImage: 'url("/assets/svg/icon-chevron-down.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 24px center",
                backgroundSize: "12px auto",
              }}
            >
              <option value="Courses">Courses</option>
              <option value="Creators">Creators</option>
            </select>
          </label>
        </form>
      </div>
    </section>
  );
};
