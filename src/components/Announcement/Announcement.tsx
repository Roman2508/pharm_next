import React from 'react'
import cn from 'classnames'
import Slider from 'react-slick'

import styles from './Announcement.module.scss'

const slidesData = [
  { id: 1, text: 'Нові реквізити для оплати за навчання' },
  { id: 2, text: 'ДНІ ВІДКРИТИХ ДВЕРЕЙ' },
]

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className={styles['announcement__button-prev']} onClick={onClick}>
      <svg width="30" viewBox="0 0 56 49" fill="none">
        <path
          d="M3 24.4286L24.4286 45.8571M3 24.4286L24.4286 3"
          stroke="#1d5d9b"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

const NextArrow = ({ onClick }: any) => {
  return (
    <div className={styles['announcement__button-next']} onClick={onClick}>
      <svg width="30" viewBox="0 0 56 49" fill="none">
        <path
          d="M53 24.4286M53 24.4286L31.5714 3.00004M53 24.4286L31.5714 45.8572"
          stroke="#1d5d9b"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

const Announcement = () => {
  const [activeSlide, setActiveSlide] = React.useState(1)

  const settings = {
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next + 1)
    },
  }

  return (
    <div className={styles['announcement']}>
      <div className={styles['container']}>
        <div className={styles['announcement__inner']}>
          <div className={cn(styles['announcement__title'])}>Увага!</div>

          <div className={styles['announcement__content']}>
            <div className={cn(styles['announcement__slider'], styles['swiper-wrapper'])}>
              <Slider {...settings}>
                {slidesData.map((el) => (
                  <div key={el.id} className={styles['announcement__slider-item']}>
                    {el.text}
                  </div>
                ))}
              </Slider>
            </div>

            <div className={styles['announcement__slider-pagination']}>
              <span>{activeSlide}</span>
              <span>/</span>
              <span>{slidesData.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement
