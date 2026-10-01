import React from "react";
import Image from "next/image";
import { CourseCard } from "@/components/common/CourseCard";
import { ProgressBar } from "@/components/common/ProgressBar";
import { AvatarStack } from "@/components/common/AvatarStack";
import { COURSES } from "@/data/courses";

const CREATOR_AVATARS = [
  "/assets/img/avatar-asian-man.png",
  "/assets/img/avatar-pink-beard.png",
  "/assets/img/avatar-blonde.png",
  "/assets/img/avatar-yellow-woman.png",
  "/assets/img/avatar-blue-tee-man.png",
  "/assets/img/avatar-baker.png",
  "/assets/img/avatar-cyclist.png",
];

export const HomeFeatureSection: React.FC = () => {
  const featuredCourse = COURSES[0];

  return (
    <section
      className="relative bg-surface-muted py-20 lg:py-28 overflow-hidden"
      aria-label="Why ByteSpace"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <span
          className="blob blob--lime left-[-152px] top-[-466px] w-[1137px] h-[1137px] opacity-40"
        />
        <span
          className="blob blob--blue left-[-508px] top-[183px] w-[1137px] h-[1137px] opacity-15"
        />
        <span
          className="blob blob--blue left-[811px] top-[-458px] w-[1137px] h-[1137px] opacity-10"
        />
        <span
          className="blob blob--blue left-[722px] top-[788px] w-[1137px] h-[1137px] opacity-25"
        />
        <span
          className="blob blob--lime left-[-287px] top-[946px] w-[672px] h-[672px] opacity-60"
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 space-y-24 lg:space-y-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-heading font-semibold text-neutral-950 leading-[1.2] tracking-[-0.75px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-neutral-700 max-w-[500px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <dl className="flex items-center gap-10 sm:gap-14 pt-4">
              <div>
                <dt className="sr-only">Students</dt>
                <dd className="text-[32px] sm:text-[36px] font-medium leading-none text-primary-800">
                  12K
                </dd>
                <span className="block mt-[10px] text-[16px] sm:text-[18px] leading-[1.2] text-neutral-700">
                  Students
                </span>
              </div>
              <div>
                <dt className="sr-only">Courses</dt>
                <dd className="text-[32px] sm:text-[36px] font-medium leading-none text-primary-800">
                  70+
                </dd>
                <span className="block mt-[10px] text-[16px] sm:text-[18px] leading-[1.2] text-neutral-700">
                  Courses
                </span>
              </div>
              <div>
                <dt className="sr-only">Creators</dt>
                <dd className="text-[32px] sm:text-[36px] font-medium leading-none text-primary-800">
                  16
                </dd>
                <span className="block mt-[10px] text-[16px] sm:text-[18px] leading-[1.2] text-neutral-700">
                  Creators
                </span>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[440px] sm:min-h-[500px]">
            {featuredCourse && (
              <div className="hidden xl:block absolute left-[-40px] top-6 scale-90 z-10 shadow-lg rounded-[24px]">
                <CourseCard course={featuredCourse} starIconType="lime" />
              </div>
            )}
            <div className="relative w-[340px] sm:w-[460px] h-auto z-20">
              <Image
                src="/assets/img/hero-man-raw.png"
                alt="Student smiling with headset"
                width={577}
                height={540}
                className="w-full h-auto object-contain img-shadow"
              />
            </div>
            <div className="absolute right-0 sm:right-6 bottom-4 sm:bottom-12 w-[220px] sm:w-[232px] p-4 bg-white/95 backdrop-blur-md rounded-[16px] shadow-card z-30">
              <span className="block text-[14px] leading-[20px] text-neutral-950 font-normal">
                Learning Progress
              </span>
              <strong className="block mt-2 font-heading font-medium text-[36px] sm:text-[48px] leading-none text-neutral-950">
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
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative flex justify-center items-center min-h-[460px] sm:min-h-[540px]">
            <div className="absolute left-0 sm:left-4 top-2 sm:top-8 w-[200px] sm:w-[232px] p-4 rounded-[16px] bg-primary-800 text-neutral-50 shadow-card z-30">
              <span className="block text-[15px] sm:text-[16px] font-medium leading-[20px]">
                Total Revenue
              </span>
              <span className="block text-[10px] leading-[14px] text-neutral-300">
                July 1-28
              </span>
              <strong className="block mt-2 text-[22px] sm:text-[24px] font-bold leading-[28px]">
                $120.29
              </strong>
              <div className="mt-3">
                <ProgressBar
                  progress={56}
                  trackColor="bg-white/30"
                  barColor="bg-secondary-400"
                />
              </div>
            </div>

            <div className="hidden sm:block absolute left-2 sm:left-8 bottom-10 w-[134px] h-[135px] p-4 rounded-[16px] bg-primary-800 text-neutral-50 shadow-card z-30">
              <span className="block text-[16px] font-medium leading-[20px]">
                Year to Date
              </span>
              <span className="block text-[10px] leading-[14px] text-neutral-300">
                2023
              </span>
              <strong className="block mt-2 text-[20px] font-bold leading-[24px]">
                $1,200.38
              </strong>
              <em className="inline-grid place-items-center mt-3 px-2 py-0.5 rounded-full bg-secondary-500 text-neutral-950 font-medium text-[12px] not-italic">
                +12$
              </em>
            </div>

            <div className="relative w-[300px] sm:w-[420px] overflow-hidden rounded-2xl z-10">
              <Image
                src="/assets/img/creator-woman.png"
                alt="Smiling creator with headset holding a tablet"
                width={683}
                height={683}
                className="w-full h-auto object-cover img-shadow"
              />
            </div>

            <div className="absolute right-0 sm:right-4 bottom-2 sm:bottom-6 w-[240px] sm:w-[258px] p-4 bg-white/95 backdrop-blur-md rounded-[16px] shadow-card z-30">
              <strong className="block text-[15px] sm:text-[16px] font-medium leading-[20px] text-neutral-950">
                Happy Students
              </strong>
              <span className="flex items-center gap-[3px] mt-1 text-[12px] leading-[14px] text-neutral-400">
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
                  avatars={CREATOR_AVATARS}
                  extraLabel="2K+"
                  size="lg"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-heading font-semibold text-neutral-950 leading-[1.2] tracking-[-0.75px]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-neutral-700 max-w-[520px]">
              <strong className="text-neutral-950 font-semibold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-[16px] sm:text-[18px] text-neutral-950 font-normal"
                >
                  <Image
                    src="/assets/svg/icon-check.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
