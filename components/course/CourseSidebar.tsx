import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CourseSidebar: React.FC = () => {
  return (
    <aside
      className="w-full lg:w-[412px] p-6 sm:p-8 lg:pt-[38px] lg:px-[39px] bg-white border border-neutral-200 rounded-[24px] text-neutral-950 shadow-card shrink-0"
      aria-label="Course summary"
    >
      <h2 className="font-heading font-semibold text-[20px] leading-[1.2] text-neutral-950">
        112 Lessons (24 hours)
      </h2>

      <ol className="mt-[26px] space-y-3">
        <li>
          <Link
            href="/course-lessons"
            className="grid grid-cols-[32px_1fr_auto] items-start text-[16px] leading-[1.2] text-neutral-950 hover:text-primary-800 transition-colors group"
          >
            <span className="font-medium">01</span>
            <span className="truncate pr-2">Introduction to Digital Assets</span>
            <span className="text-primary-800 whitespace-nowrap text-[16px]">12 mins</span>
          </Link>
        </li>
        <li>
          <Link
            href="/course-lessons"
            className="grid grid-cols-[32px_1fr_auto] items-start text-[16px] leading-[1.2] text-neutral-950 hover:text-primary-800 transition-colors group"
          >
            <span className="font-medium">02</span>
            <span className="truncate pr-2">Design Principles for Impacts</span>
            <span className="text-primary-800 whitespace-nowrap text-[16px]">21 mins</span>
          </Link>
        </li>
        <li>
          <Link
            href="/course-lessons"
            className="grid grid-cols-[32px_1fr_auto] items-start text-[16px] leading-[1.2] text-neutral-950 hover:text-primary-800 transition-colors group"
          >
            <span className="font-medium">03</span>
            <span className="truncate pr-2">Advanced Techniques in Digital Creation</span>
            <span className="text-primary-800 whitespace-nowrap text-[16px]">16 mins</span>
          </Link>
        </li>
      </ol>

      <p className="mt-2 text-[16px] leading-[1.2]">
        <Link
          href="/course-lessons"
          className="text-neutral-700 hover:text-primary-800 transition-colors"
        >
          99 more videos
        </Link>
      </p>

      <p className="mt-7 text-[16px] leading-[1.6] text-neutral-700">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="mt-5 font-heading font-semibold text-[32px] sm:text-[36px] leading-[1.2] text-primary-800">
        $25
        <small className="ml-1 font-body font-normal text-[16px] text-neutral-700">
          /lifetime
        </small>
      </p>

      <Link
        href="/register"
        className="mt-5 flex items-center justify-center w-full h-[46px] rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 font-medium text-[16px] transition-colors"
      >
        Enroll Now
      </Link>

      <h2 className="mt-6 font-heading font-semibold text-[20px] leading-[1.2] text-neutral-950">
        This course include
      </h2>
      <ul className="mt-6 space-y-4">
        {[
          { icon: "/assets/svg/icon-resources.svg", label: "Learning Resources" },
          { icon: "/assets/svg/icon-video-blue.svg", label: "Quality Lesson Videos" },
          { icon: "/assets/svg/icon-certificate.svg", label: "Certificate of Completion" },
          { icon: "/assets/svg/icon-consultation.svg", label: "Private Consultation" },
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-[16px] text-neutral-700 leading-[1.2]">
            <Image
              src={item.icon}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 shrink-0"
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 mt-7 pt-6 border-t border-neutral-200">
        <Image
          src="/assets/img/avatar-reviewer-young-man.jpg"
          alt=""
          width={52}
          height={52}
          className="w-[52px] h-[52px] rounded-full object-cover shrink-0"
        />
        <div>
          <h3 className="font-medium text-[18px] leading-[1.2]">
            <Link
              href="/creator-profile"
              className="hover:text-primary-800 transition-colors"
            >
              PurePearl Studio
            </Link>
          </h3>
          <p className="mt-1 text-[16px] text-neutral-700 leading-[1.2]">
            Professional Creator
          </p>
        </div>
      </div>

      <p className="mt-6 text-[16px] leading-[1.6] text-neutral-700">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <Link
        href="/creator-profile"
        className="inline-flex items-center justify-center w-[138px] h-[34px] mt-6 border border-neutral-200 hover:border-primary-800 hover:text-primary-800 rounded-full text-[14px] text-neutral-700 transition-colors"
      >
        See Full Profile
      </Link>
    </aside>
  );
};
