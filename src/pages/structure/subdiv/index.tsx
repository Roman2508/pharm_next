import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import { GetHeaderQuery, GetMainScreenQuery, GetSeoQuery, SubdivisionEntity, gql } from '@/graphql/client'
import Link from 'next/link'
import PageCard from '@/components/PageCard/PageCard'

interface SubdivPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  subdivList: SubdivisionEntity[]
}

const SubdivPage: NextPage<SubdivPageProps> = ({ SEO, headerData, subdivList, mainScreenData }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title={'Підрозділи'}>
      <h1 className={`${styles['main-title']} section-title`}>Підрозділи</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {subdivList.map((el) => (
            <PageCard
              id={el.id}
              department={'subdiv'}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const subdivList = await gql.GetAllSubdivision()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const SEO = await gql.GetSEO()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        subdivList: subdivList.subdivisions.data,
      },
    }
  } catch (error) {
    console.log(error, 'cmks page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} } }
  }
}

export default SubdivPage
