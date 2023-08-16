import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import cn from 'classnames'
// import { useSwiper } from 'swiper/react'

import styles from './Announcement.module.scss'

const slidesData = [
  { id: 1, text: 'Нові реквізити для оплати за навчання' },
  { id: 2, text: 'ДНІ ВІДКРИТИХ ДВЕРЕЙ' },
]

const Announcement = () => {
  //   const swiper = useSwiper()

  return (
    <div className={styles['announcement']}>
      <div className={'container'}>
        <div className={styles['announcement__inner']}>
          <div className={(cn(styles['announcement__title']), 'font-bold', 'color-white', 'font-size-28')}>Увага!</div>

          <div className={styles['announcement__content']}>
            <div className={styles['announcement__slider swiper-wrapper']}>
              {/* <Swiper
                className={styles['announcement__slider']}
                effect={'fade'}
                fadeEffect={{
                  crossFade: true,
                }}
                navigation={true}
                pagination={{ type: 'fraction' }}
                modules={[Navigation, Pagination, EffectFade]}
              >
                {slidesData.map((el) => (
                  <SwiperSlide key={el.id}>
                    <div
                      className={cn(
                        styles['announcement__slider-item'],
                        'font-regular',
                        'font-size-20',
                        'swiper-slide'
                      )}
                    >
                      {el.text}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>

            {/* slider pagination */}
            <div className={styles['swiper-pagination']}></div>
            {/*} slider pagination */}

            {/*} slider buttons */}
            {/* <div className={styles['announcement__button-prev" onClick={() => swiper.slidePrev()}></div> */}
            {/* <div className={styles['announcement__button-next" onClick={() => swiper.slideNext()}></div> */}
            {/*} slider buttons */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement
