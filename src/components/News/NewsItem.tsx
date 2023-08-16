import React from 'react'

import './news.css'

interface INewsItemProps {
  id: number
  title: string
  mainPhoto: string
  date: string
  body: string
  photosForCollage: any
}

export const NewsItem: React.FC<INewsItemProps> = ({ id, title, mainPhoto, date, body, photosForCollage }) => {
  const newsDate = date.split(' ')

  return (
    <div className="news__item">
      <div className="news__img-wrapper">
        <p className="news__item-date">
          <span>{newsDate[0]}</span>
          <span>{newsDate[1]}</span>
          <span>{newsDate[2]}</span>
        </p>
        <img className="news__item-img" src={mainPhoto} alt="news" />
      </div>
      <div className="news__item-col">
        <div className="news__item-content">
          <h4 className="news__item-title">
            <span className="underline-animation">{title}</span>
          </h4>
          <p className="news__item-text">{body}</p>
        </div>
        <div className="news__read-more">
          <div className="news__read-more-icon">
            <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53 24.4286L3 24.4286M53 24.4286L31.5714 3.00004M53 24.4286L31.5714 45.8572"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="news__read-more-text">Читати далі</p>
        </div>
      </div>
    </div>
  )
}
