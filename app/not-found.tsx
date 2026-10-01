import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main
        className="relative grid-bg min-h-[720px] lg:h-[957px] overflow-hidden flex flex-col items-center justify-center text-center text-white px-6 pt-[120px] pb-16"
        aria-labelledby="nf-title"
      >
        <Header theme="light" />

        <div className="relative w-full max-w-[887px] h-auto my-4">
          <Image
            src="/assets/svg/404.svg"
            alt=""
            width={887}
            height={345}
            priority
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        <div className="relative z-10 max-w-[800px] mt-2">
          <h1
            id="nf-title"
            className="font-heading font-semibold text-[32px] sm:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-0.0176em] text-white"
          >
            The page you are looking
            <br className="hidden sm:inline" />
            for doesn&apos;t exist
          </h1>
          <p className="mt-6 sm:mt-10 text-[16px] sm:text-[18px] leading-[1.6] text-neutral-100 max-w-[600px] mx-auto">
            Try to use a correct url or go back to homepage to start again
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 font-medium text-[16px] leading-[1.2] transition-colors shadow-lg cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
