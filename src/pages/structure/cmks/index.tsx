import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import PageCard from '@/components/PageCard/PageCard'
import { CycleCommissionEntity, GetHeaderQuery, GetMainScreenQuery, GetSeoQuery, gql } from '@/graphql/client'

interface ISmksPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  cmkList: CycleCommissionEntity[]
}

const SmksPage: NextPage<ISmksPageProps> = ({ SEO, headerData, cmkList, mainScreenData }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title={'Циклові комісії'}>
      <h1 className={`${styles['main-title']} section-title`}>Циклові комісії</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {cmkList.map((el) => (
            <PageCard
              id={el.id}
              department={'cmks'}
              slug={el.attributes.slug}
              photo={el.attributes.main_photo.data.attributes.url}
              name={el.attributes.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const cmkList = await gql.GetAllCycleCommissions()
    const headerData = await gql.GetHeader()
    const SEO = await gql.GetSEO()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        cmkList: cmkList.cycleCommissions.data,
      },
    }
  } catch (error) {
    console.log(error, 'cmks page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} } }
  }
}

export default SmksPage
