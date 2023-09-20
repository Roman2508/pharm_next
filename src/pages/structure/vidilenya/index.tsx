import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import {
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  VidilenyaEntity,
  gql,
} from '@/graphql/client'
import PageCard from '@/components/PageCard/PageCard'

interface ViddilenyaPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  vidilenyaList: VidilenyaEntity[]
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const ViddilenyaPage: NextPage<ViddilenyaPageProps> = ({
  SEO,
  headerData,
  vidilenyaList,
  mainScreenData,
  headerSchedule,
}) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      mainScreenData={mainScreenData}
      title={'Відділення'}
      headerSchedule={headerSchedule}
    >
      <h1 className={`${styles['main-title']} section-title`}>Відділення</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {vidilenyaList.map((el) => (
            <PageCard
              id={el.id}
              department={'vidilenya'}
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
    const mainScreenData = await gql.GetMainScreen()
    const vidilenyaList = await gql.GetAllVidilenyas()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        headerSchedule,
        vidilenyaList: vidilenyaList.vidilenyas.data,
      },
    }
  } catch (error) {
    console.log(error, 'viddilenya page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {}, headerSchedule: {} } }
  }
}

export default ViddilenyaPage
