"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface CourseVideoPreviewProps {
  posterSrc?: string;
  altText?: string;
}

export const CourseVideoPreview: React.FC<CourseVideoPreviewProps> = ({
  posterSrc = "/assets/img/video-poster-woman.jpg",
  altText = "Course preview: a woman with long hair and a purple sweater",
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <figure className="relative w-full max-w-[720px] aspect-[720/479] rounded-[24px] overflow-hidden bg-[#443131] shadow-card">
      <Image
        src={posterSrc}
        alt={altText}
        width={720}
        height={479}
        priority
        className="w-full h-full object-cover"
      />

      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] sm:w-[103px] h-[72px] sm:h-[103px] grid place-items-center border border-[#4f4f4f] rounded-[24px] bg-[#3d3d3d]/25 backdrop-blur-[20px] transition-transform hover:scale-105 hover:bg-[#3d3d3d]/40 cursor-pointer shadow-lg"
        aria-label="Play course preview"
      >
        <Image
          src="/assets/svg/icon-play.svg"
          alt=""
          width={60}
          height={60}
          className="w-[42px] sm:w-[60px] h-[42px] sm:h-[60px]"
        />
      </button>

      {isPlaying && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative w-full max-w-[800px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 text-white bg-white/20 hover:bg-white/40 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg cursor-pointer"
            >
              ✕
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 text-center">
              <p className="text-xl font-semibold mb-2">Video Preview Mode</p>
              <p className="text-sm text-neutral-300">
                Course video is ready to stream. Click anywhere outside to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
};
