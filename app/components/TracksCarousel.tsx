"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

interface TracksCarouselProps {
  tracks: Track[];
}

export default function TracksCarousel({ tracks }: TracksCarouselProps) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlay = () => {
    if (swiperRef.current) {
      const currentTrack = tracks[activeIndex];
      if (currentTrack) {
        window.open(currentTrack.songUrl, "_blank");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={-200}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-6xl"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {tracks.map((track, index) => (
          <SwiperSlide
            key={track.songUrl}
            className={`flex justify-center transition-transform duration-500 relative ${
              index === activeIndex
                ? "scale-120 z-30 opacity-100"
                : "scale-50 z-10 opacity-50"
            }`}
          >
            <Link className="flex justify-center" href={track.songUrl}>
              <div className="text-center relative">
                <h1 className="text-white font-bold mb-2 text-sm sm:text-md md:text-lg lg:text-xl relative z-40">
                  {track.title}
                </h1>
                <Image
                  priority
                  src={track.albumArtUrl}
                  alt={track.title}
                  width={500}
                  height={500}
                  className="rounded-lg w-auto h-auto relative z-40 shadow-2xl"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          <FaStepBackward size={24} />
        </button>
        <button
          onClick={handlePlay}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          <FaPlay size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          <FaStepForward size={24} />
        </button>
      </div>
    </div>
  );
}
