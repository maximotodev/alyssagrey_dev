"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialMediaBar: React.FC = () => {
  const socialLinks = [
    {
      href: "https://spotify.com",
      src: "/icons/spotify.svg",
      alt: "Spotify",
      width: 20,
      height: 20,
    },
    {
      href: "https://youtube.com",
      src: "/icons/youtube.svg",
      alt: "YouTube",
      width: 20,
      height: 20,
    },
    {
      href: "https://instagram.com",
      src: "/icons/instagram.svg",
      alt: "Instagram",
      width: 20,
      height: 20,
    },
    {
      href: "https://tiktok.com",
      src: "/icons/tiktok.svg",
      alt: "TikTok",
      width: 20,
      height: 20,
    },
  ];

  return (
    <div className="flex justify-center space-x-9 flex-wrap">
      {socialLinks.map((link) => (
        <Link
          key={link.alt}
          href={link.href}
          target="_blank"
          className="transition duration-300 ease-in-out"
        >
          <Image
            src={link.src}
            alt={link.alt}
            width={link.width}
            height={link.height}
            className="hover:opacity-70 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-14 lg:h-14"
            style={{ filter: "grayscale(100%)" }}
            onMouseEnter={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.filter = "none";
              img.style.filter =
                "invert(48%) sepia(79%) saturate(2475%) hue-rotate(314deg) brightness(96%) contrast(93%)";
            }}
            onMouseLeave={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.filter = "grayscale(100%)";
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaBar;
