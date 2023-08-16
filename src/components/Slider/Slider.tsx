'use client'
import React from 'react'
import './slider.css'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

interface ISliderProps {
  children: JSX.Element | JSX.Element[]
}

export const Slider: React.FC<React.PropsWithChildren<ISliderProps>> = ({ children }) => {
  return (
    <Swiper
      className="slider__wrapper"
      speed={400}
      navigation={true}
      //   spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 1.5,
          speed: 800,
        },

        1024: {
          slidesPerView: 2,
          speed: 800,
        },
      }}
    >
      {children}
    </Swiper>
  )
}
