import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/courses";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="relative bg-surface-muted py-20 lg:py-24 overflow-hidden"
      aria-labelledby="voices-title"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <span
          className="blob blob--lime left-[842px] top-[-241px] w-[1137px] h-[1137px] opacity-40"
        />
        <span
          className="blob blob--lime left-[395px] top-[-138px] w-[672px] h-[672px] opacity-60"
        />
        <span
          className="blob blob--blue left-[-442px] top-[149px] w-[1137px] h-[1137px] opacity-25"
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <h2
              id="voices-title"
              className="text-[32px] sm:text-[40px] lg:text-[44px] font-heading font-semibold text-black leading-[1.2] tracking-[-0.75px]"
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-neutral-700">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col w-full max-w-[374px] p-6 rounded-[24px] bg-white border border-neutral-200 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0 border-2 border-neutral-100">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption>
                <h3 className="mt-6 font-heading font-semibold text-[20px] text-black leading-[1.2]">
                  {t.name}
                </h3>
                <p className="mt-[6px] text-[16px] sm:text-[18px] text-primary-800 font-medium leading-[1.2]">
                  {t.role}
                </p>
              </figcaption>
              <blockquote className="mt-6 flex-1">
                <p className="text-[16px] sm:text-[18px] leading-[1.6] text-neutral-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
