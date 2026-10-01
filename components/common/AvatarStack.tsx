import React from "react";
import Image from "next/image";

export interface AvatarStackProps {
  avatars: string[];
  extraLabel?: string;
  size?: "sm" | "lg";
  badgeBgColor?: string;
  badgeTextColor?: string;
  className?: string;
}

export const AvatarStack: React.FC<AvatarStackProps> = ({
  avatars,
  extraLabel,
  size = "sm",
  badgeBgColor = "bg-secondary-400",
  badgeTextColor = "text-neutral-950",
  className = "",
}) => {
  const isLarge = size === "lg";
  const dimClass = isLarge ? "w-[43px] h-[43px]" : "w-[32px] h-[32px]";
  const overlapClass = isLarge ? "-ml-[16px]" : "-ml-[8px]";
  const textSizeClass = isLarge ? "text-[12px] font-bold" : "text-[13px] font-medium";

  return (
    <div className={`flex items-center ${className}`} aria-hidden="true">
      {avatars.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`relative rounded-full overflow-hidden shrink-0 border border-white ${dimClass} ${
            index > 0 ? overlapClass : ""
          }`}
        >
          <Image
            src={src}
            alt=""
            width={isLarge ? 43 : 32}
            height={isLarge ? 43 : 32}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {extraLabel && (
        <span
          className={`grid place-items-center rounded-full shrink-0 border border-white ${dimClass} ${overlapClass} ${badgeBgColor} ${badgeTextColor} ${textSizeClass}`}
        >
          {extraLabel}
        </span>
      )}
    </div>
  );
};
