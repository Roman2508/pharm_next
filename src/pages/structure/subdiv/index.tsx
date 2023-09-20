import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import {
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  SubdivisionEntity,
  gql,
} from '@/graphql/client'
import PageCard from '@/components/PageCard/PageCard'

interface SubdivPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  subdivList: SubdivisionEntity[]
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const SubdivPage: NextPage<SubdivPageProps> = ({ SEO, headerData, subdivList, mainScreenData, headerSchedule }) => {
  return (
    <Layout
      SEO={SEO}
      title={'Підрозділи'}
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
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
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const subdivList = await gql.GetAllSubdivision()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        headerSchedule,
        subdivList: subdivList.subdivisions.data,
      },
    }
  } catch (error) {
    console.log(error, 'subdiv page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {}, headerSchedule: {} } }
  }
}

export default SubdivPage
