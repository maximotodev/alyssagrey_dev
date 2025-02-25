"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideosProps {
  videos: string[]; // Array of YouTube video IDs
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold tracking-widest text-white text-center mb-10">
        VIDEOS
      </h1>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        {videos.map((videoId, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Videos;
