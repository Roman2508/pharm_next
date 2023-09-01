import React from 'react'

import { Layout } from '@/layouts/Layout'
import { GetStaticProps } from 'next'
import { GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'

interface INotFonundPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const NotFonundPage: React.FC<INotFonundPageProps> = ({ headerData, mainScreenData }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Сторінку не знайдено">
      <div className="container">
        <div className={`section-title`}>Сторінку не знайдено</div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'NotFonundPage error')
    return { props: { headerData: {} } }
  }
}

export default NotFonundPage
