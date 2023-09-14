import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import { News } from '@/components/News/News'
import NewsArchive from '@/components/News/NewsArchive'
import {
  GetAllNewsDatesQuery,
  GetHeaderQuery,
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
}

const NewsPage: React.FC<INewsPageProps> = ({ SEO, headerData, mainScreenData, newsData, newsDates }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title="Всі новини">
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

    return {
      props: {
        SEO,
        newsData,
        newsDates,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, newsData: {}, newsDates: {} } }
  }
}

export default NewsPage
