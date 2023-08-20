import React from 'react'
import cn from 'classnames'

import styles from './Hurtozhytok.module.scss'
import { GetHeaderQuery } from '@/graphql/__generated__'
import { GetStaticProps, NextPage } from 'next'
import { gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'

import image from '../../../../public/assets/images/about/гуртожиток.jpg'
import Image from 'next/image'

interface IHurtozhytokPageProps {
  headerData: GetHeaderQuery
}

const Hurtozhytok: NextPage<IHurtozhytokPageProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData} title="Гуртожиток">
      <div className={styles['about']}>
        <div className={'container'}>
          <h1 className="section-title" style={{ marginBottom: '40px' }}>
            Гуртожиток
          </h1>

          <div className={styles['about__wrapper']}>
            <div className={styles['about__content']}>
              <p>
                Житомирський базовий фармацевтичний фаховий коледж не має власного гуртожитку. Проте забезпечує усіх
                здобувачів освіти (хто цього потребує) місцями в гуртожитку, що орендує у
                <a className="underlined-link" href="https://zkkbp.com.ua/site.php?main" target="_blank">
                  Житомирського кооперативного фахового коледжу бізнесу і права.
                </a>
              </p>
              <p>
                <b>Адреса гуртожитку:</b> м.Житомир, вул. Київська, буд.82
              </p>
              <p>
                <b>Телефон гуртожитку:</b> (0412) 41-37-81
              </p>
              <p>
                Більш детально про гуртожиток
                <a className="underlined-link" href="https://zkkbp.com.ua/site.php?chummery" target="_blank">
                  ТУТ.
                </a>
              </p>
            </div>

            <div className={styles['about__image']}>
              <Image src={image} alt="гуртожиток" />
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

export default Hurtozhytok
