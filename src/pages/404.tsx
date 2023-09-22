import React from 'react'

import { Layout } from '@/layouts/Layout'
import { GetStaticProps } from 'next'
import { GetHeaderQuery, GetHeaderScheduleQuery, GetMainScreenQuery, GetSeoQuery, gql } from '@/graphql/client'

interface INotFonundPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const NotFonundPage: React.FC<INotFonundPageProps> = ({ SEO, headerData, headerSchedule, mainScreenData }) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      title="Сторінку не знайдено"
      headerSchedule={headerSchedule}
      mainScreenData={mainScreenData}
    >
      <div className="container">
        <div className={`section-title`}>Помилка при завантаженні сторінки</div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        headerSchedule,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'NotFonundPage error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, headerSchedule: {} } }
  }
}

export default NotFonundPage
