"use client";

import React, { useState } from "react";
import Image from "next/image";

export const CreatorToolbar: React.FC = () => {
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [levelActive, setLevelActive] = useState<boolean>(false);
  const [categoryActive, setCategoryActive] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-[17px]">
        <button
          type="button"
          aria-pressed={filterActive}
          onClick={() => setFilterActive((prev) => !prev)}
          className={`inline-flex items-center gap-2.5 h-[47px] px-5 rounded-full border text-[16px] font-medium leading-[1.2] transition-colors cursor-pointer ${
            filterActive
              ? "border-primary-800 text-primary-800 bg-neutral-50"
              : "border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50"
          }`}
        >
          <Image
            src="/assets/svg/icon-filter.svg"
            alt=""
            width={16.5}
            height={16}
            className="w-[16.5px] h-[16px] shrink-0"
          />
          Filter
        </button>

        <button
          type="button"
          aria-pressed={levelActive}
          onClick={() => setLevelActive((prev) => !prev)}
          className={`inline-flex items-center gap-2.5 h-[47px] px-5 rounded-full border text-[16px] font-medium leading-[1.2] transition-colors cursor-pointer ${
            levelActive
              ? "border-primary-800 text-primary-800 bg-neutral-50"
              : "border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50"
          }`}
        >
          <Image
            src="/assets/svg/icon-level-dark.svg"
            alt=""
            width={15}
            height={16}
            className="w-[15px] h-[16px] shrink-0"
          />
          Level
        </button>

        <button
          type="button"
          aria-pressed={categoryActive}
          onClick={() => setCategoryActive((prev) => !prev)}
          className={`inline-flex items-center gap-2.5 h-[47px] px-5 rounded-full border text-[16px] font-medium leading-[1.2] transition-colors cursor-pointer ${
            categoryActive
              ? "border-primary-800 text-primary-800 bg-neutral-50"
              : "border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50"
          }`}
        >
          <Image
            src="/assets/svg/icon-category.svg"
            alt=""
            width={19}
            height={20}
            className="w-[19px] h-[20px] shrink-0"
          />
          Category
        </button>
      </div>

      <button
        type="button"
        className="inline-flex items-center gap-2.5 h-[47px] px-5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-[16px] text-neutral-700 font-medium transition-colors cursor-pointer"
      >
        <Image
          src="/assets/svg/icon-sort.svg"
          alt=""
          width={18}
          height={12}
          className="w-[18px] h-[12px] shrink-0"
        />
        Most relevant
      </button>
    </div>
  );
};
