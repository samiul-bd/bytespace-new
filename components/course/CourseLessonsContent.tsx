import React from "react";
import Image from "next/image";
import { COURSE_MODULES } from "@/data/courses";
import { ProgressBar } from "@/components/common/ProgressBar";

export const CourseLessonsContent: React.FC = () => {
  return (
    <div className="space-y-10 text-neutral-700">
      <section aria-labelledby="cl-mods" className="space-y-4">
        <h2 id="cl-mods" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Explore the Modules
        </h2>
        <p className="text-[16px] leading-[26px]">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </section>

      <section aria-labelledby="cl-list" className="space-y-6">
        <h2 id="cl-list" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Lesson List
        </h2>
        <ol className="space-y-6">
          {COURSE_MODULES.map((module) => (
            <li key={module.id} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 transition-colors">
              <span
                className="grid place-items-center w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] rounded-[24px] bg-secondary-400 shrink-0"
                aria-hidden="true"
              >
                <Image
                  src="/assets/svg/icon-lesson-video.svg"
                  alt=""
                  width={30}
                  height={20}
                  className="w-[24px] sm:w-[30px] h-auto"
                />
              </span>
              <div>
                <h3 className="font-medium text-[16px] text-neutral-950 leading-[1.2]">
                  <a href={`#${module.id}`} id={module.id} className="hover:text-primary-800 transition-colors">
                    {module.title}
                  </a>
                </h3>
                <p className="mt-1 text-[14px] sm:text-[16px] leading-[24px] text-neutral-700">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="cl-content" className="space-y-4">
        <h2 id="cl-content" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Lesson Content
        </h2>
        <p className="text-[16px] leading-[26px]">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      <section aria-labelledby="cl-progress" className="space-y-4">
        <h2 id="cl-progress" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Lesson Progress Tracking
        </h2>
        <p className="text-[16px] leading-[26px]">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
        <div className="p-6 rounded-[16px] border border-neutral-200 bg-white space-y-2">
          <p className="font-medium text-[15px] sm:text-[16px] text-neutral-950 leading-[1.2]">
            Learning Progress
          </p>
          <p className="font-heading font-semibold text-[32px] sm:text-[36px] text-neutral-950 leading-none">
            55%
          </p>
          <div className="pt-2">
            <ProgressBar
              progress={56}
              trackColor="bg-neutral-100"
              barColor="bg-secondary-400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
