"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/lib/types";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

interface TracksCarouselProps {
  tracks: Track[];
}

export default function TracksCarousel({ tracks }: TracksCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
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
        spaceBetween={0}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-6xl"
        onSwiper={(swiper) => (swiperRef.current = { swiper })}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {tracks.map((track, index) => (
          <SwiperSlide
            key={track.songUrl}
            className={`flex justify-center transition-transform duration-500 relative ${
              index === activeIndex
                ? "scale-150 z-30"
                : "scale-75 z-10 opacity-30"
            }`}
          >
            <Link className="flex justify-center" href={track.songUrl}>
              <div className="text-center relative">
                <Image
                  priority
                  src={track.albumArtUrl}
                  alt={track.title}
                  width={index === activeIndex ? 500 : 250}
                  height={index === activeIndex ? 500 : 250}
                  className="rounded-lg shadow-2xl transition-all duration-500"
                />
                <h1
                  className={`text-white m-5 font-bold text-sm sm:text-md md:text-lg lg:text-xl relative z-40 transition-opacity duration-500 whitespace-nowrap ${
                    index === activeIndex
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  }`}
                >
                  {track.title}
                </h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
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
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          <FaStepForward size={24} />
        </button>
      </div>
    </div>
  );
}
