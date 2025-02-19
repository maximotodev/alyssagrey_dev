"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/lib/types";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react"; // Import SwiperRef
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

interface TracksCarouselProps {
  tracks: Track[];
}

export default function TracksCarousel({ tracks }: TracksCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null); // Use SwiperRef type
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Access swiper instance
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
        spaceBetween={-25}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-6xl"
        onSwiper={(swiper) => (swiperRef.current = { swiper })} // Assign object with swiper property
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {tracks.map((track, index) => (
          <SwiperSlide
            key={track.songUrl}
            className={`flex justify-center transition-transform duration-500 relative ${
              index === activeIndex
                ? "scale-150 z-30 opacity-100 w-[700px] h-[700px]" // Increased size for active slide
                : "scale-50 z-10 opacity-30 w-[300px] h-[300px]" // Smaller size for other slides
            }`}
          >
            <Link className="flex justify-center" href={track.songUrl}>
              <div className="text-center relative">
                <h1
                  className={`text-white font-bold mb-2 text-sm sm:text-md md:text-lg lg:text-xl relative z-40 transition-opacity duration-500 ${
                    index === activeIndex
                      ? "opacity-100 block"
                      : "opacity-0 hidden" // Added classes here
                  }`}
                >
                  {track.title}
                </h1>
                <Image
                  priority
                  src={track.albumArtUrl}
                  alt={track.title}
                  width={index === activeIndex ? 500 : 300} // Adjust for larger screens
                  height={index === activeIndex ? 500 : 300} // Adjust for larger screens
                  // Responsive image sizing
                  className="w-full h-full md:w-auto md:h-auto rounded-lg shadow-2xl"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()} // Access swiper property
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
          onClick={() => swiperRef.current?.swiper.slideNext()} // Access swiper property
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          <FaStepForward size={24} />
        </button>
      </div>
    </div>
  );
}
