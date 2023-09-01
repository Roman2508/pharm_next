import React from 'react'
import cn from 'classnames'

import { NewsItem } from './NewsItem'
import Pagination from './Pagination'
import { gql } from '@/graphql/client'
import styles from './News.module.scss'
import { GetNewsQuery } from '@/graphql/__generated__'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

interface INewsProps {
  newsData: GetNewsQuery
  showTitle?: boolean
}

export const News: React.FC<INewsProps> = ({ newsData, showTitle }) => {
  const firstRender = React.useRef(false)

  const [news, setNews] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (firstRender.current) {
      const fetchNewsItems = async () => {
        try {
          setIsLoading(true)
          const data = await gql.GetNews({ currentPage })
          setNews(data.novinas.data)
        } catch (error) {
          alert('Помилка при отриманні даних!')
        } finally {
          setIsLoading(false)
        }
      }
      fetchNewsItems()
    } else {
      firstRender.current = true
    }
  }, [currentPage])

  return (
    <div className={styles['news']}>
      <div className={'container'}>
        <div className={styles['news__inner']}>
          {showTitle && <h2 className={cn(styles['news__title'], 'section-title')}>Новини</h2>}
          <div className={cn(styles['news__items'], { [styles['news__items--loading']]: isLoading })}>
            {(news.length ? news : newsData?.novinas.data).map((news) => (
              <NewsItem
                key={news.id}
                id={news.id}
                title={news.attributes.title}
                body={news.attributes.body}
                date={news.attributes.date}
                mainPhoto={news.attributes.main_photo.data.attributes.url}
                photosForCollage={news.attributes.collage_photos.data}
                videoUrl={news.attributes.video_url}
              />
            ))}
          </div>

          {isLoading && <LoadingSpinner />}

          <Pagination
            pagesCount={newsData.novinas.meta.pagination.pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}
