import React from 'react'

import styles from './AboutPage.module.scss'
import { Layout } from '@/layouts/Layout'
import About from '@/components/About/About'
import { GetStaticProps } from 'next'
import { GetHeaderQuery, gql } from '@/graphql/client'

interface IAboutPageProps {
  headerData: GetHeaderQuery
}

const AboutPage: React.FC<IAboutPageProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData}>
      <div className="container">
        <div className={styles['about-page']}>
          <h1 className={`${styles['about-page__title']} section-title`}>Про ЖБФФК</h1>

          <About buttonVisible={false} titleVisible={false} />
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
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default AboutPage
