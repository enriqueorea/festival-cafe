"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const Carousel = ({ srcImage }: { srcImage: string[] }) => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {srcImage.map((src, index) => (
          <SwiperSlide
            className="pb-10 max-h-[650px] !h-auto flex items-center"
            key={index}
          >
            <Image
              className="w-auto mx-auto h-full object-contain"
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
