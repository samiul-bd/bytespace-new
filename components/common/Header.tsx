"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  theme?: "light" | "dark";
}

export const Header: React.FC<HeaderProps> = ({ theme = "light" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isDark = theme === "dark";
  const textColorClass = isDark ? "text-neutral-950" : "text-neutral-50";
  const logoSrc = isDark ? "/assets/svg/logo-dark.svg" : "/assets/svg/logo.svg";

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/search" },
    { label: "Creators", href: "/creator-profile" },
  ];

  const isLinkActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 transition-colors duration-200 ${textColorClass} ${
        isOpen
          ? isDark
            ? "bg-white shadow-md pb-6"
            : "bg-primary-900 shadow-xl pb-6"
          : "bg-transparent"
      }`}
    >
      <div className="w-[min(100%-48px,1196px)] mx-auto pt-[35px] flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="block w-[171px] h-[37px] relative shrink-0"
          aria-label="ByteSpace home"
        >
          <Image
            src={logoSrc}
            alt="ByteSpace"
            width={171}
            height={37}
            priority
            className="w-[171px] h-[37px] object-contain"
          />
        </Link>

        <nav
          className="hidden md:flex absolute left-1/2 top-[47px] -translate-x-1/2"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-[26px]">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[16px] leading-[1.2] transition-opacity hover:opacity-80 ${
                      active ? "font-semibold" : "font-normal"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-[26px] mt-[15px]">
          <Link
            href="/login"
            className="text-[16px] font-normal leading-[1.2] transition-opacity hover:opacity-80"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-[16px] font-normal leading-[1.2] transition-opacity hover:opacity-80"
          >
            Join Us
          </Link>
          <Link
            href="/course-details"
            className="block w-[16px] h-[20px] -mt-[5px] ml-[4px] relative shrink-0 transition-opacity hover:opacity-80"
            aria-label="Cart"
          >
            <Image
              src="/assets/svg/icon-cart.svg"
              alt=""
              width={16}
              height={20}
              className="w-[16px] h-[20px]"
            />
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-[44px] h-[44px] p-0 bg-transparent border-none cursor-pointer"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span
            className={`block w-[22px] h-[2px] bg-current rounded-full transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-current rounded-full my-[5px] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-current rounded-full transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="w-full md:hidden flex flex-col gap-5 pt-6 pb-2 border-t border-neutral-100/20 mt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-[17px] ${
                        active ? "font-semibold underline underline-offset-4" : "font-normal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-6 pt-2 border-t border-neutral-100/10">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium"
              >
                Join Us
              </Link>
              <Link
                href="/course-details"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-[16px] font-medium"
              >
                <Image
                  src="/assets/svg/icon-cart.svg"
                  alt=""
                  width={16}
                  height={20}
                  className="w-[16px] h-[20px]"
                />
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
