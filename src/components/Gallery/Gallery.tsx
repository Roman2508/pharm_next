import React from 'react'
import styles from './Gallery.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { HomePageGalleryEntity } from '@/graphql/__generated__'

interface IGalleryProps {
  data: HomePageGalleryEntity
}

export const Gallery: React.FC<IGalleryProps> = ({ data }) => {
  return (
    <div className={styles['gallery']}>
      <h2 className={cn(styles['gallery__title'], 'section-title')}>{data.attributes.title}</h2>

      <div className="container">
        <div className={styles['gallery__content']}>
          <div className={styles['gallery__col']}>
            {data.attributes.GalleryItems.slice(0, 2).map((el) => (
              <a className={styles['gallery__item']} target="_blank" href={el.link}>
                <Image
                  width={400}
                  height={400}
                  className={styles['gallery__item-img']}
                  src={`${process.env.API_URL}${el.photo.data.attributes.url}`}
                  alt="event"
                />
                <h4 className={styles['gallery__item-title']}>{el.title}</h4>
              </a>
            ))}
          </div>

          <div className={styles['gallery__col']}>
            {data.attributes.GalleryItems.slice(2, 4).map((el) => (
              <a className={styles['gallery__item']} target="_blank" href={el.link}>
                <Image
                  width={400}
                  height={400}
                  className={styles['gallery__item-img']}
                  src={`${process.env.API_URL}${el.photo.data.attributes.url}`}
                  alt="event"
                />
                <h4 className={styles['gallery__item-title']}>{el.title}</h4>
              </a>
            ))}
          </div>

          <div className={styles['gallery__col']}>
            <a className={styles['gallery__item-large']} target="_blank" href={data.attributes.GalleryItems[4].link}>
              <Image
                width={828}
                height={466}
                className={styles['gallery__item-img']}
                src={`${process.env.API_URL}${data.attributes.GalleryItems[4].photo.data.attributes.url}`}
                alt="event"
              />
              <h4 className={styles['gallery__item-title']}>{data.attributes.GalleryItems[4].title}</h4>
            </a>
          </div>

          <div className={cn(styles['gallery__col'], 'gallery__col--last-col')}>
            {data.attributes.GalleryItems.slice(5, 7).map((el) => (
              <a className={styles['gallery__item']} target="_blank" href={el.link}>
                <Image
                  width={400}
                  height={400}
                  className={styles['gallery__item-img']}
                  src={`${process.env.API_URL}${el.photo.data.attributes.url}`}
                  alt="event"
                />
                <h4 className={styles['gallery__item-title']}>{el.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
