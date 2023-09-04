import React from 'react'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../../../Novina.module.scss'
import { Accordion } from '@/components/ui/Accordion/Accordion'
import { GetHeaderQuery, GetMainScreenQuery, NovinaEntity, gql } from '@/graphql/client'

import facebookIcon from '../../../../../../public/assets/icons/facebook-share.svg'

interface IFullNewsPageProps {
  fullNews: NovinaEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const FullNewsPage: NextPage<IFullNewsPageProps> = ({ headerData, mainScreenData, fullNews }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title={fullNews.attributes.title}>
      <div className="container">
        <div className="page-row">
          {/* <div className="col-2-12">111</div>
          <div className="col-7-12">
            {fullNews.attributes.main_photo.data && (
              <div className="container">
                <div className={'main-photo-page'}>
                  <img
                    src={`${process.env.API_URL}${fullNews.attributes.main_photo.data.attributes.url}`}
                    alt="main page photo"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-3-12">33333333333333</div> */}
        </div>

        <div className="page-row">
          <div className={styles['col-2-12']}>
            <div className={styles['date']}>
              <div className={styles['date-inner']}>
                <h6 className={styles['day']}>30</h6>
                <p className={styles['month']}>Липня</p>
                <p className={styles['year']}>2023</p>
              </div>

              <div className={styles['share']}>
                <p className={styles['share-title']}>Поділитись:</p>
                <a href="#" className={styles['share-social']}>
                  <svg>
                    <path fill="#4a67b7" d="M0 0h23.033v23.033H0z" />
                    <path
                      d="M13.453 7.41c.386-.013.772-.003 1.16-.003h.16v-2.01c-.208-.02-.423-.05-.64-.06-.396-.02-.792-.04-1.19-.03-.605.013-1.178.16-1.68.52-.573.413-.888.993-1.008 1.678-.05.282-.063.575-.07.862-.01.45-.002.902-.002 1.353v.17H8.26v2.244h1.91v5.644h2.338v-5.634h1.905c.1-.747.194-1.486.294-2.256h-.428c-.543.002-1.788 0-1.788 0s.006-1.113.02-1.596c.02-.662.41-.863.94-.882z"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className={styles['share-social']}>
                  <svg>
                    <path fill="#12af0a" d="M0 0h23.033V23.03H0z" />
                    <g fill="#fefefe" fill-rule="evenodd">
                      <path d="M18.778 11.15c-.098-3.827-3.25-6.9-7.13-6.9-3.832 0-6.958 3.002-7.125 6.77-.003.102-.006.205-.006.31 0 1.338.374 2.587 1.022 3.655l-1.286 3.797 3.95-1.256c1.02.562 2.196.882 3.445.882 3.938 0 7.13-3.168 7.13-7.08 0-.06 0-.12-.002-.18zm-7.13 6.13c-1.218 0-2.35-.36-3.298-.986l-2.304.735.75-2.212c-.72-.98-1.144-2.186-1.144-3.49 0-.193.01-.386.03-.577.294-3.01 2.86-5.37 5.967-5.37 3.148 0 5.735 2.42 5.976 5.485.013.153.02.307.02.464 0 3.28-2.69 5.95-5.997 5.95z" />
                      <path d="M14.918 12.76c-.177-.088-1.035-.51-1.196-.566-.16-.06-.277-.087-.394.087-.117.174-.454.565-.554.68-.104.115-.204.13-.382.043-.173-.087-.738-.268-1.405-.862-.517-.456-.87-1.024-.972-1.197-.1-.174-.01-.267.077-.354.08-.08.174-.205.265-.305l.063-.083c.04-.064.07-.124.11-.208.06-.116.03-.217-.013-.303-.044-.086-.394-.94-.54-1.288-.145-.348-.29-.287-.395-.287-.1 0-.217-.017-.334-.017-.117 0-.307.043-.468.217-.16.174-.61.594-.61 1.45 0 .2.035.4.09.59.176.61.557 1.115.624 1.202.086.114 1.208 1.924 2.984 2.622 1.78.69 1.78.46 2.1.43.32-.027 1.035-.418 1.18-.825.146-.404.146-.75.102-.825-.042-.07-.16-.115-.332-.2z" />
                    </g>
                  </svg>
                </a>
                <a href="#" className={styles['share-social']}>
                  <svg>
                    <path fill="#dc5043" d="M0 0h23.033v23.033H0z" />
                    <g fill="#fff">
                      <path d="M9.728 10.622c-.002.03-.004.054-.004.078v1.888h2.62c0 .195-.23.976-.962 1.472-.43.29-.91.424-1.42.457-.36.023-.716-.014-1.062-.124-1.092-.35-1.906-1.338-2.017-2.542-.027-.296-.008-.594.06-.886.324-1.424 1.672-2.478 3.216-2.25.683.1 1.078.385 1.436.692l1.423-1.424c-.118-.085-.387-.36-.868-.636-.718-.415-1.492-.622-2.32-.63-.156-.003-.312.006-.467.013-.274.01-.542.057-.806.124-1.06.27-1.937.825-2.625 1.674-.662.815-1.017 1.75-1.082 2.795-.03.442.005.883.103 1.317.275 1.212.91 2.19 1.913 2.923.775.57 1.65.872 2.61.925.54.03 1.077-.02 1.603-.16.98-.255 1.794-.766 2.406-1.58.885-1.18 1.1-2.69.84-4.123-1.54-.003-3.07-.003-4.602-.003zM20.243 12.02h.05V10.686h-1.707V8.98H17.25v1.706h-1.706v1.336h1.707v1.705h1.336V12.02" />
                    </g>
                  </svg>
                </a>
                <a href="#" className={styles['share-social']}>
                  <svg>
                    <path fill="#1da0f2" d="M0 0h23.033v23.033H0z" />
                    <path
                      d="M9.367 14.447c-1.36-.047-2.21-1.024-2.437-1.817.38.072.752.058 1.123-.033.01-.002.02-.01.037-.017-.737-.172-1.306-.566-1.7-1.202-.263-.422-.388-.884-.384-1.392.367.197.752.306 1.165.317-.553-.4-.925-.92-1.077-1.59-.15-.665-.053-1.3.28-1.896 1.42 1.67 3.214 2.586 5.403 2.737-.015-.104-.032-.195-.042-.286-.073-.616.05-1.192.382-1.712.417-.654 1.012-1.06 1.776-1.184.88-.145 1.65.107 2.293.73.043.04.08.055.14.04.538-.115 1.046-.31 1.523-.584l.034-.018c0-.002.01 0 .018 0-.207.61-.584 1.078-1.12 1.424.506-.055.99-.19 1.457-.392.01.004.01.008.01.012-.1.13-.197.265-.3.392-.278.343-.598.644-.953.905-.03.023-.045.045-.043.083.015.388 0 .777-.048 1.163-.1.814-.327 1.59-.674 2.332-.36.765-.827 1.457-1.416 2.065-.997 1.03-2.2 1.696-3.6 2.005-.48.105-.966.16-1.458.173-1.51.046-2.907-.33-4.19-1.124-.018-.01-.034-.02-.062-.04.914.1 1.783-.018 2.62-.36.444-.184.855-.423 1.245-.728z"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles['col-7-12']}>
            <div className={`section-title`} style={{ marginBottom: '20px', textAlign: 'left' }}>
              {fullNews.attributes.title}
            </div>

            <div className={styles['full-news']}>
              <div className={styles['main-img']}>
                <img src={`${process.env.API_URL}${fullNews.attributes.main_photo.data.attributes.url}`} alt="news" />
              </div>

              <p className="block-text">
                30 червня Житомирський базовий фармацевтичний коледж урочисто вручав дипломи молодим фахівцям фармації
                та лабораторної діагностики. До привітань випускників долучились заступник голови обласної ради
                Володимир Ширма та директор Департаменту охорони здоров'я Олександр Торбас, зазначивши важливість
                фармацевтичних та медичних працівників у наступній відбудові держави та якісної професійної діяльності у
                забезпеченні збереження здоров'я усіх громадян України.
              </p>
              <p className="block-text">
                Директор коледжу, Ірина Бойчук, привітала випускників та побажала успішного професійного розвитку;
                висловила слова подяки викладацькому складу коледжу за багаторічну якісну підготовку майбутніх фахівців,
                які користуються пріоритетом на ринку праці.
              </p>
              <p className="block-text">
                Директор коледжу, Ірина Бойчук, привітала випускників та побажала успішного професійного розвитку;
                висловила слова подяки викладацькому складу коледжу за багаторічну якісну підготовку майбутніх фахівців,
                які користуються пріоритетом на ринку праці.
              </p>
              <p className="block-text">
                Особливо чуттєво прозвучав Гімн фармації у виконанні студентів коледжу, який уже багато років єднає усю
                фармацевтичну спільноту.
              </p>
              <p className="block-text">
                Яскраві концертні номери від артистів Житомирської обласної філармонії ім. Святослава Ріхтера стали
                чудовим доповненням до святкової атмосфери заходу. Дякуємо колективу філармонії за співпрацю в
                організації урочистої події.
              </p>
              <p className="block-text">
                <b>Більше фото </b>
                <a className="underlined-link" href="#">
                  ТУТ
                </a>
              </p>

              {/* <div className="full-post__gallery" id="gallery3">
                <a
                  className="full-post__image-box col-4-12 pl-0 pr-0 scale-photo-hover hand-pointer"
                  data-src="../../images/events/events-1.jpg"
                  data-fancybox="gallery1"
                >
                  <img src="../../images/events/events-1.jpg" alt="gallery" className="default-image" />
                </a>

                <a
                  className="full-post__image-box col-4-12 pl-0 pr-0 scale-photo-hover hand-pointer"
                  data-src="../../images/events/events-2.jpg"
                  data-fancybox="gallery1"
                >
                  <img src="../../images/events/events-2.jpg" alt="gallery" className="default-image" />
                </a>

                <a
                  className="full-post__image-box col-4-12 pl-0 pr-0 scale-photo-hover hand-pointer"
                  data-src="../../images/events/events-3.jpg"
                  data-fancybox="gallery1"
                >
                  <img src="../../images/events/events-3.jpg" alt="gallery" className="default-image" />
                </a>

                <a
                  className="full-post__image-box col-4-12 pl-0 pr-0 scale-photo-hover hand-pointer"
                  data-src="../../images/events/news-1.jpg"
                  data-fancybox="gallery1"
                >
                  <img src="../../images/events/news-1.jpg" alt="gallery" className="default-image" />
                </a>

                <a
                  className="full-post__image-box col-4-12 pl-0 pr-0 scale-photo-hover hand-pointer"
                  data-src="../../images/events/news-2.jpg"
                  data-fancybox="gallery1"
                >
                  <img src="../../images/events/news-2.jpg" alt="gallery" className="default-image" />
                </a>

                <a
                  className="full-post__image-box col-4-12 pl-0 pr-0 scale-photo-hover hand-pointer"
                  data-src="../../images/events/news-3.jpg"
                  data-fancybox="gallery1"
                >
                  <img src="../../images/events/news-3.jpg" alt="gallery" className="default-image" />
                </a>
              </div> */}

              {/* <!--  --> */}
            </div>
          </div>

          <div className={styles['col-3-12']}>
            <div className="resent-news mb-40">
              <h2 className="title-md mb-20">Попередні новини</h2>
              <div className="resent-news__items">
                {/* <!-- resent-news --> */}
                <div className={styles['resent-news__item']}>
                  <div className={styles['resent-news__content']}>
                    <h4 className={styles['resent-news__title']}>
                      <span className="underline-animation"> До уваги вступників! </span>
                    </h4>

                    <p className={styles['resent-news__date']}>28 June 2023</p>
                  </div>
                </div>

                <div className={styles['resent-news__item']}>
                  <div className="resent-news__content">
                    <h4 className={styles['resent-news__title']}>
                      <span className="underline-animation">
                        Відбулося засідання з обговорення проєкту ОПП Фармація (ОПС фаховий молодший бакалавр)
                      </span>
                    </h4>

                    <p className={styles['resent-news__date']}>28 June 2023</p>
                  </div>
                </div>

                <div className={styles['resent-news__item']}>
                  <div className="resent-news__content">
                    <h4 className={styles['resent-news__title']}>
                      <span className="underline-animation">
                        ПІДПИСАНО ДОГОВІР ПРО ПАРТНЕРСТВО З МЕРЕЖЕЮ АПТЕК БАЖАЄМО ЗДОРОВ'Я
                      </span>
                    </h4>
                    <p className={styles['resent-news__date']}>28 June 2023</p>
                  </div>
                </div>

                <div className={styles['resent-news__item']}>
                  <div className="resent-news__content">
                    <h4 className={styles['resent-news__title']}>
                      <span className="underline-animation"> Вибори голови ради студентського самоврядування </span>
                    </h4>
                    <p className={styles['resent-news__date']}>28 June 2023</p>
                  </div>
                </div>

                <div className={styles['resent-news__item']}>
                  <div className="resent-news__content">
                    <h4 className={styles['resent-news__title']}>
                      <span className="underline-animation">
                        Відбулося засідання з обговорення проєкту ОПП Фармація (ОПС фаховий молодший бакалавр)
                      </span>
                    </h4>
                    <p className={styles['resent-news__date']}>28 June 2023</p>
                  </div>
                </div>
                {/* <!-- // resent-news --> */}
              </div>
            </div>

            <h2 className="title-md mb-20">Архів новин</h2>

            <Accordion title="2013 (5)">
              <ul className="bulleted-list">
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Березень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Квітень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Травень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Червень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Липень
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="2014 (7)">
              <ul className="bulleted-list">
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Березень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Квітень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Травень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Червень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Липень
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="2015 (15)">
              <ul className="bulleted-list">
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Березень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Квітень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Травень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Червень
                  </a>
                </li>
                <li className="bulleted-list-item">
                  <a className="underlined-link" href="#">
                    Липень
                  </a>
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const returnData = {
      props: { headerData: {}, mainScreenData: {}, fullNews: {} },
      redirect: { destination: '/404', permanent: false },
    }

    if (!params || !params.news_id || typeof params.news_id !== 'string') {
      return returnData
    }

    const fullNews = await gql.GetFullNews({ newsId: params.news_id })

    if (!fullNews.novinas.data.length) {
      return returnData
    }

    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
        fullNews: fullNews.novinas.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { headerData: {} } }
  }
}

export default FullNewsPage
