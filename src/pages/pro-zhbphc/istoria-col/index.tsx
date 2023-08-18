import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import styles from './CollegeHistory.module.scss'

import pharmacyHistoryImage from '../../../../public/assets/images/college-history/pharmacy-history.jpg'
import { Layout } from '@/layouts/Layout'
import { FancyboxGallery } from '@/components/FancyboxGallery'
import { GetStaticProps } from 'next'
import { GetHeaderQuery, gql } from '@/graphql/client'

const directors = [
  {
    id: 1,
    small_photo: '/assets/images/college-history/1.jpg',
    large_photo: '/assets/images/college-history/1.jpg',
  },
  {
    id: 2,
    small_photo: '/assets/images/college-history/2.jpg',
    large_photo: '/assets/images/college-history/2.jpg',
  },
  {
    id: 3,
    small_photo: '/assets/images/college-history/3.jpg',
    large_photo: '/assets/images/college-history/3.jpg',
  },
  {
    id: 4,
    small_photo: '/assets/images/college-history/4.jpg',
    large_photo: '/assets/images/college-history/4.jpg',
  },
  {
    id: 5,
    small_photo: '/assets/images/college-history/5.jpg',
    large_photo: '/assets/images/college-history/5.jpg',
  },
  {
    id: 6,
    small_photo: '/assets/images/college-history/6.jpg',
    large_photo: '/assets/images/college-history/6.jpg',
  },
]
const archivePhotos = [
  {
    id: 1,
    small_photo: '/assets/images/college-history/archive-1-large.jpg',
    large_photo: '/assets/images/college-history/archive-1-large.jpg',
  },
  {
    id: 2,
    small_photo: '/assets/images/college-history/archive-2-large.jpg',
    large_photo: '/assets/images/college-history/archive-2-large.jpg',
  },
  {
    id: 3,
    small_photo: '/assets/images/college-history/archive-3-large.jpg',
    large_photo: '/assets/images/college-history/archive-3-large.jpg',
  },
  {
    id: 4,
    small_photo: '/assets/images/college-history/archive-4-large.jpg',
    large_photo: '/assets/images/college-history/archive-4-large.jpg',
  },
  {
    id: 5,
    small_photo: '/assets/images/college-history/archive-5-large.jpg',
    large_photo: '/assets/images/college-history/archive-5-large.jpg',
  },
  {
    id: 6,
    small_photo: '/assets/images/college-history/archive-6-large.jpg',
    large_photo: '/assets/images/college-history/archive-6-large.jpg',
  },
  {
    id: 7,
    small_photo: '/assets/images/college-history/archive-7-large.jpg',
    large_photo: '/assets/images/college-history/archive-7-large.jpg',
  },
  {
    id: 8,
    small_photo: '/assets/images/college-history/archive-8-large.jpg',
    large_photo: '/assets/images/college-history/archive-8-large.jpg',
  },
  {
    id: 9,
    small_photo: '/assets/images/college-history/archive-9-large.jpg',
    large_photo: '/assets/images/college-history/archive-9-large.jpg',
  },
]

interface ICollegeHistoryProps {
  headerData: GetHeaderQuery
}

const CollegeHistory: React.FC<ICollegeHistoryProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData}>
      <div className={styles['college-history']}>
        <div className="container">
          <h1 className={cn(styles['college-history__main-title'], 'section-title')}>Історія коледжу</h1>
          <div className={'main-photo-page'}>
            <Image src={pharmacyHistoryImage} alt="pharmacy-history" />
          </div>

          <div className={'page-content'}>
            <p>
              Як зауважив хтось із великих, доля – не випадок, а предмет вибору: на неї не чекають, її виборюють.
              Величезний шлях розквіту й становлення української нації тісно пов’язаний з історією розвитку її науки і
              освіти. Велич вітчизняної фармацевтичної освіти зумовлена безсмертними досягненнями вчених, які протягом
              існування людства ведуть його до вершин цивілізації.
            </p>
            <p>
              Цей неспинний процес відбувається саме в тих славетних школах, які пройшли нелегкий, але безцінний шлях
              свого становлення та золотими літерами вписуються в історію вітчизняної освіти в сфері лікарської допомоги
              населенню.
            </p>
            <p>
              Історія Житомирського фармацевтичного коледжу віддзеркалює самовіддану працю та значні досягнення багатьох
              поколінь, що стали скарбницею знань, які є джерелом подальшого підвищення престижності професії,
              примноження її кращих традицій. І хоча з точки зору всесвітньої історії 75 років – лише мить, для
              Житомирського фармацевтичного коледжу – це шлях нескінченного прагнення бути потрібним своїй державі у
              різні часи, створюючи непорушний щабель професіоналів своєї справи.
            </p>

            <h5 className={'page-subtitle'}>Етапи становлення</h5>

            <ul className={'page-list'}>
              <li className={'page-list-item'}>
                1938 рік – створена Житомирська фармацевтична школа ( відповідно до Постанови Ради Народних Комісарів
                УРСР від 14.08.1938 р. № 1118).
              </li>
              <li className={'page-list-item'}>
                1941 рік – відбувся перший випуск помічників провізорів Житомирської фармацевтичної школи.
              </li>
              <li className={'page-list-item'}>1945 рік – відродження роботи фармацевтичної школи в м. Житомирі.</li>
              <li className={'page-list-item'}>
                1954 рік – фармацевтичну школу перейменовано в Житомирське фармацевтичне училище.
              </li>
              <li className={'page-list-item'}>
                1976 рік - на базі Житомирського фармацевтичного училища розпочали роботу курси підвищення кваліфікації
                фармацевтів.
              </li>
              <li className={'page-list-item'}>
                1988 рік – з нагоди 50-річчя з дня заснування навчального закладу Постановою Ради Міністрів УРСР
                навчальному закладу присвоєно ім’я Григорія Семеновича Протасевича.
              </li>
              <li className={'page-list-item'}>
                2006 рік – рішенням Житомирської обласної ради від 09.11.2006 № 124 змінено статусі назву Житомирського
                фармацевтичного коледжу ім Г.С. Протасевича на Житомирський базовий фармацевтичний коледж ім Г.С.
                Протасевича. 2006 рік – Міністерством охорони здоров’я України затверджено Положенння про
                навчально-науково-виробничий комплекс у складі Національного фармацевтичного універ ситету та
                Житомирського базового фармацевтичного коледжу ім. Г.С.Протасевича.
              </li>
              <li className={'page-list-item'}>
                2009 рік – Міністерством охорони здоров’я України затверджено Положенння про
                навчально-науково-виробничий комплекс у складі Національного медичного університету ім. Богомольця та
                Житомирського базового фармацевтичного коледжу ім. Г.С.Протасевича.
              </li>
              <li className={'page-list-item'}>
                2012 рік – рішенням Житомирської обласної ради від 22.11.2012 №682 змінено статус і назву Житомирського
                базового фармацевтичного колледжу ім Г.С. Протасевича на КВНЗ «Житомирський базовий фармацевтичний
                колледж ім. Г.С. Протасевича» Житомирської обласної ради.
              </li>
              <li className={'page-list-item'}>
                2020 рік - рішенням Житомирської обласної ради від 05.03 2020 р. № 1847 змінено назву коледжу на
                Житомирський базовий фармацевтичний фаховий коледж Житомирської обласної ради.
              </li>
            </ul>
          </div>

          <h5 className={'page-subtitle'}>Директори</h5>
          <FancyboxGallery className={'page-gallery'}>
            {directors.map((el) => (
              <a
                key={el.id}
                data-fancybox="directors"
                href={el.large_photo}
                className={cn('gallery-item', 'hand-pointer')}
                style={{ maxWidth: '150px' }}
              >
                <Image src={el.small_photo} alt="director photo" width={150} height={200} />
              </a>
            ))}
          </FancyboxGallery>

          <h5 className={'page-subtitle'}>Архівні фотографії</h5>

          <FancyboxGallery className={'page-gallery'}>
            {archivePhotos.map((el) => (
              <a
                key={el.id}
                data-fancybox="archivePhotos"
                href={el.large_photo}
                className={cn('gallery-item', 'hand-pointer')}
                style={{ maxWidth: '300px' }}
              >
                {/* <img src={el.small_photo} /> */}
                <Image src={el.small_photo} alt="director photo" width={300} height={300} />
              </a>
            ))}
          </FancyboxGallery>
        </div>
      </div>
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
    }
  } catch (error) {
    console.log(error, 'college history page error')
    return { props: { headerData: {} } }
  }
}

export default CollegeHistory
