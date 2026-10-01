"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CourseHeroProps {
  title: string;
  subtitle: string;
  creatorName: string;
  creatorSlug: string;
  level: string;
  ratingText: string;
  studentsText: string;
}

export const CourseHero: React.FC<CourseHeroProps> = ({
  title,
  subtitle,
  creatorName,
  creatorSlug,
  level,
  ratingText,
  studentsText,
}) => {
  return (
    <section className="relative pt-[140px] lg:pt-[171px] pb-6 text-white" aria-labelledby="course-title">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div>
          <h1
            id="course-title"
            className="text-[26px] sm:text-[32px] lg:text-[35px] font-heading font-semibold text-neutral-50 leading-[1.2]"
          >
            {title}
          </h1>
          <p className="mt-[9px] font-heading font-medium text-[16px] sm:text-[19.75px] leading-[1.2] text-neutral-50">
            {subtitle}
          </p>
          <p className="mt-5 lg:mt-[26px] text-[16px] sm:text-[18px] leading-[1.2] text-[#f1f4fe] font-medium">
            by{" "}
            <Link
              href={creatorSlug ? `/creators/${creatorSlug}` : "/creator-profile"}
              className="text-secondary-400 hover:underline"
            >
              {creatorName}
            </Link>
          </p>

          <ul className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 lg:mt-[23px]">
            <li className="flex items-center gap-3 h-[40px] px-5 sm:px-6 rounded-full bg-white text-[15px] sm:text-[16px] text-neutral-950 font-medium">
              <Image
                src="/assets/svg/icon-level-blue.svg"
                alt=""
                width={15}
                height={16}
                className="w-[15px] h-[16px] shrink-0"
              />
              {level}
            </li>
            <li className="flex items-center gap-3 h-[40px] px-5 sm:px-6 rounded-full bg-white text-[15px] sm:text-[16px] text-neutral-950 font-medium">
              <Image
                src="/assets/svg/icon-star-blue.svg"
                alt=""
                width={16.5}
                height={16.5}
                className="w-[16.5px] h-[16.5px] shrink-0"
              />
              {ratingText}
            </li>
            <li className="flex items-center gap-3 h-[40px] px-5 sm:px-6 rounded-full bg-white text-[15px] sm:text-[16px] text-neutral-950 font-medium">
              <Image
                src="/assets/svg/icon-students.svg"
                alt=""
                width={22}
                height={16}
                className="w-[22px] h-[16px] shrink-0"
              />
              {studentsText}
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title, url: window.location.href }).catch(() => {});
            }
          }}
          className="inline-flex items-center gap-2.5 h-[40px] px-6 rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 text-[16px] font-medium transition-colors shrink-0 self-start cursor-pointer"
        >
          <Image
            src="/assets/svg/icon-share.svg"
            alt=""
            width={18}
            height={20}
            className="w-[18px] h-[20px] shrink-0"
          />
          Share
        </button>
      </div>
    </section>
  );
};
