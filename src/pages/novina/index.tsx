import React from 'react'

import { Layout } from '@/layouts/Layout'
import { GetStaticProps } from 'next'
import { GetAllNewsDatesQuery, GetHeaderQuery, GetMainScreenQuery, GetNewsQuery, gql } from '@/graphql/client'
import { News } from '@/components/News/News'
import groupNewsByYearsAndMonths from '@/utils/groupNewsByYearsAndMonths'
import { Accordion } from '@/components/ui/Accordion/Accordion'
import Link from 'next/link'
import NewsArchive from '@/components/News/NewsArchive'

interface INewsPageProps {
  newsData: GetNewsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  newsDates: GetAllNewsDatesQuery
}

const NewsPage: React.FC<INewsPageProps> = ({ headerData, mainScreenData, newsData, newsDates }) => {
  // const newsYears = groupNewsByYearsAndMonths(newsDates)

  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Всі новини">
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
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const newsData = await gql.GetNews({ pageSize: 6 })
    const newsDates = await gql.GetAllNewsDates()

    return {
      props: {
        newsData,
        newsDates,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { headerData: {} } }
  }
}

export default NewsPage
