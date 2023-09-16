import React from "react"

import { Layout } from "@/layouts/Layout"
import { GetStaticProps } from "next"
import {
  GetHeaderQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from "@/graphql/client"

interface INotFonundPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const NotFonundPage: React.FC<INotFonundPageProps> = ({
  SEO,
  headerData,
  mainScreenData,
}) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      mainScreenData={mainScreenData}
      title="Сторінку не знайдено"
    >
      <div className="container">
        <div className={`section-title`}>Сторінку не знайдено</div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, "NotFonundPage error")
    return { props: { SEO: {}, headerData: {}, mainScreenData: {} } }
  }
}

export default NotFonundPage
