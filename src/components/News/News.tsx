import React from 'react'

import './news.css'
import { NewsItem } from './NewsItem'

const NewsData = [
  {
    id: 1,
    title: "ПІДПИСАНО ДОГОВІР ПРО ПАРТНЕРСТВО З МЕРЕЖЕЮ АПТЕК БАЖАЄМО ЗДОРОВ'Я",
    mainPhoto: './assets/images/news/1.jpg',
    date: '26 червня 2023',
    body: "26 червня відбулося підписання договору про співробітництво та партнерство з ТОВ «Сіріус-95», яке представляє мережу аптек Бажаємо здоров'я.",
    photosForCollage: [],
  },
  {
    id: 2,
    title: 'Відбулося засідання з обговорення проєкту ОПП Лабораторна діагностика',
    mainPhoto: './assets/images/news/2.jpg',
    date: '28 квітня 2023',
    body: ' У дистанційному форматі за участю здобувачів освіти, викладачів коледжу та роботодавців відбулося громадське обговорення ОПП Лабораторна діагностика.',
    photosForCollage: [],
  },
  {
    id: 3,
    title: 'Відбулося засідання з обговорення проєкту ОПП Фармація (ОПС фаховий молодший бакалавр)',
    mainPhoto: './assets/images/news/3.jpg',
    date: '27 червня 2023',
    body: '27 червня 2023р в коледжі відбулося обговорення проєкту освітньо-професійної програми «Фармація» ОПС фаховий молодший бакалавр.',
    photosForCollage: [],
  },
]

export const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news__inner">
          <h2 className="news__title section-title">Новини</h2>

          <div className="news__items">
            {NewsData.map((news) => (
              <NewsItem key={news.id} {...news} />
            ))}
          </div>

          <div className="news__pagination">
            <span className="news__pagination-item"> &#60; Перша</span>
            <span className="news__pagination-item news__pagination-prev">&#60; Попередня</span>
            <span className="naws__pages">
              <span className="news__pagination-item news__pagination-page">1</span>
              <span>|</span>
              <span className="news__selected-page  news__pagination-page">2</span>
              <span>|</span>
              <span className="news__pagination-item  news__pagination-page">3</span>
              <span>...</span>
            </span>
            <span className="news__pagination-item news__pagination-next">Наступна &#62;</span>
            <span className="news__pagination-item">Остання &#62;</span>
            <span className="news__all-news">Всі новини</span>
          </div>
        </div>
      </div>
    </div>
  )
}
