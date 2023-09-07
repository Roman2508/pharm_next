import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from './VideoAnd3d.module.scss'
import { Videos } from '@/components/Videos/Videos'
import { GetAllVideosQuery, GetHeaderQuery, GetMainScreenQuery, GetPanoramsQuery } from '@/graphql/__generated__'
import FullScreenFrame from '@/components/FullScreenFrame/FullScreenFrame'
import Image from 'next/image'

interface IMTBazaPageProps {
  videos: GetAllVideosQuery
  headerData: GetHeaderQuery
  panoramas: GetPanoramsQuery
  mainScreenData: GetMainScreenQuery
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

const VideoAnd3d: NextPage<IMTBazaPageProps> = ({ headerData, mainScreenData, videos, panoramas }) => {
  const [isOpenFullScreen, setOpenFullScreen] = React.useState(false)
  const [frameUrl, setFrameUrl] = React.useState('')

  const handleOpenFullScreenFrame = (url: string) => {
    console.log(url)
    setFrameUrl(url)
    setOpenFullScreen(true)
  }
  console.log(panoramas)
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Відео і 3D-панорами">
      <FullScreenFrame isOpenFullScreen={isOpenFullScreen} setOpenFullScreen={setOpenFullScreen}>
        <iframe frameBorder="0" width="90%" height="90%" src={frameUrl} allowFullScreen />
      </FullScreenFrame>

      <div className={styles['subdivisions']}>
        <h1 className="section-title" style={{ marginBottom: '50px' }}>
          Відео і 3D-панорами
        </h1>

        <div className="container">
          <div className={styles['card__wrapper']}>
            {panoramas.panoramas.data.map((el) => (
              <div
                className={styles['card__item']}
                key={el.id}
                onClick={() => handleOpenFullScreenFrame(el.attributes.link)}
              >
                <div className="scale-photo-hover scale-icon">
                  <Image
                    className={styles['photo-element']}
                    src={`${process.env.API_URL}${el.attributes.poster.data.attributes.url}`}
                    alt={el.attributes.poster.data.attributes.name}
                    width={el.attributes.poster.data.attributes.width}
                    height={el.attributes.poster.data.attributes.height}
                  />
                </div>
                <div className={styles['card__text-box']}>
                  <p className={styles['card__text']}>{el.attributes.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Videos test videos={videos} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const videos = await gql.GetAllVideos()
    const panoramas = await gql.GetPanorams()

    return {
      props: {
        videos,
        panoramas,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default VideoAnd3d
