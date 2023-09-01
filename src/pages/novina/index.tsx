import React from 'react'

import { Layout } from '@/layouts/Layout'
import { GetStaticProps } from 'next'
import { GetHeaderQuery, GetMainScreenQuery, GetNewsQuery, gql } from '@/graphql/client'
import { News } from '@/components/News/News'

interface INewsPageProps {
  newsData: GetNewsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const NewsPage: React.FC<INewsPageProps> = ({ headerData, mainScreenData, newsData }) => {
  const data = newsData.novinas.data.map((el) => el.attributes.date)

  console.log(data)

  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Всі новини">
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Всі новини
        </div>

        <div className="page-row">
          <div className="col-9-12">
            <News newsData={newsData} />
          </div>
          <div className="col-3-12">2</div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const newsData = await gql.GetNews({ pageSize: 9 })

    return {
      props: {
        newsData,
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
