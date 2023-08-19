import React from 'react'

import styles from './News.module.scss'
import convertMonthName from '@/utils/convertMonthName'

interface INewsItemProps {
  id: string
  title: string
  mainPhoto: string
  date: string
  body: string
  videoUrl: string
  photosForCollage: any
}

export const NewsItem: React.FC<INewsItemProps> = ({ id, title, mainPhoto, date, body, photosForCollage }) => {
  const { day, month, year } = convertMonthName(date)

  return (
    <div className={styles['news__item']}>
      <div className={styles['news__img-wrapper']}>
        <p className={styles['news__item-date']}>
          <span>{day}</span>
          <span>{month}</span>
          <span>{year}</span>
        </p>
        <img className={styles['news__item-img']} src={`${process.env.API_URL}${mainPhoto}`} alt="news" />
      </div>
      <div className={styles['news__item-col']}>
        <div className={styles['news__item-content']}>
          <h4 className={styles['news__item-title']}>
            <span className={styles['underline-animation']}>{title}</span>
          </h4>
          <p className={styles['news__item-text']}>{body}</p>
        </div>
        <div className={styles['news__read-more']}>
          <div className={styles['news__read-more-icon']}>
            <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53 24.4286L3 24.4286M53 24.4286L31.5714 3.00004M53 24.4286L31.5714 45.8572"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={styles['news__read-more-text']}>Читати далі</p>
        </div>
      </div>
    </div>
  )
}
