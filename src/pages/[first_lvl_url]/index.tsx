import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

import styles from './Page.module.scss'
import { Layout } from '@/layouts/Layout'
import {
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  PageEntity,
  gql,
} from '@/graphql/client'
import PageContnet from '@/components/PageContent/PageContnet'
import Image from 'next/image'

interface IAdministrationProps {
  SEO: GetSeoQuery
  pageData: PageEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const Administration: React.FC<IAdministrationProps> = ({
  SEO,
  headerData,
  mainScreenData,
  pageData,
  headerSchedule,
}) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      mainScreenData={mainScreenData}
      title={pageData.attributes.SEO.title}
      headerSchedule={headerSchedule}
    >
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
              <PageContnet colSize="col-4-12" pageComponents={pageData.attributes.right_sidebar} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pagesUrl = await gql.GetAllPagesUrl()

    if (!pagesUrl.pages.data.length) {
      return {
        paths: [],
        fallback: false,
      }
    }

    const allPaths = pagesUrl.pages.data.map((el) => {
      const arr = el.attributes.page_url.split('/').filter((f) => f !== '')
      // const paths = arr.filter()
      if (arr.length === 1) {
        return {
          params: {
            first_lvl_url: arr[0],
          },
        }
      } else {
        return {
          params: {
            first_lvl_url: '',
          },
        }
      }
    })

    const paths = allPaths.filter((f) => f.params.first_lvl_url !== '')

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const returnData = {
    props: { SEO: {}, headerData: {}, mainScreenData: {}, pageData: {}, headerSchedule: {} },
    redirect: { destination: '/404', permanent: true },
  }

  try {
    if (!params || !params.first_lvl_url) {
      return returnData
    }

    const pageData = await gql.GetPage({ pageUrl: `/${params.first_lvl_url}` })

    if (!pageData.pages.data[0]) {
      return returnData
    }

    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    if (
      !headerData ||
      !mainScreenData ||
      !SEO.seo.data.attributes.SEO.length ||
      !headerSchedule.groups.data.length ||
      !headerSchedule.workers.data.length
    ) {
      return returnData
    }

    return {
      props: {
        SEO,
        headerData,
        headerSchedule,
        mainScreenData,
        pageData: pageData.pages.data[0],
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'ERROR!')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, pageData: {}, headerSchedule: {} } }
  }
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     const returnData = {
//       props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} },
//       redirect: { destination: '/404', permanent: true },
//     }

//     if (!params || !params.first_lvl_url) {
//       return returnData
//     }

//     const pageData = await gql.GetPage({ pageUrl: `/${params.first_lvl_url}` })

//     if (!pageData.pages.data[0]) {
//       return returnData
//     }

//     const SEO = await gql.GetSEO()
//     const headerData = await gql.GetHeader()
//     const mainScreenData = await gql.GetMainScreen()

//     return {
//       props: {
//         SEO,
//         headerData,
//         mainScreenData,
//         pageData: pageData.pages.data[0],
//       },
//     }
//   } catch (error) {
//     console.log(error, 'ERROR!')
//     return { props: { SEO: {}, headerData: {}, mainScreenData: {}, pageData: {} } }
//   }
// }

export default Administration
