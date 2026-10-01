"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validateName = (val: string): string => {
    if (!val.trim()) return "This field is required.";
    return "";
  };

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
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    if (nameErr || emailErr || passErr) {
      setErrors({ name: nameErr, email: emailErr, password: passErr });
      return;
    }

    setErrors({});
    router.push("/login");
  };

  return (
    <div>
      <p className="text-[18px] leading-[1.2] text-primary-800 font-medium">Create an Account</p>
      <h1 className="mt-[2px] font-heading font-semibold text-[32px] sm:text-[44px] leading-[1.2] text-neutral-950">
        Welcome to ByteSpace
      </h1>

      <form onSubmit={handleSubmit} noValidate className="mt-8 sm:mt-[42px] space-y-6">
        <div>
          <label className="block mb-2 text-[14px] font-medium leading-[1.2] text-neutral-950">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: validateName(e.target.value) }));
            }}
            onBlur={() => setErrors((prev) => ({ ...prev, name: validateName(name) }))}
            placeholder="Jamie Davis"
            autoComplete="name"
            className={`w-full h-[52px] px-6 rounded-xl border bg-white text-[16px] text-neutral-950 outline-none transition-colors ${
              errors.name
                ? "border-[#d92d20]"
                : "border-neutral-200 focus:border-primary-800 focus:ring-2 focus:ring-primary-800/10"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-[12px] text-[#d92d20] leading-[1.2]" role="alert">
              {errors.name}
            </p>
          )}
        </div>

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
            autoComplete="new-password"
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

        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-[46px] rounded-full bg-secondary-400 hover:bg-secondary-300 text-neutral-950 font-medium text-[16px] transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-[16px] leading-[1.6] text-neutral-500">
        Already have an account?{" "}
        <Link href="/login" className="text-primary-800 hover:underline font-medium">
          Login
        </Link>
      </p>
    </div>
  );
};
