import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import { News } from '@/components/News/News'
import NewsArchive from '@/components/News/NewsArchive'
import {
  GetAllNewsDatesQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'

interface INewsPageProps {
  SEO: GetSeoQuery
  newsData: GetNewsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  newsDates: GetAllNewsDatesQuery
  headerSchedule: GetHeaderScheduleQuery
}

const NewsPage: React.FC<INewsPageProps> = ({
  SEO,
  headerData,
  mainScreenData,
  newsData,
  newsDates,
  headerSchedule,
}) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      mainScreenData={mainScreenData}
      title="Всі новини"
      headerSchedule={headerSchedule}
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Всі новини
        </div>

        <div className="page-row">
          <div className="col-news-9-12">
            <News newsData={newsData} pageSize={6} />
          </div>
          <div className="col-news-3-12">
            <NewsArchive newsDates={newsDates} />
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
    const newsData = await gql.GetNews({ pageSize: 6 })
    const newsDates = await gql.GetAllNewsDates()
    const headerSchedule = await gql.GetHeaderSchedule()

    if (
      !headerData.header.data ||
      !mainScreenData.header.data ||
      !SEO.seo.data.attributes.SEO.length ||
      !headerSchedule.groups.data.length ||
      !headerSchedule.workers.data.length ||
      !newsData.novinas.data.length ||
      !newsDates.novinas.data.length
    ) {
      return {
        props: {
          SEO: {},
          headerData: {},
          mainScreenData: {},
          newsData: {},
          newsDates: {},
          headerSchedule: {},
        },
        redirect: { destination: '/404', permanent: true },
      }
    }

    return {
      props: {
        SEO,
        newsData,
        newsDates,
        headerData,
        mainScreenData,
        headerSchedule,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return {
      props: { SEO: {}, headerData: {}, mainScreenData: {}, newsData: {}, newsDates: {}, headerSchedule: {} },
      redirect: { destination: '/404', permanent: true },
    }
  }
}

export default NewsPage
