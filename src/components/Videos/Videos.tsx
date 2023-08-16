'use client'
import React from 'react'
import './videos.css'
import { Slider } from '../Slider/Slider'
import { SwiperSlide } from 'swiper/react'

const videosItems = [
  {
    id: 1,
    title: 'Фарм Коледж - День Вчителя',
    photo: './assets/images/video-posters/1.png',
  },
  {
    id: 2,
    title: 'ЖБФК запрошує на навчання',
    photo: './assets/images/video-posters/2.png',
  },
  {
    id: 3,
    title: 'Наш коледж',
    photo: './assets/images/video-posters/3.jpg',
  },
]

export const Videos = () => {
  return (
    <div className="videos">
      <h2 className="section-title videos__title">Відео</h2>

      <Slider>
        {videosItems.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="videos__slider-inner" style={{ backgroundImage: `url(${video.photo})` }}>
              <h3 className="videos__slider-title">{video.title}</h3>
              <img className="videos__slider-play" src="./assets/icons/video-play.svg" alt="video-bg" />
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}
