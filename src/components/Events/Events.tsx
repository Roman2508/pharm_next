'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

import './events.css'
import { Slider } from '../Slider/Slider'

const eventsItems = [
  {
    id: 1,
    title: 'Консультативний центр допомоги вступникам 2023',
    date: 'Середа, 28 червня 2023',
    photo: './assets/images/events/1.jpg',
  },
  {
    id: 2,
    title: 'З ДНЕМ КОНСТИТУЦІЇ УКРАЇНИ',
    date: 'Четвер, 29 червня 2023',
    photo: './assets/images/events/2.jpg',
  },
  {
    id: 3,
    title: 'Тренінг з написання мотиваційного листа',
    date: 'Четвер, 18 травня 2023',
    photo: './assets/images/events/3.jpg',
  },
]

export const Events = () => {
  return (
    <div className="events">
      <h2 className="events__title section-title">Події</h2>
      <Slider>
        {eventsItems.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="events__item">
              <div className="events__photo">
                <img src={el.photo} alt="slider photo" />
              </div>
              <div className="events__content">
                <div className="events__date">{el.date}</div>
                <h5 className="events__slider-title">{el.title}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}
