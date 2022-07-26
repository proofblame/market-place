import React from 'react';
import { Swiper as SwiperSlider } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/pagination';

export const Swiper = ({ children, className, ...props }: any) => {
  return (
    <SwiperSlider className={className} {...props}>
      {children}
    </SwiperSlider>
  );
};
