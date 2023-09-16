import React from "react"
import cn from "classnames"

import { NewsItem } from "./NewsItem"
import Pagination from "./Pagination"
import { gql } from "@/graphql/client"
import styles from "./News.module.scss"
import { GetNewsQuery, NovinaEntity } from "@/graphql/__generated__"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

interface INewsProps {
  newsData: GetNewsQuery
  showTitle?: boolean
  pageSize?: number
  addMarginBottom?: boolean
}

export const News: React.FC<INewsProps> = ({
  newsData,
  showTitle,
  pageSize = 3,
  addMarginBottom = false,
}) => {
  const firstRender = React.useRef(false)

  const [news, setNews] = React.useState<NovinaEntity[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (firstRender.current) {
      const fetchNewsItems = async () => {
        try {
          setIsLoading(true)
          const data = await gql.GetNews({ currentPage, pageSize })
          // @ts-ignore
          setNews(data.novinas.data)
        } catch (error) {
          alert("Помилка при отриманні даних!")
        } finally {
          setIsLoading(false)
        }
      }
      fetchNewsItems()
    } else {
      firstRender.current = true
    }
  }, [currentPage])

  if (!newsData.novinas) {
    return
  }

  return (
    <div
      className={cn(styles["news"], {
        [styles["news--indent"]]: addMarginBottom,
      })}
    >
      <div className={styles["news__inner"]}>
        {showTitle && (
          <h2 className={cn(styles["news__title"], "section-title")}>Новини</h2>
        )}
        <div
          className={cn(styles["news__items"], {
            [styles["news__items--loading"]]: isLoading,
          })}
        >
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
  )
}
