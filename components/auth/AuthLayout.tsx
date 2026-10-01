import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AvatarStack } from "@/components/common/AvatarStack";

const AUTH_AVATARS = [
  "/assets/img/avatar-asian-man.png",
  "/assets/img/avatar-pink-beard.png",
  "/assets/img/avatar-baker.png",
  "/assets/img/avatar-cyclist.png",
  "/assets/img/avatar-hat.png",
  "/assets/img/avatar-blue-glasses.png",
  "/assets/img/avatar-beanie.png",
];

export interface AuthLayoutProps {
  introTitle: string;
  introDescription: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  introTitle,
  introDescription,
  children,
}) => {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden flex items-center justify-center lg:justify-end px-4 py-12 lg:pr-[120px] lg:pl-10">
      <Link
        href="/"
        className="absolute left-6 lg:left-[121.5px] top-6 lg:top-[34.5px] z-30 block w-[30px] h-[33px]"
        aria-label="ByteSpace home"
      >
        <Image
          src="/assets/svg/icon-logo-mark.svg"
          alt="ByteSpace"
          width={30}
          height={33}
          priority
          className="w-[30px] h-[33px]"
        />
      </Link>

      <div className="hidden lg:block absolute left-[122px] top-[120.5px] w-[480px] text-neutral-50 z-20">
        <h2 className="font-heading font-normal text-[20px] leading-[1.2]">
          {introTitle}
        </h2>
        <p className="mt-[18.5px] text-[18px] leading-[1.6] text-neutral-100">
          {introDescription}
        </p>
      </div>

      <div
        className="hidden lg:block absolute left-0 top-0 w-[740px] h-[1024px] pointer-events-none scale-75 xl:scale-95 origin-top-left"
        aria-hidden="true"
      >
        <article className="absolute left-[122px] top-[394px] w-[373px] h-[384px] p-[15px] bg-white border border-neutral-200 rounded-[24px] shadow-lg z-10">
          <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
            <Image
              src="/assets/img/auth-dashboard-back.jpg"
              alt=""
              width={341}
              height={195}
              className="w-full h-full object-cover"
            />
            <span className="absolute left-[12px] bottom-[13px] flex gap-[12px]">
              <span className="inline-flex items-center h-[32px] px-[13px] rounded-full bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[12px] text-neutral-700">
                17 Lessons
              </span>
              <span className="inline-flex items-center h-[32px] px-[13px] rounded-full bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[12px] text-neutral-700">
                2 hours 16 mins
              </span>
              <span className="inline-flex items-center h-[32px] px-[13px] rounded-full bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[12px] text-neutral-700">
                59 Comments
              </span>
            </span>
          </div>
          <div className="mt-[22.5px]">
            <h3 className="font-heading font-semibold text-[20px] text-black">
              Build Digital Asset
            </h3>
            <p className="mt-1 text-[12px] text-neutral-700">by purepearl studio</p>
          </div>
          <div className="flex items-center mt-4">
            <span className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-neutral-50 text-[12px] text-neutral-700">
              <Image src="/assets/svg/icon-level.svg" alt="" width={12} height={12} />
              Beginner
            </span>
            <AvatarStack
              avatars={[
                "/assets/img/avatar-pink-beard.png",
                "/assets/img/avatar-blonde.png",
                "/assets/img/avatar-yellow-woman.png",
                "/assets/img/avatar-blue-tee-man.png",
              ]}
              extraLabel="26+"
              size="sm"
              badgeBgColor="bg-black"
              badgeTextColor="text-white"
              className="ml-3"
            />
          </div>
          <p className="mt-4 text-[20px] font-bold text-primary-800">
            $25<small className="text-[12px] text-neutral-600 font-normal">/lifetime</small>
          </p>
        </article>

        <article className="absolute left-[233px] top-[305px] w-[373px] h-[384px] p-[15px] bg-white border border-neutral-200 rounded-[24px] shadow-2xl z-20">
          <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
            <Image
              src="/assets/img/auth-dashboard-front.jpg"
              alt=""
              width={341}
              height={195}
              className="w-full h-full object-cover"
            />
            <span className="absolute left-[12px] bottom-[13px] flex gap-[12px]">
              <span className="inline-flex items-center h-[32px] px-[13px] rounded-full bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[12px] text-neutral-700">
                17 Lessons
              </span>
              <span className="inline-flex items-center h-[32px] px-[13px] rounded-full bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[12px] text-neutral-700">
                2 hours 16 mins
              </span>
              <span className="inline-flex items-center h-[32px] px-[13px] rounded-full bg-[#f6f6f6]/60 backdrop-blur-[4px] text-[12px] text-neutral-700">
                59 Comments
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between mt-[22.5px]">
            <h3 className="font-heading font-semibold text-[20px] text-black">
              the Power of Big Data
            </h3>
            <span className="flex items-center gap-1 text-[18px] text-neutral-600">
              4.5
              <Image src="/assets/svg/icon-star-lime.svg" alt="" width={16} height={16} />
            </span>
          </div>
          <p className="mt-1 text-[12px] text-neutral-700">by purepearl studio</p>
          <div className="flex items-center mt-4">
            <span className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-neutral-50 text-[12px] text-neutral-700">
              <Image src="/assets/svg/icon-level.svg" alt="" width={12} height={12} />
              Beginner
            </span>
            <AvatarStack
              avatars={[
                "/assets/img/avatar-pink-beard.png",
                "/assets/img/avatar-blonde.png",
                "/assets/img/avatar-yellow-woman.png",
                "/assets/img/avatar-blue-tee-man.png",
              ]}
              extraLabel="26+"
              size="sm"
              badgeBgColor="bg-black"
              badgeTextColor="text-white"
              className="ml-3"
            />
          </div>
          <p className="mt-4 text-[20px] font-bold text-primary-800">
            $25<small className="text-[12px] text-neutral-600 font-normal">/lifetime</small>
          </p>
        </article>

        <Image
          src="/assets/img/3d-pyramid-lime.png"
          alt=""
          width={189}
          height={189}
          className="absolute left-[95px] top-[701.6px] w-[188.9px] h-auto z-30"
        />
        <Image
          src="/assets/img/3d-squiggle-b-white.png"
          alt=""
          width={176}
          height={176}
          className="absolute left-[470.8px] top-[626px] w-[175.8px] h-auto -scale-x-100 z-30"
        />
        <Image
          src="/assets/img/3d-torus-lime.png"
          alt=""
          width={147}
          height={147}
          className="absolute left-[149.5px] top-[319.7px] w-[146.7px] h-auto z-30"
        />

        <div className="absolute left-[348px] top-[740px] z-40 w-[258px] h-[123px] p-4 rounded-[16px] bg-secondary-400 text-neutral-950 shadow-xl">
          <strong className="block text-[16px] font-medium leading-[20px]">
            Happy Students
          </strong>
          <span className="flex items-center gap-1 mt-1 text-[10px] leading-[14px] text-neutral-950">
            <b>4.5</b> <i className="not-italic text-neutral-500">(240)</i>
            <Image src="/assets/svg/icon-star-blue.svg" alt="" width={14} height={14} />
          </span>
          <div className="mt-3">
            <AvatarStack
              avatars={AUTH_AVATARS}
              extraLabel="2K+"
              size="lg"
              badgeBgColor="bg-neutral-950"
              badgeTextColor="text-neutral-50"
            />
          </div>
        </div>
      </div>

      <section className="relative z-30 w-full max-w-[579px] bg-white rounded-[24px] p-8 sm:p-12 lg:p-[65px] shadow-2xl">
        {children}
      </section>
    </div>
  );
};
