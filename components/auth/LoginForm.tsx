"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (val: string): string => {
    if (!val.trim()) return "This field is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) return "Please enter a valid email address.";
    return "";
  };

  const validatePassword = (val: string): string => {
    if (!val) return "This field is required.";
    if (val.length < 8) return "Must be at least 8 characters.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    if (emailErr || passErr) {
      setErrors({ email: emailErr, password: passErr });
      return;
    }

    setErrors({});
    router.push("/");
  };

  return (
    <div>
      <p className="text-[18px] leading-[1.2] text-primary-800 font-medium">Sign In</p>
      <h1 className="mt-[2px] font-heading font-semibold text-[32px] sm:text-[44px] leading-[1.2] text-neutral-950">
        Welcome Back
      </h1>

      <form onSubmit={handleSubmit} noValidate className="mt-8 sm:mt-[42px] space-y-6">
        <div>
          <label className="block mb-2 text-[14px] font-medium leading-[1.2] text-neutral-950">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
            }}
            onBlur={() => setErrors((prev) => ({ ...prev, email: validateEmail(email) }))}
            placeholder="designer@example.com"
            autoComplete="email"
            className={`w-full h-[52px] px-6 rounded-xl border bg-white text-[16px] text-neutral-950 outline-none transition-colors ${
              errors.email
                ? "border-[#d92d20]"
                : "border-neutral-200 focus:border-primary-800 focus:ring-2 focus:ring-primary-800/10"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-[12px] text-[#d92d20] leading-[1.2]" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-[14px] font-medium leading-[1.2] text-neutral-950">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: validatePassword(e.target.value) }));
            }}
            onBlur={() => setErrors((prev) => ({ ...prev, password: validatePassword(password) }))}
            placeholder="********"
            autoComplete="current-password"
            className={`w-full h-[52px] px-6 rounded-xl border bg-white text-[16px] text-neutral-950 outline-none transition-colors ${
              errors.password
                ? "border-[#d92d20]"
                : "border-neutral-200 focus:border-primary-800 focus:ring-2 focus:ring-primary-800/10"
            }`}
          />
          {errors.password && (
            <p className="mt-1.5 text-[12px] text-[#d92d20] leading-[1.2]" role="alert">
              {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href="/login"
            className="text-[14px] leading-[1.2] text-primary-800 hover:underline"
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            className="h-[46px] min-w-[104px] px-6 rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 font-medium text-[16px] transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="flex items-center gap-3 my-8 lg:mt-[60px] lg:mb-8 text-[14px] text-neutral-400">
        <div className="flex-1 h-[1px] bg-neutral-200" />
        <span>or</span>
        <div className="flex-1 h-[1px] bg-neutral-200" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="grid place-items-center w-[72px] h-[72px] rounded-[24px] border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-colors cursor-pointer"
        >
          <Image
            src="/assets/svg/icon-facebook.svg"
            alt=""
            width={35}
            height={35}
            className="w-[34.5px] h-[34.5px]"
          />
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="grid place-items-center w-[72px] h-[72px] rounded-[24px] border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-colors cursor-pointer"
        >
          <Image
            src="/assets/svg/icon-google.svg"
            alt=""
            width={34}
            height={34.5}
            className="w-[34px] h-[34.5px]"
          />
        </button>
      </div>

      <p className="mt-8 text-center text-[16px] leading-[1.6] text-neutral-500">
        New user?{" "}
        <Link href="/register" className="text-primary-800 hover:underline font-medium">
          Create an account
        </Link>
      </p>
    </div>
  );
};
