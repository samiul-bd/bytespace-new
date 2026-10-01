import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types";
import { AvatarStack } from "./AvatarStack";

export interface CourseCardProps {
  course: Course;
  starIconType?: "primary" | "lime";
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  starIconType = "primary",
  className = "",
}) => {
  const starIcon =
    starIconType === "lime"
      ? "/assets/svg/icon-star-lime.svg"
      : "/assets/svg/icon-star.svg";

  return (
    <article
      className={`relative flex flex-col w-[373px] max-w-full h-[384px] p-[15px] bg-white border border-neutral-200 rounded-[24px] transition-shadow duration-200 hover:shadow-card-hover ${className}`}
    >
      <Link
        href="/course-details"
        className="relative block h-[195px] rounded-[12px] overflow-hidden bg-[#443131] shrink-0 group"
      >
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={341}
          height={195}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-[13px] bottom-[19px] flex gap-[12px] z-10">
          <span className="inline-flex items-center h-[26px] px-[12px] rounded-[13px] bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[13.5px] leading-none text-neutral-700 whitespace-nowrap">
            {course.lessonsCount} Lessons
          </span>
          <span className="inline-flex items-center h-[26px] px-[12px] rounded-[13px] bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[13.5px] leading-none text-neutral-700 whitespace-nowrap">
            {course.duration}
          </span>
          <span className="inline-flex items-center h-[26px] px-[12px] rounded-[13px] bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[13.5px] leading-none text-neutral-700 whitespace-nowrap">
            {course.commentsCount} Comments
          </span>
        </span>
      </Link>

      <div className="flex items-start justify-between gap-[12px] mt-[21px] pr-[5px]">
        <h3 className="font-heading font-semibold text-[20px] tracking-[-0.3px] leading-[1.2] text-black truncate max-w-[256px]">
          <Link
            href="/course-details"
            className="hover:text-primary-800 transition-colors"
          >
            {course.title}
          </Link>
        </h3>
        <span className="inline-flex items-center gap-[4px] text-[18px] leading-none text-neutral-600 mt-[3px] shrink-0">
          {course.rating.toFixed(1)}
          <Image
            src={starIcon}
            alt=""
            width={16.5}
            height={16.5}
            className="w-[16.5px] h-[16.5px]"
          />
        </span>
      </div>

      <p className="mt-[3px] text-[12px] leading-[1.2] text-neutral-700">
        by{" "}
        <Link
          href="/creator-profile"
          className="text-primary-800 hover:underline"
        >
          {course.creator.name}
        </Link>
      </p>

      <div className="flex items-center mt-[18px]">
        <span className="inline-flex items-center gap-[9px] h-[32px] px-[12px] pl-[16px] rounded-full bg-neutral-50 text-[12px] text-neutral-700">
          <Image
            src="/assets/svg/icon-level.svg"
            alt=""
            width={12.5}
            height={13.3}
            className="w-[12.5px] h-[13.3px]"
          />
          {course.level}
        </span>
        <AvatarStack
          avatars={course.avatars}
          extraLabel={course.additionalStudentsCount}
          size="sm"
          className="ml-3"
        />
      </div>

      <p className="mt-[17px] text-[20px] font-bold leading-none text-primary-800">
        ${course.price}
        <small className="text-[12px] font-normal text-neutral-600">
          {course.pricePeriod}
        </small>
      </p>
    </article>
  );
};
