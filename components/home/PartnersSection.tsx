import React from "react";
import Image from "next/image";

export const PartnersSection: React.FC = () => {
  return (
    <section
      className="w-full bg-neutral-50 py-10 lg:h-[202px] flex items-center justify-center border-b border-neutral-100/60"
      aria-label="Partners"
    >
      <div className="max-w-[1200px] w-full px-6 flex items-center justify-center">
        <Image
          src="/assets/svg/partners.svg"
          alt="Partner logos"
          width={1132}
          height={42}
          className="w-full max-w-[1132px] h-auto object-contain opacity-90 transition-opacity hover:opacity-100"
        />
      </div>
    </section>
  );
};
