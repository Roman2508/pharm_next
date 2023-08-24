import React from 'react'

import styles from './Page.module.scss'

import { Layout } from '@/layouts/Layout'
import { GetServerSideProps, GetStaticProps } from 'next'
import { GetHeaderQuery, PageEntity, gql } from '@/graphql/client'

interface IAdministrationProps {
  headerData: GetHeaderQuery
  pageData: PageEntity
}

const Administration: React.FC<IAdministrationProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData} title="Адміністрація">
      <div className={styles['---']}>
        <div className={`${styles['---']} section-title`}>Page title</div>
        <div className="container"></div>
      </div>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const headerData = await gql.GetHeader()

    if (params && typeof params.first_lvl_url === 'string') {
      const pageData = await gql.GetPage({ pageUrl: params.first_lvl_url })
      // console.log(pageData.pages.data[0])

      return {
        props: {
          headerData,
          pageData: pageData.pages.data[0],
        },
        // revalidate: 10,
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

export default Administration
