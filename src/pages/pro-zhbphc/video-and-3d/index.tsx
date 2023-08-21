import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from './VideoAnd3d.module.scss'
import { Videos } from '@/components/Videos/Videos'
import { GetHeaderQuery } from '@/graphql/__generated__'

interface IMTBazaPageProps {
  headerData: GetHeaderQuery
}

const panoramaItems = [
  {
    id: 1,
    title: 'Навчальний корпус',
    photoUrl: '../assets/images/3d/fasad3d_crop.jpg',
    link: '',
  },
  {
    id: 2,
    title: 'Фойє',
    photoUrl: '../assets/images/3d/foe.jpg',
    link: 'foe.jpg',
  },
  {
    id: 3,
    title: 'Фармакогнозія',
    photoUrl: '../assets/images/3d/fg.jpg',
    link: '',
  },
  {
    id: 4,
    title: 'Лекційна аудиторія',
    photoUrl: '../assets/images/3d/aud_history.jpg',
    link: '',
  },
  {
    id: 5,
    title: 'Технологія ліків',
    photoUrl: '../assets/images/3d/3d-tehno.jpg',
    link: '',
  },
  {
    id: 6,
    title: 'Лекційна аудиторія',
    photoUrl: '../assets/images/3d/301.jpg',
    link: '',
  },
  {
    id: 7,
    title: 'Біохімія',
    photoUrl: '../assets/images/3d/biohimia.jpg',
    link: '',
  },
  {
    id: 8,
    title: 'Фармацевтична хімія',
    photoUrl: '../assets/images/3d/pharmhimia.jpg',
    link: '',
  },
  {
    id: 9,
    title: 'Математика, фізика, астрономія',
    photoUrl: '../assets/images/3d/09-mat-fiz-astr.jpg',
    link: '',
  },
  {
    id: 10,
    title: 'Тренажерна зала',
    photoUrl: '../assets/images/3d/10-tren.jpg',
    link: '',
  },
  {
    id: 11,
    title: 'Анатомія і фізіологія',
    photoUrl: '../assets/images/3d/11-anatomia_2.jpg',
    link: '',
  },
  {
    id: 12,
    title: 'Інформатика',
    photoUrl: '../assets/images/3d/12-comp217.jpg',
    link: '',
  },
]

const VideoAnd3d: NextPage<IMTBazaPageProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData} title="Відео і 3D-панорами">
      <div className={styles['subdivisions']}>
        <h1 className="section-title" style={{ marginBottom: '50px' }}>
          Відео і 3D-панорами
        </h1>

        <div className="container">
          <div className={styles['card__wrapper']}>
            {panoramaItems.map((el) => (
              <div className={styles['card__item']}>
                <div className="scale-photo-hover scale-icon">
                  <img className={styles['photo-element']} src={el.photoUrl} alt="3d" />
                </div>
                <div className={styles['card__text-box']}>
                  <p className={styles['card__text']}>{el.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Videos test />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()

    return {
      props: {
        headerData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default VideoAnd3d
