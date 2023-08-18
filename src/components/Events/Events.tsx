'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import styles from './Events.module.scss'
import { SliderWrapper } from '../Slider/Slider'

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
    <div className={styles['events']}>
      <h2 className={cn(styles['events__title'], 'section-title')}>Події</h2>
      <SliderWrapper>
        {eventsItems.map((el) => (
          <div className="keen-slider__slide">
            <div className={cn(styles['events__item'])}>
              <div className={styles['events__photo']}>
                <img src={el.photo} alt="slider photo" />
              </div>
              <div className={styles['events__content']}>
                <div className={styles['events__date']}>{el.date}</div>
                <h5 className={styles['events__slider-title']}>{el.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </SliderWrapper>
    </div>
  )
}

/* 
      <SliderWrapper>
        {eventsItems.map((el) => (
          <SwiperSlide key={el.id}>
            {({ isActive }) => {
              return (
                <div
                  className={cn(styles['events__item'], {
                    [styles.slideActive]: isActive,
                  })}
                >
                  <div className={styles['events__photo']}>
                    <img src={el.photo} alt="slider photo" />
                  </div>
                  <div className={styles['events__content']}>
                    <div className={styles['events__date']}>{el.date}</div>
                    <h5 className={styles['events__slider-title']}>{el.title}</h5>
                  </div>
                </div>
              )
            }}
          </SwiperSlide>
        ))}
      </SliderWrapper>
*/
