import React from "react";
import Image from "next/image";

const SNEAK_PEEKS = [
  {
    src: "/assets/img/sneak-peek-1.jpg",
    alt: "Hand sketching a wireframe on paper",
  },
  {
    src: "/assets/img/sneak-peek-2.jpg",
    alt: "Design tool open on a laptop screen",
  },
  {
    src: "/assets/img/sneak-peek-3.jpg",
    alt: "Design system displayed on a monitor next to a plant",
  },
  {
    src: "/assets/img/sneak-peek-4.jpg",
    alt: "Mobile app designs shown on two phones",
  },
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const CourseAboutContent: React.FC = () => {
  return (
    <div className="space-y-10 text-neutral-700">
      <section aria-labelledby="cd-desc" className="space-y-6">
        <h2 id="cd-desc" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Description
        </h2>
        <p className="text-[16px] leading-[26px]">
          Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
        </p>
        <p className="text-[16px] leading-[26px]">
          In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
        </p>
        <p className="text-[16px] leading-[26px]">
          As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
        </p>
      </section>

      <section aria-labelledby="cd-peek" className="space-y-6">
        <h2 id="cd-peek" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Sneak Peak
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SNEAK_PEEKS.map((item, idx) => (
            <li
              key={idx}
              className="relative aspect-[167/125] rounded-[16px] overflow-hidden bg-neutral-200 border border-neutral-100 shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={167}
                height={125}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cd-keys" className="space-y-6">
        <h2 id="cd-keys" className="font-heading font-semibold text-[20px] text-neutral-950 leading-[1.2]">
          Key Points
        </h2>
        <ul className="space-y-4">
          {KEY_POINTS.map((point, idx) => (
            <li key={idx} className="flex items-center gap-3 text-[16px] text-neutral-700 leading-[20px]">
              <Image
                src="/assets/svg/icon-check.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 shrink-0"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
