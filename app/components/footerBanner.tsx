"use client";

import Link from "next/dist/client/link";

interface FooterBannerProps {
  name: string;
  link: string;
  image: string;
  flipX: boolean;
  color: string;
}

export default function FooterBanner({ name, link, image, flipX, color }: FooterBannerProps) {
  return (
    <div className="relative">
      <img src={image} alt="" className={`w-100 ${flipX ? "scale-x-[-1]" : ""}`} />

      <div className="absolute inset-y-0 left-20 flex text-white">
        <div className={`my-auto text-2xl [text-shadow:_0_0_5px_${color}] hover:scale-110 transition-all duration-200`}>
          <Link href={link} target="_blank">
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
}