"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const srcImages = [
  "/carrusel0.jpeg",
  "/carrusel1.jpeg",
  "/carrusel2.jpeg",
  "/carrusel3.jpeg",
  "/carrusel4.jpeg",
  "/carrusel5.jpeg",
  "/carrusel6.jpeg",
  "/carrusel7.jpeg",
  "/carrusel8.jpeg",
  "/carrusel9.jpeg",
  "/carrusel10.jpeg",
];

export const Carousel = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        className=""
        pagination={{ clickable: true }}
      >
        {srcImages.map((src, index) => (
          <SwiperSlide className="pb-10" key={index}>
            <Image
              className="w-auto mx-auto h-auto object-contain"
              width={740}
              height={650}
              src={src}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
