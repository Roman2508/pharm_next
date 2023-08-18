import React from 'react'
import cn from 'classnames'
import 'keen-slider/keen-slider.min.css'

import useSlider from '@/hooks/useSlider'
import styles from './Events.module.scss'
import stylesSlider from '../Slider/Slider.module.scss'
import { SliderArrow } from '../Slider/SliderArrows'

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
  const { activeSlide, loaded, sliderRef, instanceRef } = useSlider()

  return (
    <div className={styles['events']}>
      <h2 className={cn(styles['events__title'], 'section-title')}>Події</h2>

      <div ref={sliderRef} className={cn(stylesSlider['slider__wrapper'], 'keen-slider')}>
        {eventsItems.map((el, index) => (
          <div className={cn(styles['events__item'], 'keen-slider__slide')} key={el.id}>
            <div
              className={cn(stylesSlider['slide--inner'], { [stylesSlider['active--slide']]: activeSlide === index })}
            >
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
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <SliderArrow
            left
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={activeSlide === 0}
          />

          <SliderArrow
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={activeSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )}
    </div>
  )
}
