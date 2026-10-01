"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/common/Header";
import { ProgressBar } from "@/components/common/ProgressBar";
import { AvatarStack } from "@/components/common/AvatarStack";

const HERO_AVATARS = [
  "/assets/img/avatar-asian-man.png",
  "/assets/img/avatar-pink-beard.png",
  "/assets/img/avatar-blonde.png",
  "/assets/img/avatar-yellow-woman.png",
  "/assets/img/avatar-blue-tee-man.png",
  "/assets/img/avatar-baker.png",
  "/assets/img/avatar-cyclist.png",
];

export const HomeHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <section
      className="relative min-h-[1024px] grid-bg overflow-hidden text-white"
      aria-labelledby="hero-title"
    >
      <Header theme="light" />

      <div className="relative w-full max-w-[1440px] h-[1024px] mx-auto overflow-hidden hidden lg:block pointer-events-none">
        <div
          className="absolute left-[145px] top-[582px] w-[1149px] h-[1149px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle closest-side, transparent 0, transparent 44.3%, #cbfc01 44.3%, #cbfc01 100%)",
            mask: "radial-gradient(circle closest-side, #000 99.6%, transparent 100%)",
            WebkitMask:
              "radial-gradient(circle closest-side, #000 99.6%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/assets/img/3d-squiggle-b-lime.png"
            alt=""
            width={387}
            height={387}
            className="absolute left-[-121.6px] top-[221px] w-[386.8px] h-auto max-w-none"
          />
          <Image
            src="/assets/img/3d-squiggle-b-white.png"
            alt=""
            width={176}
            height={176}
            className="absolute left-[183.8px] top-[477px] w-[175.8px] h-auto -scale-x-100 max-w-none"
          />
          <Image
            src="/assets/img/3d-torus-white.png"
            alt=""
            width={344}
            height={344}
            className="absolute left-[14.4px] top-[681.3px] w-[343.7px] h-auto max-w-none"
          />
          <Image
            src="/assets/img/3d-cylinder-lime.png"
            alt=""
            width={372}
            height={372}
            className="absolute left-[1227.1px] top-[220.2px] w-[371.8px] h-auto max-w-none"
          />
          <Image
            src="/assets/img/3d-pyramid-white.png"
            alt=""
            width={189}
            height={189}
            className="absolute left-[1104px] top-[463.6px] w-[188.9px] h-auto max-w-none"
          />
          <Image
            src="/assets/img/3d-squiggle-a-white.png"
            alt=""
            width={332}
            height={332}
            className="absolute left-[1123.9px] top-[672px] w-[331.5px] h-auto max-w-none"
          />
        </div>

        <div className="absolute left-[404px] top-[639px] w-[208px] h-[70px] p-[17px] bg-white/90 backdrop-blur-[10px] rounded-[16px] text-neutral-950 shadow-card z-20 pointer-events-auto">
          <strong className="block text-[16px] font-medium leading-[20px]">
            UI/UX Design
          </strong>
          <span className="block mt-1 text-[12px] leading-[16px] text-neutral-400 whitespace-nowrap">
            200 Courses &nbsp;•&nbsp; 1000+ Students
          </span>
        </div>

        <div className="absolute left-[842px] top-[651px] w-[232px] h-[131px] p-[17px] bg-white/90 backdrop-blur-[10px] rounded-[16px] text-neutral-950 shadow-card z-20 pointer-events-auto">
          <span className="block text-[14px] leading-[20px]">
            Learning Progress
          </span>
          <strong className="block mt-[10px] font-heading font-medium text-[48px] leading-[48px] tracking-[-0.01em]">
            55%
          </strong>
          <div className="mt-3">
            <ProgressBar
              progress={56}
              trackColor="bg-[#f6f6f6]"
              barColor="bg-secondary-400"
            />
          </div>
        </div>

        <div className="absolute left-[328px] top-[837px] w-[258px] h-[121px] p-[17px] bg-white/90 backdrop-blur-[10px] rounded-[16px] text-neutral-950 shadow-card z-20 pointer-events-auto">
          <strong className="block text-[16px] font-medium leading-[20px]">
            Happy Students
          </strong>
          <span className="flex items-center gap-[3px] mt-[1px] text-[12px] leading-[14px] text-neutral-400">
            <b className="font-medium text-neutral-950">4.5</b> (240){" "}
            <Image
              src="/assets/svg/icon-star-lime.svg"
              alt=""
              width={14}
              height={13}
              className="w-[14px] h-[13px]"
            />
          </span>
          <div className="mt-3">
            <AvatarStack
              avatars={HERO_AVATARS}
              extraLabel="2K+"
              size="lg"
            />
          </div>
        </div>

        <div className="absolute left-[431px] top-[512px] w-[578px] h-[541px] z-10">
          <Image
            src="/assets/img/hero-man-raw.png"
            alt="Smiling student with headset holding a laptop"
            width={578}
            height={541}
            priority
            className="w-full h-full object-contain img-shadow"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 pt-[140px] lg:pt-[165px] flex flex-col items-center text-center lg:absolute lg:inset-x-0 lg:top-0">
        <h1
          id="hero-title"
          className="text-white font-heading font-semibold text-[38px] sm:text-[54px] lg:text-[72px] leading-[1.2] tracking-[-1.27px]"
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mt-5 lg:mt-[34px] max-w-[700px] text-neutral-100 text-[16px] sm:text-[18px] leading-[1.6]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 lg:mt-[48px] flex flex-col sm:flex-row items-center gap-3 w-full max-w-[580px]"
          role="search"
        >
          <label className="flex items-center gap-3 w-full sm:flex-1 h-[52px] px-[27px] rounded-full bg-white text-neutral-950 shadow-md">
            <Image
              src="/assets/svg/icon-search.svg"
              alt=""
              width={18}
              height={18}
              className="w-[17.5px] h-[17.5px] shrink-0"
            />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              name="q"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-[16px] sm:text-[18px] text-neutral-950 placeholder:text-neutral-400 outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full sm:w-[104px] h-[46px] rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 font-medium text-[16px] transition-colors shrink-0 cursor-pointer shadow"
          >
            Search
          </button>
        </form>

        <div className="lg:hidden mt-8 w-full max-w-[420px]">
          <Image
            src="/assets/img/hero-man-raw.png"
            alt="Smiling student with headset holding a laptop"
            width={578}
            height={541}
            priority
            className="w-full h-auto object-contain img-shadow"
          />
        </div>
      </div>
    </section>
  );
};
