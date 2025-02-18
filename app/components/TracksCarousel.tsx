"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TracksCarouselProps {
  tracks: Track[];
}

export default function TracksCarousel({ tracks }: TracksCarouselProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      {/* Centers the Swiper both vertically and horizontally */}
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1, // 1 slide per view on small screens
          },
          450: {
            slidesPerView: 2, // 1 slide per view on small screens
          },
          650: {
            slidesPerView: 3, // 1 slide per view on small screens
          },
          900: {
            slidesPerView: 4, // 2 slides per view on medium screens
          },
          1024: {
            slidesPerView: 5, // 3 slides per view on larger screens
          },
        }}
        spaceBetween={0}
        slidesPerView={3} // Default view: 1 slide per view
        loop={true}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-4xl" /* Limits width for better layout */
      >
        {tracks.map((track) => (
          <SwiperSlide key={track.songUrl} className="flex justify-center">
            <Link className="flex justify-center" href={track.songUrl}>
              <div className="text-center">
                <h1 className="text-white font-bold mb-2 text-sm sm:text-md md:text-l lg:text-xl">
                  {track.title}
                </h1>{" "}
                {/* Font size changes based on screen size */}
                <Image
                  priority
                  width={200}
                  height={100}
                  src={track.albumArtUrl}
                  alt={track.title}
                  className="rounded-lg"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
