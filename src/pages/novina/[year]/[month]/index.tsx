import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import { News } from '@/components/News/News'
import NewsArchive from '@/components/News/NewsArchive'
import { GetAllNewsDatesQuery, GetHeaderQuery, GetMainScreenQuery, GetNewsQuery, gql } from '@/graphql/client'

interface INewsPageProps {
  newsData: GetNewsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  newsDates: GetAllNewsDatesQuery
}

const NewsPage: React.FC<INewsPageProps> = ({ headerData, mainScreenData, newsData, newsDates }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const returnData = {
      props: { headerData: {}, mainScreenData: {}, fullNews: {}, newsDates: {} },
      redirect: { destination: '/404', permanent: false },
    }

    if (!params || !params.year || !params.month) {
      return returnData
    }

    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const newsDates = await gql.GetAllNewsDates()

    let maxDayInMonth = ''

    if (params.month === '01') {
      maxDayInMonth = '31'
    } else if (params.month === '02') {
      maxDayInMonth = '28'
    } else if (params.month === '03') {
      maxDayInMonth = '31'
    } else if (params.month === '04') {
      maxDayInMonth = '30'
    } else if (params.month === '05') {
      maxDayInMonth = '31'
    } else if (params.month === '06') {
      maxDayInMonth = '30'
    } else if (params.month === '07') {
      maxDayInMonth = '31'
    } else if (params.month === '08') {
      maxDayInMonth = '31'
    } else if (params.month === '09') {
      maxDayInMonth = '30'
    } else if (params.month === '10') {
      maxDayInMonth = '31'
    } else if (params.month === '11') {
      maxDayInMonth = '30'
    } else if (params.month === '12') {
      maxDayInMonth = '31'
    }

    const newsData = await gql.GetNewsByMonth({
      startDate: `${params.year}-${params.month}-01`,
      endDate: `${params.year}-${params.month}-${maxDayInMonth}`,
      pageSize: 6,
    })

    return {
      props: {
        newsData,
        newsDates,
        headerData,
        mainScreenData,
      },
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { headerData: {} } }
  }
}

export default NewsPage
