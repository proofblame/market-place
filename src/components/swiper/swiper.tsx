import React from 'react';
import { Swiper as SwiperSlider } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export const Swiper = ({ children, className, ...props }: any) => {
  return (
    <SwiperSlider className={className} {...props}>
      {children}
    </SwiperSlider>
  );
};
