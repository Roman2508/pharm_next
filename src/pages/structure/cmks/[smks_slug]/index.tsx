import { GetHeaderQuery, gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

interface ISmksPageProps {
  headerData: GetHeaderQuery
  smksData: any
}

const SmksPage: NextPage<ISmksPageProps> = ({ headerData, smksData }) => {
  return (
    <Layout headerData={headerData} title={smksData.attributes.SEO.title}>
      <div>1111</div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const headerData = await gql.GetHeader()

    if (params && params.first_lvl_url) {
      const pageData = await gql.GetPage({ pageUrl: `/${params.first_lvl_url}` }) // !!!!

      if (pageData.pages.data[0]) {
        return {
          props: {
            headerData,
            pageData: pageData.pages.data[0],
          },
        }
      } else {
        return {
          props: {
            headerData: {},
            pageData: {},
          },
          redirect: {
            // redirect to notFonundPage
            destination: '/',
            permanent: false,
          },
        }
      }
    } else {
      return {
        props: {
          headerData: {},
          pageData: {},
        },
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    //
  } catch (error) {
    console.log(error, 'default page error')
    return { props: { headerData: {}, pageData: {} } }
  }
}

export default SmksPage
