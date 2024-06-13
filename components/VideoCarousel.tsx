"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { srcVideo } from "@/constants";
import YouTubeShort from "./YoutubeShort";

export const VideoCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {srcVideo.map((src, index) => (
          <SwiperSlide
            className="pb-10 max-h-[650px] !h-auto flex items-center"
            key={index}
          >
            <YouTubeShort videoSrc={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
