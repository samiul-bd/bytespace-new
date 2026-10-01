import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CreatorCtaSection: React.FC = () => {
  return (
    <section
      className="relative grid-bg py-20 lg:h-[488px] overflow-hidden text-center text-white flex flex-col items-center justify-center"
      aria-labelledby="cta-title"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src="/assets/img/3d-squiggle-b-lime.png"
          alt=""
          width={387}
          height={387}
          className="absolute left-[-121.6px] top-[-162px] w-[386.8px] h-auto max-w-none opacity-80"
        />
        <Image
          src="/assets/img/3d-squiggle-b-white.png"
          alt=""
          width={176}
          height={176}
          className="absolute left-[178.8px] top-[5px] w-[175.8px] h-auto -scale-x-100 max-w-none opacity-80"
        />
        <Image
          src="/assets/img/3d-pyramid-lime.png"
          alt=""
          width={189}
          height={189}
          className="absolute left-[1078px] top-0 w-[188.9px] h-auto max-w-none opacity-80"
        />
        <Image
          src="/assets/img/3d-cone-white.png"
          alt=""
          width={189}
          height={189}
          className="absolute left-[-50px] top-[224.6px] w-[188.9px] h-auto max-w-none opacity-80"
        />
        <Image
          src="/assets/img/3d-torus-lime.png"
          alt=""
          width={344}
          height={344}
          className="absolute left-[16.4px] top-[298.3px] w-[343.7px] h-auto max-w-none opacity-80"
        />
        <Image
          src="/assets/img/3d-cylinder-white.png"
          alt=""
          width={372}
          height={372}
          className="absolute left-[1222.1px] top-[5.2px] w-[371.8px] h-auto max-w-none opacity-80"
        />
        <Image
          src="/assets/img/3d-squiggle-a-lime.png"
          alt=""
          width={332}
          height={332}
          className="absolute left-[1106.9px] top-[289px] w-[331.5px] h-auto max-w-none opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-[960px] mx-auto px-6">
        <h2
          id="cta-title"
          className="text-[32px] sm:text-[40px] lg:text-[44px] font-heading font-semibold text-white leading-[1.2] tracking-[-0.75px]"
        >
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.6] text-white/90 max-w-[960px]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 font-medium text-[16px] leading-[1.2] transition-colors shadow-lg"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
};
