import React from 'react'

import styles from './Administration.module.scss'

import { Layout } from '@/layouts/Layout'
import AdministrationCard from '@/components/AdministrationCard/AdministrationCard'

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
    photo: '../assets/images/administration/bolukh-vira-andriivna_1.jpg',
    position: 'Заступник директора з навчальної роботи',
    name: 'Болух Віра Андріївна',
    phone: '(0412) 24-25-45',
    mail: 'bolukh.vira@pharm.zt.ua',
  },
]

const Administration = () => {
  return (
    <Layout>
      <div className={styles['administration']}>
        <div className="container">
          <div className={`${styles['administration__title']} section-title`}>Адміністрація</div>
          <div className={styles['administration__list']}>
            {administrationItems.map((el) => (
              <AdministrationCard
                photo={el.photo}
                position={el.position}
                name={el.name}
                phone={el.phone}
                mail={el.mail}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Administration
