import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './MTBaza.module.scss'
import { GetHeaderQuery } from '@/graphql/__generated__'
import { GetStaticProps, NextPage } from 'next'
import { gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import Table from '@/components/ui/Table/Table'

interface IMTBazaPageProps {
  headerData: GetHeaderQuery
}

const MTBaza: NextPage<IMTBazaPageProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData} title="Матеріально-технічна база">
      <div className="container">
        <h1 className="section-title" style={{ marginBottom: '40px' }}>
          Матеріально технічна база
        </h1>

        <div className={styles['mt-baza5__box-inner']}>
          <div>
            <h3 className={styles['mt-baza5__title']}>Навчальний корпус</h3>
            <p className={styles['mt-baza5__text']}>
              Якість підготовки фахівців, значною мірою, визначається станом матеріально-технічної бази, яка дає
              можливість на належному рівні здійснювати теоретичне та практичне навчання.
            </p>
            <p className={styles['mt-baza5__text']}>
              Протягом всього часу функціонування коледжу створена та активно удосконалюється потужна
              матеріально-технічна база, яка дозволяє забезпечити проведення всіх видів лабораторно-практичних занять і
              навчальних практик відповідно до вимог сьогодення.
            </p>

            <h3 className={styles['mt-baza5__title']}>Модернізація та оновлення</h3>
            <p className={styles['mt-baza5__text']}>
              У навчальному корпусі загальною площею 9872 кв.м. 52 навчальні лабораторії та кабінети, бібліотека з
              читальним залом та книгосховищем, актовий зал, їдальня, медичний пункт, службові приміщення.
            </p>
            <p className={styles['mt-baza5__text']}>
              За останні роки оновлено і модернізовано всі навчальні кабінети, лабораторії, аудиторії. Вони, як і
              приміщення в цілому, побутово облаштовані, естетично привабливі, утримуються у належному стані, регулярно
              проводиться поточний ремонт. Матеріально-технічна база відповідає діючим санітарним і протипожежним
              нормам.
            </p>
          </div>

          {/* <Image className={styles['mt-baza5__img']} src={corpusImage} alt="corps photo" /> */}
          <img className={styles['mt-baza5__img']} src="../assets/images/m-t-baza/05-layer1.png" alt="" />
        </div>
      </div>

      <div className={styles['virtual-tour']}>
        <div className="container">
          <h3 className={styles['virtual-tour-title']}>Віртуальний тур</h3>

          <div className={styles['virtual-tour-items']}>
            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/fasad3d_crop.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/foe.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/fg.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/aud_history.jpg" alt="panorama" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles['mt-baza5__box-inner']}>
          <img className={styles['mt-baza5__img']} src="../assets/images/m-t-baza/02-layer.png" alt="" />

          <div>
            <h3 className={styles['mt-baza5__title']}>Кабінети і лабораторії</h3>
            <p className={styles['mt-baza5__text']}>
              Спортивно-оздоровча робота в коледжі організовується і проводиться на базі спортивного та тренажерного
              залу.
            </p>
            <p className={styles['mt-baza5__text']}>
              Бібліотека коледжу нараховує більше 60 тис. примірників навчальної, наукової та періодичної літератури.
              Книгозабезпечення підручниками складає 100%, також у бібліотеці систематизовано навчально-методичні
              матеріали самостійної роботи студентів, створені викладачами дисциплін.
            </p>
            <p className={styles['mt-baza5__text']}>
              Навчальні заняття проходять з використанням сучасних технічних засобів навчання (аудіо-, та відеотехніки,
              мультимедійних пристроїв, інтерактивної дошки).
            </p>
            <p className={styles['mt-baza5__text']}>
              Сім лекційних аудиторій обладнано мультимедійними відеокомплексами, на заняттях постійно використовується
              інтерактивна дошка.
            </p>
            <p className={styles['mt-baza5__text']}>Робоче місце студента забезпечене на 100%.</p>
          </div>
        </div>
      </div>

      <div className={styles['virtual-tour']}>
        <div className="container">
          <h3 className={styles['virtual-tour-title']}>Віртуальний тур</h3>

          <div className={styles['virtual-tour-items']}>
            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/fasad3d_crop.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/aud_history.jpg" alt="panorama" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles['mt-baza5__box-inner']}>
          <div className="page-content">
            <h3 className={styles['mt-baza5__title']} style={{ textAlign: 'center' }}>
              Перелік навчальних кабінетів і лабораторій
            </h3>
            <p style={{ maxWidth: '70%', textAlign: 'center', margin: '0 auto 20px' }}>
              Для підготовки студентів спеціальності <b>226 "Фармація, промислова фармація"</b> та
              <b>224 "Технології медичної діагностики та лікування".</b>
            </p>

            <Table />
          </div>
        </div>
      </div>

      <div className={styles['virtual-tour']}>
        <div className="container">
          <h3 className={styles['virtual-tour-title']}>Віртуальний тур</h3>

          <div className={styles['virtual-tour-items']}>
            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/fasad3d_crop.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/aud_history.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/fasad3d_crop.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/aud_history.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/fasad3d_crop.jpg" alt="panorama" />
            </div>

            <div className={cn(styles['virtual-tour-item'], 'scale-photo-hover', 'scale-icon')}>
              <img className={styles['panorama-img']} src="../assets/images/m-t-baza/aud_history.jpg" alt="panorama" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles['mt-baza5__box-inner']}>
          <div className="page-content">
            <h3 className={styles['mt-baza5__title']}>Атестація кабінетів та лабораторій</h3>
            <p>
              З метою визначення готовності навчальної лабораторії (кабінету) у забезпеченні умов для реалізації
              освітньої програми, встановлення відповідності навчально-матеріальної бази діючим ГСВО, навчальним планам
              і програмам підготовки фахівців, приведення умов навчання у відповідність до чинних вимог охорони праці та
              пожежної безпеки, в коледжі проводиться атестація навчальних кабінетів та лабораторій.
            </p>
            <p>
              Атестація дозволяє вчасно реагувати на динамічні зміни сьогодення, впроваджувати в практичну підготовку
              передові форми і методи навчання, вчасно оновлювати оснащення навчальних лабораторій (кабінетів), вилучати
              з освітнього процесу незатребувані та неефективні методики і підходи у підготовці фахівців.
            </p>
            <p>
              Проводиться атестація відповідно до діючого «Положення про атестацію навчальних лабораторій (кабінетів)».
            </p>
          </div>

          <img className={styles['mt-baza5__img']} src="../assets/images/m-t-baza/011-layer.png" alt="" />
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

export default MTBaza
