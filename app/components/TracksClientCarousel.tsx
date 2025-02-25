"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Track {
  artist: string;
  songUrl: string;
  title: string;
  album: string;
  albumArtUrl: string;
}

export default function TracksClientCarousel() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api"); // Assuming the API is accessible at this path
        const data = await res.json();
        if (data.tracks) {
          setTracks(data.tracks);
        } else {
          console.error("Failed to fetch tracks");
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  const handlePlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const currentTrack = tracks[activeIndex];
      if (currentTrack) {
        window.open(currentTrack.songUrl, "_blank");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading message
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-5xl font-bold tracking-widest text-white text-center mb-10">
        MUSIC
      </h1>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
        }}
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
                ? "scale-125 z-30"
                : "scale-75 z-10 opacity-50"
            }`}
          >
            <Link className="flex justify-center" href={track.songUrl}>
              <div className="text-center relative">
                <h1
                  className={`text-white font-bold mb-2 text-sm sm:text-md md:text-lg lg:text-xl relative z-40 transition-opacity duration-500 ${
                    index === activeIndex
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  }`}
                >
                  {track.title}
                </h1>
                <Image
                  priority
                  src={track.albumArtUrl}
                  alt={track.title}
                  width={index === activeIndex ? 400 : 200}
                  height={index === activeIndex ? 400 : 200}
                  className="rounded-lg shadow-2xl transition-all duration-500"
                />
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
