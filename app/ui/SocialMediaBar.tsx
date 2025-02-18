"use client";
import React from "react";
import Link from "next/link";

const SocialMediaBar: React.FC = () => {
  const socialLinks = [
    { href: "https://spotify.com", src: "/icons/spotify.svg", alt: "Spotify" },
    { href: "https://youtube.com", src: "/icons/youtube.svg", alt: "YouTube" },
    {
      href: "https://instagram.com",
      src: "/icons/instagram.svg",
      alt: "Instagram",
    },
    { href: "https://tiktok.com", src: "/icons/tiktok.svg", alt: "TikTok" },
  ];

  return (
    <div className="flex justify-center space-x-9 flex-wrap">
      {socialLinks.map((link) => (
        <Link key={link.alt} href={link.href} target="_blank">
          <img
            src={link.src}
            alt={link.alt}
            className="w-5 h-5 hover:opacity-70 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-14 lg:h-14 transition duration-300 ease-in-out"
            style={{ filter: "grayscale(100%)" }}
            onMouseEnter={(e) => {
              const img = e.target as HTMLImageElement; // Cast to HTMLImageElement
              img.style.filter = "none";
              img.style.filter =
                "invert(48%) sepia(79%) saturate(2475%) hue-rotate(314deg) brightness(96%) contrast(93%)";
            }}
            onMouseLeave={(e) => {
              const img = e.target as HTMLImageElement; // Cast to HTMLImageElement
              img.style.filter = "grayscale(100%)";
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaBar;
