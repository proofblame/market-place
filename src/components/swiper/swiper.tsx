import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const SwiperLocal = ({ children, className }: any) => {
  return (
    <>
      <Swiper className={className}>{children}</Swiper>
    </>
  );
};
