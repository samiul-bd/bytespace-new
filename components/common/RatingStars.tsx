import React from "react";
import Image from "next/image";

export interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  starType?: "primary" | "dark" | "lime" | "blue";
  size?: number;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxStars = 5,
  starType = "dark",
  size = 20,
  className = "",
}) => {
  const starIcons: Record<string, string> = {
    primary: "/assets/svg/icon-star.svg",
    dark: "/assets/svg/icon-star-dark.svg",
    lime: "/assets/svg/icon-star-lime.svg",
    blue: "/assets/svg/icon-star-blue.svg",
  };

  const starSrc = starIcons[starType] || "/assets/svg/icon-star-dark.svg";

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="img"
      aria-label={`${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }).map((_, index) => (
        <Image
          key={index}
          src={starSrc}
          alt=""
          width={size}
          height={size}
          className="shrink-0"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      ))}
    </div>
  );
};
