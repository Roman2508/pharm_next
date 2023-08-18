import React from 'react'
import cn from 'classnames'
import useSlider from '@/hooks/useSlider'
import styles from './Videos.module.scss'
import stylesSlider from '../Slider/Slider.module.scss'
import { SliderArrow } from '../Slider/SliderArrows'

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
  const { activeSlide, loaded, sliderRef, instanceRef } = useSlider()

  return (
    <div className={styles['videos']}>
      <h2 className={cn(styles['videos__title'], 'section-title')}>Відео</h2>

      <div ref={sliderRef} className={cn(stylesSlider['slider__wrapper'], 'keen-slider')}>
        {videosItems.map((video, index) => (
          <div key={video.id} className={cn(styles['slide-wrapper'], 'keen-slider__slide')}>
            <div
              className={cn(styles['videos__slider-inner'], {
                [styles['active--slide']]: index === activeSlide,
              })}
              style={{ backgroundImage: `url(${video.photo})` }}
            >
              <h3 className={styles['videos__slider-title']}>{video.title}</h3>
              <img className={styles['videos__slider-play']} src="./assets/icons/video-play.svg" alt="video-bg" />
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
