import React from 'react'

import styles from '../ProZhbphc.module.scss'

import { Layout } from '@/layouts/Layout'
import AdministrationCard from '@/components/AdministrationCard/AdministrationCard'
import { GetStaticProps } from 'next'
import { GetAdministrationQuery, GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'

const administrationItems = [
  {
    photo: '../assets/images/administration/boychuk-irina-dmitrivna_1.jpg',
    position: 'Директор',
    name: 'Бойчук Ірина Дмитрівна',
    phone: '(0412) 24-25-45',
    mail: 'Boychuck.Iryna@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/moroko-mariya-ivanivna_0.jpg',
    position: 'Головний бухгалтер',
    name: 'Мороко Марія Іванівна',
    phone: '(0412) 24-25-45',
    mail: 'moroko.maria@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/bolukh-vira-andriivna_1.jpg',
    position: 'Заступник директора з навчальної роботи',
    name: 'Болух Віра Андріївна',
    phone: '(0412) 24-25-45',
    mail: 'bolukh.vira@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/boychuk-irina-dmitrivna_1.jpg',
    position: 'Директор',
    name: 'Бойчук Ірина Дмитрівна',
    phone: '(0412) 24-25-45',
    mail: 'Boychuck.Iryna@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/moroko-mariya-ivanivna_0.jpg',
    position: 'Головний бухгалтер',
    name: 'Мороко Марія Іванівна',
    phone: '(0412) 24-25-45',
    mail: 'moroko.maria@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/bolukh-vira-andriivna_1.jpg',
    position: 'Заступник директора з навчальної роботи',
    name: 'Болух Віра Андріївна',
    phone: '(0412) 24-25-45',
    mail: 'bolukh.vira@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/boychuk-irina-dmitrivna_1.jpg',
    position: 'Директор',
    name: 'Бойчук Ірина Дмитрівна',
    phone: '(0412) 24-25-45',
    mail: 'Boychuck.Iryna@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/moroko-mariya-ivanivna_0.jpg',
    position: 'Головний бухгалтер',
    name: 'Мороко Марія Іванівна',
    phone: '(0412) 24-25-45',
    mail: 'moroko.maria@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/bolukh-vira-andriivna_1.jpg',
    position: 'Заступник директора з навчальної роботи',
    name: 'Болух Віра Андріївна',
    phone: '(0412) 24-25-45',
    mail: 'bolukh.vira@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/boychuk-irina-dmitrivna_1.jpg',
    position: 'Директор',
    name: 'Бойчук Ірина Дмитрівна',
    phone: '(0412) 24-25-45',
    mail: 'Boychuck.Iryna@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/moroko-mariya-ivanivna_0.jpg',
    position: 'Головний бухгалтер',
    name: 'Мороко Марія Іванівна',
    phone: '(0412) 24-25-45',
    mail: 'moroko.maria@pharm.zt.ua',
  },
  {
    photo: '../assets/images/administration/bolukh-vira-andriivna_1.jpg',
    position: 'Заступник директора з навчальної роботи',
    name: 'Болух Віра Андріївна',
    phone: '(0412) 24-25-45',
    mail: 'bolukh.vira@pharm.zt.ua',
  },
]

interface IAdministrationProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  administration: GetAdministrationQuery
}

const Administration: React.FC<IAdministrationProps> = ({ headerData, mainScreenData, administration }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Адміністрація">
      <div className={styles['administration']}>
        <div className="container">
          <div className={`${styles['administration__title']} section-title`}>Адміністрація</div>
          <div className={styles['administration__list']}>
            {administration.workers.data.map((el, index) => (
              <AdministrationCard
                key={index}
                photo={el.attributes.photo.data.attributes.url}
                position={el.attributes.position}
                name={el.attributes.name}
                phone={el.attributes.phone}
                mail={el.attributes.email}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const administration = await gql.GetAdministration()

    return {
      props: {
        headerData,
        mainScreenData,
        administration,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {}, mainScreenData: {}, administration: {} } }
  }
}

export default Administration
