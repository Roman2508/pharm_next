import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { GetStaticProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from './VidladSklad.module.scss'
import { GetHeaderQuery, gql } from '@/graphql/client'

import photo from '../../../../public/assets/images/administration/bolukh-vira-andriivna_1.jpg'
import photo1 from '../../../../public/assets/images/administration/dunaevska-oksana-feliksivna.jpg'
import photo2 from '../../../../public/assets/images/administration/kozachenko-galina-viktorivna_1.jpg'
import Select from '@/components/ui/Select/Select'

interface ITeachingStaffPageProps {
  headerData: GetHeaderQuery
}

const TeachingStaff: NextPage<ITeachingStaffPageProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData} title="Викладацький склад">
      <div className="container">
        <div className={cn(styles['teachers__title'], 'section-title')}>Викладацький склад</div>

        <div className={styles['teachers__filter']}>
          <span className={styles['teachers__filter-text']}>ЦМК:</span>
          <Select width="360px" items={1} />
        </div>

        <div className={styles['teachers__list']}>
          {/* <!-- teachers --> */}
          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Бойчук Ірина Дмитрівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК Фармацевтичних дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Біологічна фізика з фізичними методами дослідження», «Вища математика та статистика», «Математика»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo1} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Болух Віра Андріївна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>«Аналітична хімія», «Техніка лабораторних робіт»</p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo2} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Дунаєвська Оксана Феліксівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК медико-біологічних дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Гігієна з основами екології», «Гігієна з основами мікробіології», «Мікробіологія з основами
                імунології», «Мікробіологія з основами імунології та технікою мікробіологічних досліджень»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Козаченко Галина Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Організація та економіка фармації», «Основи менеджменту та маркетингу у фармації», «Фармацевтичний
                менеджмент і маркетинг», «Фармацевтичне право та законодавство»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo1} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Болух Віра Андріївна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>«Аналітична хімія», «Техніка лабораторних робіт»</p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo2} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Бур’янова Вікторія Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК медико-біологічних дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Гігієна з основами екології», «Гігієна з основами мікробіології», «Мікробіологія з основами
                імунології», «Мікробіологія з основами імунології та технікою мікробіологічних досліджень»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo2} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Козаченко Галина Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Організація та економіка фармації», «Основи менеджменту та маркетингу у фармації», «Фармацевтичний
                менеджмент і маркетинг», «Фармацевтичне право та законодавство»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo1} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Бур’янова Вікторія Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК медико-біологічних дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Гігієна з основами екології», «Гігієна з основами мікробіології», «Мікробіологія з основами
                імунології», «Мікробіологія з основами імунології та технікою мікробіологічних досліджень»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Козаченко Галина Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Організація та економіка фармації», «Основи менеджменту та маркетингу у фармації», «Фармацевтичний
                менеджмент і маркетинг», «Фармацевтичне право та законодавство»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo1} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Луцак Ірина Василівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК філологічних дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Неорганічна хімія», «Органічна хімія», «Техніка лабораторних робіт», «Фізична та колоїдна хімія»,
                «Хімія»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo2} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Козаченко Галина Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Організація та економіка фармації», «Основи менеджменту та маркетингу у фармації», «Фармацевтичний
                менеджмент і маркетинг», «Фармацевтичне право та законодавство»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Болух Віра Андріївна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>«Аналітична хімія», «Техніка лабораторних робіт»</p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo2} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Бур’янова Вікторія Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК медико-біологічних дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Гігієна з основами екології», «Гігієна з основами мікробіології», «Мікробіологія з основами
                імунології», «Мікробіологія з основами імунології та технікою мікробіологічних досліджень»
              </p>
            </div>
          </div>

          <div className={styles['teachers__item']}>
            <div className={styles['teachers__image-box']}>
              <Image src={photo} alt="teachers" />
            </div>
            <div className={styles['teachers__item-info']}>
              <a className={styles['teachers__item-name']} href="#">
                Козаченко Галина Вікторівна
              </a>
              <a className={styles['teachers__item-division']} href="#">
                ЦК загальноосвітніх дисциплін
              </a>
              <p className={styles['teachers__item-subjects']}>
                «Організація та економіка фармації», «Основи менеджменту та маркетингу у фармації», «Фармацевтичний
                менеджмент і маркетинг», «Фармацевтичне право та законодавство»
              </p>
            </div>
          </div>
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
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default TeachingStaff
