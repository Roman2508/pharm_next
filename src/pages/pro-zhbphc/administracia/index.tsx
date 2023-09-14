import React from 'react'

import styles from '../ProZhbphc.module.scss'

import { Layout } from '@/layouts/Layout'
import AdministrationCard from '@/components/AdministrationCard/AdministrationCard'
import { GetStaticProps } from 'next'
import { GetAdministrationQuery, GetHeaderQuery, GetMainScreenQuery, GetSeoQuery, gql } from '@/graphql/client'

interface IAdministrationProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  administration: GetAdministrationQuery
}

const Administration: React.FC<IAdministrationProps> = ({ SEO, headerData, mainScreenData, administration }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title="Адміністрація">
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
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const administration = await gql.GetAdministration()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        administration,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, administration: {} } }
  }
}

export default Administration
