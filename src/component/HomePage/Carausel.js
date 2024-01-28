import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carausel.css';
import apj from '../Image/apj.png'
import swami from '../Image/swamiVivekananda.jpg'
import cv from '../Image/cv.png'

// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function Carausel() {
  return (
    <>
    <div className="caraouselBody">
      <h1>Facilities</h1>
    <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination,Autoplay]}
    className="mySwiper"
    autoplay={{
      delay: 1500, // Delay in milliseconds between slides
      disableOnInteraction: false, // Set to false to continue autoplay even after user interaction
    }}
  >
    {thoughtsImg.map((I) => (
      <SwiperSlide key={I.ThImg}>
        <img src={I.ThImg} alt="carousel-image" />
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
    </>
  );
}

const thoughtsImg=[
  {
    ThImg:swami
  },
  {
    ThImg:apj
  },
  {
    ThImg:cv
  }
]