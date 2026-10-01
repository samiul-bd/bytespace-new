"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/common/Header";
import { Creator } from "@/types";

export interface CreatorHeroProps {
  creator: Creator;
}

export const CreatorHero: React.FC<CreatorHeroProps> = ({ creator }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [followers, setFollowers] = useState<number>(creator.stats.followersCount);

  const handleFollowToggle = (): void => {
    setIsFollowing((prev) => {
      const next = !prev;
      setFollowers((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  return (
    <section
      className="relative grid-bg min-h-[500px] lg:h-[592px] overflow-hidden text-white flex flex-col"
      aria-labelledby="creator-name"
    >
      <Header theme="light" />

      <div className="relative z-10 w-[min(100%-48px,1200px)] mx-auto pt-[140px] lg:pt-[172px] pb-12 flex-1 flex flex-col justify-between">
        <div className="space-y-8 max-w-[1000px]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-[96px] h-[96px] rounded-[24px] overflow-hidden bg-white/20 shrink-0 border-2 border-white/20">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={96}
                height={96}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1
                id="creator-name"
                className="flex flex-wrap items-center gap-3 text-[28px] sm:text-[35px] font-heading font-semibold text-neutral-50 leading-[1.2]"
              >
                {creator.name}
                <span className="inline-flex items-center justify-center h-[35px] px-6 rounded-full bg-secondary-400 text-neutral-950 font-body text-[16px] font-medium leading-none">
                  Creator
                </span>
              </h1>
              <p className="mt-2 text-[16px] sm:text-[18px] text-neutral-50 leading-[1.6]">
                {creator.role}
              </p>
            </div>
          </div>

          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-neutral-50 max-w-[850px] whitespace-pre-line">
            {creator.bio}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <ul className="flex items-center gap-4">
              <li className="inline-flex items-center gap-2 h-[46px] px-6 rounded-full bg-white text-neutral-950 text-[16px] sm:text-[18px] font-medium leading-[1.2] shadow-sm">
                <b className="font-semibold text-primary-800">
                  {creator.stats.productsCount}
                </b>{" "}
                Products
              </li>
              <li className="inline-flex items-center gap-2 h-[46px] px-6 rounded-full bg-white text-neutral-950 text-[16px] sm:text-[18px] font-medium leading-[1.2] shadow-sm">
                <b className="font-semibold text-primary-800">{followers}</b>{" "}
                Followers
              </li>
            </ul>

            <button
              type="button"
              onClick={handleFollowToggle}
              aria-pressed={isFollowing}
              className={`h-[46px] px-8 rounded-full text-[16px] sm:text-[18px] font-medium transition-colors cursor-pointer shadow ${
                isFollowing
                  ? "bg-white text-primary-800"
                  : "bg-secondary-400 hover:bg-secondary-300 text-neutral-950"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
