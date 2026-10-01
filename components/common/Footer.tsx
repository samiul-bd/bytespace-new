"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-100 mt-auto">
      <div className="relative w-[min(100%-48px,1200px)] mx-auto min-h-[524px] pt-[70px] pb-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 max-w-[472px]">
            <Link href="/" className="block w-[171px] h-[37px]" aria-label="ByteSpace home">
              <Image
                src="/assets/svg/logo-dark.svg"
                alt="ByteSpace"
                width={171}
                height={37}
                className="w-[171px] h-[37px] object-contain"
              />
            </Link>
            <p className="mt-[18px] text-[14px] leading-[1.6] text-neutral-950 font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="mt-[34px] flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6">
              <div className="relative flex-1 min-w-[240px] max-w-[375px]">
                <label htmlFor="nl-email" className="sr-only">
                  Email
                </label>
                <input
                  id="nl-email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-[51px] px-[25px] border border-neutral-200 rounded-[25.5px] bg-white text-[16px] text-neutral-950 placeholder:text-neutral-950 outline-none transition-colors focus:border-primary-800"
                />
              </div>
              <button
                type="submit"
                className="h-[46px] px-6 rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 text-[16px] font-medium leading-[1.2] transition-colors shrink-0 cursor-pointer"
              >
                {subscribed ? "Subscribed!" : "Search"}
              </button>
            </form>

            <p className="mt-[27px] max-w-[460px] text-[12px] leading-[1.6] text-neutral-950">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 lg:pt-[52px]">
            <ul className="flex flex-col gap-[14px] text-[14px] text-neutral-950">
              <li>
                <Link href="/search" className="hover:text-primary-800 transition-colors">
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary-800 transition-colors">
                  Featured Categories
                </Link>
              </li>
              <li>
                <Link href="/search?c=business" className="hover:text-primary-800 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/search?c=it-software" className="hover:text-primary-800 transition-colors">
                  IT
                </Link>
              </li>
              <li>
                <Link href="/search?c=design" className="hover:text-primary-800 transition-colors">
                  Design
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-[14px] text-[14px] text-neutral-950">
              <li>
                <Link href="/search?c=development" className="hover:text-primary-800 transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/search?c=marketing" className="hover:text-primary-800 transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/search?c=photography" className="hover:text-primary-800 transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary-800 transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary-800 transition-colors">
                  Sport
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-[14px] text-[14px] text-neutral-950">
              <li>
                <Link href="/register" className="hover:text-primary-800 transition-colors">
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link href="/creator-profile" className="hover:text-primary-800 transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/not-found" className="hover:text-primary-800 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/not-found" className="hover:text-primary-800 transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/not-found" className="hover:text-primary-800 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-[25px] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-neutral-950">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex items-center gap-[25px]">
            <li>
              <Link href="/not-found" className="hover:text-primary-800 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/not-found" className="hover:text-primary-800 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/not-found" className="hover:text-primary-800 transition-colors">
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
