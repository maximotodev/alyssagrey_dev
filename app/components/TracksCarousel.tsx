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
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-4xl" /* Limits width for better layout */
      >
        {tracks.map((track) => (
          <SwiperSlide key={track.songUrl} className="flex justify-center">
            <Link href={track.songUrl}>
              <div className="text-center">
                <h1 className="text-white font-bold mb-2">{track.title}</h1>
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
