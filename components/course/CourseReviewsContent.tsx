"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSE_REVIEWS } from "@/data/courses";
import { RatingStars } from "@/components/common/RatingStars";

const RATING_DISTRIBUTION = [
  { stars: 5, percentage: 92.3, count: 720 },
  { stars: 4, percentage: 36.5, count: 120 },
  { stars: 3, percentage: 9.5, count: 21 },
  { stars: 2, percentage: 3.5, count: 12 },
  { stars: 1, percentage: 5.2, count: 16 },
];

export const CourseReviewsContent: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<number | "all">("all");

  const filteredReviews =
    selectedFilter === "all"
      ? COURSE_REVIEWS
      : COURSE_REVIEWS.filter((r) => r.rating === selectedFilter);

  return (
    <div className="space-y-10 text-neutral-700">
      <section aria-labelledby="cr-intro" className="space-y-6">
        <h2 id="cr-intro" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          What Learners Are Saying
        </h2>
        <p className="text-[16px] leading-[26px]">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 rounded-[16px] border border-neutral-200 bg-white">
          <div className="flex flex-col items-center justify-center w-[129px] h-[140px] rounded-lg bg-secondary-400 text-neutral-950 shrink-0">
            <span className="text-[14px] font-medium leading-[1.2]">Ratings</span>
            <strong className="mt-1 font-heading font-semibold text-[36px] leading-[1.2]">
              4.7
            </strong>
          </div>

          <ul className="flex-1 w-full space-y-2.5" aria-label="Rating distribution">
            {RATING_DISTRIBUTION.map((row) => (
              <li key={row.stars} className="flex items-center gap-3 sm:gap-4 h-6">
                <div className="flex-1 h-2 rounded-full bg-neutral-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-secondary-400"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
                <RatingStars rating={row.stars} maxStars={5} size={18} className="gap-1 shrink-0" />
                <span className="w-10 text-right text-[15px] sm:text-[16px] text-neutral-700 shrink-0">
                  {row.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="cr-list" className="space-y-6">
        <h2 id="cr-list" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Individual Reviews:
        </h2>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4" role="group" aria-label="Filter by rating">
          <button
            type="button"
            aria-pressed={selectedFilter === "all"}
            onClick={() => setSelectedFilter("all")}
            className={`inline-flex items-center h-[43px] px-5 rounded-full text-[16px] transition-colors cursor-pointer ${
              selectedFilter === "all"
                ? "bg-secondary-400 text-neutral-950 font-medium"
                : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
            }`}
          >
            All rating
          </button>
          {[5, 4, 3, 2, 1].map((stars) => (
            <button
              key={stars}
              type="button"
              aria-pressed={selectedFilter === stars}
              onClick={() => setSelectedFilter(stars)}
              className={`inline-flex items-center gap-2 h-[43px] px-5 rounded-full text-[16px] transition-colors cursor-pointer ${
                selectedFilter === stars
                  ? "bg-secondary-400 text-neutral-950 font-medium"
                  : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <Image
                src="/assets/svg/icon-star-dark.svg"
                alt=""
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
              {stars}
              <span className="sr-only">stars</span>
            </button>
          ))}
        </div>

        <ul className="space-y-6">
          {filteredReviews.map((review) => (
            <li
              key={review.id}
              className="p-6 sm:p-8 rounded-[24px] border border-neutral-200 bg-white shadow-sm"
            >
              <article>
                <header className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Image
                      src={review.authorAvatar}
                      alt=""
                      width={52}
                      height={52}
                      className="w-[52px] h-[52px] rounded-full object-cover shrink-0"
                    />
                    <div>
                      <h3 className="font-medium text-[18px] text-neutral-950 leading-[1.2]">
                        <Link href="/creator-profile" className="hover:text-primary-800 transition-colors">
                          {review.authorName}
                        </Link>
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-[1.2] mt-1">
                        {review.authorRole}
                      </p>
                    </div>
                  </div>
                  <time className="text-[14px] sm:text-[16px] text-neutral-500 shrink-0">
                    {review.timeAgo}
                  </time>
                </header>

                <div className="mt-5">
                  <RatingStars rating={review.rating} maxStars={5} size={20} />
                </div>

                <blockquote className="mt-5">
                  <p className="text-[16px] leading-[26px] text-neutral-700">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
