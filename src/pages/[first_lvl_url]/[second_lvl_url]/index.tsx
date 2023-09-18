import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, GetStaticProps } from 'next'

import styles from '../Page.module.scss'
import { Layout } from '@/layouts/Layout'
import PageContnet from '@/components/PageContent/PageContnet'
import { GetHeaderQuery, GetMainScreenQuery, GetSeoQuery, PageEntity, gql } from '@/graphql/client'
import Image from 'next/image'

interface IPageProps {
  SEO: GetSeoQuery
  pageData: PageEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const Page: React.FC<IPageProps> = ({ SEO, headerData, mainScreenData, pageData }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title={pageData.attributes.SEO.title}>
      <div className={styles['---']}>
        <h1 className={`${styles['page-title']} section-title`}>{pageData.attributes.title}</h1>

        {pageData.attributes.main_photo.data && (
          <div className="container">
            <div className={'main-photo-page'}>
              <Image
                src={`${process.env.API_URL}${pageData.attributes.main_photo.data.attributes.url}`}
                width={pageData.attributes.main_photo.data.attributes.width || 800}
                height={pageData.attributes.main_photo.data.attributes.height || 400}
                alt="main page photo"
              />
            </div>
          </div>
        )}

        <div className={cn(styles['page-conent'])}>
          {String(pageData.attributes.layout) === 'col_1_8_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-1-12" pageComponents={pageData.attributes.left_sidebar} />
              <PageContnet colSize="col-8-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-3-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_2_7_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-2-12" pageComponents={pageData.attributes.left_sidebar} />
              <PageContnet colSize="col-7-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-3-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_2_8_2' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-2-12" pageComponents={pageData.attributes.left_sidebar} />
              <PageContnet colSize="col-8-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-2-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_8_4' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-8-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-4-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_9_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-9-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-3-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : (
            <PageContnet colSize="col-12" pageComponents={pageData.attributes.page_components} />
          )}
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const returnData = {
      props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} },
      redirect: { destination: '/404', permanent: false },
    }

    if (!params || !params.first_lvl_url || !params.second_lvl_url) {
      return returnData
    }

    const pageData = await gql.GetPage({ pageUrl: `/${params.first_lvl_url}/${params.second_lvl_url}` })

    if (!pageData.pages.data[0]) {
      return returnData
    }

    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        pageData: pageData.pages.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'default page error')
    return { props: { SEO: {}, headerData: {}, pageData: {}, mainScreenData: {} } }
  }
}

export default Page
