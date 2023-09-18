import React from 'react'
import styles from './Gallery.module.scss'
import cn from 'classnames'
import Image from 'next/image'

export const Gallery = () => {
  return (
    <div className={styles['gallery']}>
      <h2 className={cn(styles['gallery__title'], 'section-title')}>ГАЛЕРЕЯ</h2>

      <div className="container">
        <div className={styles['gallery__content']}>
          <div className={styles['gallery__col']}>
            <a
              className={styles['gallery__item']}
              target="_blank"
              href="https://drive.google.com/open?id=1LEaqDoVJ0mTtFKSLSmThE-bkhekzynvS"
            >
              <Image
                width={400}
                height={400}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-1.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Освітній процес</h4>
            </a>
            <a
              className={styles['gallery__item']}
              target="_blank"
              href="https://drive.google.com/open?id=1_yximVopgxkshgjyEOQ1sVi2S6HLvgWB"
            >
              <Image
                width={400}
                height={400}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-2.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Профорієнтаційна робота</h4>
            </a>
          </div>

          <div className={styles['gallery__col']}>
            <a
              className={styles['gallery__item']}
              target="_blank"
              href="https://drive.google.com/open?id=1I3LAMhHxL_uXd3_jdxag2516iLhx2IKi"
            >
              <Image
                width={400}
                height={400}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-3.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Загальноколеджні заходи</h4>
            </a>
            <a
              className={styles['gallery__item']}
              target="_blank"
              href="https://drive.google.com/open?id=1E3qompho3dSScf6MdeN5a7Z5ewy60bOt"
            >
              <Image
                width={400}
                height={400}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-4.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Спортивні заходи</h4>
            </a>
          </div>

          <div className={styles['gallery__col']}>
            <a
              className={styles['gallery__item-large']}
              target="_blank"
              href="https://drive.google.com/drive/folders/1pXU54cMl_CHy4TsfTlYyiJWzXj70qhdZ"
            >
              <Image
                width={828}
                height={466}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-7.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Наш коледж</h4>
            </a>
          </div>

          <div className={cn(styles['gallery__col'], 'gallery__col--last-col')}>
            <a
              className={styles['gallery__item']}
              target="_blank"
              href="https://drive.google.com/open?id=1EF2moEZhg0vGneH04TWDGqfUzPtyfKwK"
            >
              <Image
                width={400}
                height={800}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-5.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Наші студенти</h4>
            </a>
            <a
              className={styles['gallery__item']}
              target="_blank"
              href="https://drive.google.com/open?id=1vIN70fGkg_6sPfeWMgeDGID46kSLbo7h"
            >
              <Image
                width={640}
                height={400}
                className={styles['gallery__item-img']}
                src="/assets/images/gallery/gallery-6.jpg"
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>Наші працівники</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
