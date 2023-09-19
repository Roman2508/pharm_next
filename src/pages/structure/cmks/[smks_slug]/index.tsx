import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../../Structure.module.scss'
import PageContnet from '@/components/PageContent/PageContnet'
import { CycleCommissionEntity, GetHeaderQuery, GetMainScreenQuery, GetSeoQuery, gql } from '@/graphql/client'

interface ISmksPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  cmkData: CycleCommissionEntity
}

const SmksPage: NextPage<ISmksPageProps> = ({ SEO, headerData, cmkData, mainScreenData }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title={cmkData.attributes.SEO.title}>
      <h1 className={`${styles['main-title']} section-title`}>{cmkData.attributes.name}</h1>

      {/* {cmkData.attributes.main_photo.data && (
        <div className="container">
          <div className={'main-photo-page'}>
            <img
              src={`${process.env.API_URL}${cmkData.attributes.main_photo.data.attributes.url}`}
              alt="main page photo"
            />
          </div>
        </div>
      )} */}

      <div className={cn(styles['page-conent'])}>
        {String(cmkData.attributes.layout) === 'col_1_8_3' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet colSize="col-1-12" pageComponents={cmkData.attributes.left_sidebar} />
            <PageContnet
              colSize="col-8-12"
              pageComponents={cmkData.attributes.page_components}
              mainPhotoCol={cmkData.attributes.main_photo.data}
              cmkHead={cmkData.attributes.headOfCommission.data.attributes}
              cmkTeachers={cmkData.attributes.workers.data}
              cmkSlug={cmkData.attributes.slug}
            />
            <PageContnet colSize="col-3-12" pageComponents={cmkData.attributes.right_sidebar} />
          </div>
        ) : String(cmkData.attributes.layout) === 'col_2_7_4' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet colSize="col-2-12" pageComponents={cmkData.attributes.left_sidebar} />
            <PageContnet
              colSize="col-7-12"
              pageComponents={cmkData.attributes.page_components}
              mainPhotoCol={cmkData.attributes.main_photo.data}
            />
            <PageContnet
              colSize="col-4-12"
              pageComponents={cmkData.attributes.right_sidebar}
              cmkHead={cmkData.attributes.headOfCommission.data.attributes}
              cmkTeachers={cmkData.attributes.workers.data}
              cmkSlug={cmkData.attributes.slug}
            />
          </div>
        ) : String(cmkData.attributes.layout) === 'col_8_4' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet
              colSize="col-8-12"
              pageComponents={cmkData.attributes.page_components}
              mainPhotoCol={cmkData.attributes.main_photo.data}
            />
            <PageContnet
              colSize="col-4-12"
              pageComponents={cmkData.attributes.right_sidebar}
              cmkHead={cmkData.attributes.headOfCommission.data.attributes}
              cmkTeachers={cmkData.attributes.workers.data}
              cmkSlug={cmkData.attributes.slug}
            />
          </div>
        ) : String(cmkData.attributes.layout) === 'col_9_3' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet
              colSize="col-9-12"
              pageComponents={cmkData.attributes.page_components}
              mainPhotoCol={cmkData.attributes.main_photo.data}
            />
            <PageContnet
              colSize="col-3-12"
              pageComponents={cmkData.attributes.right_sidebar}
              cmkHead={cmkData.attributes.headOfCommission.data.attributes}
              cmkTeachers={cmkData.attributes.workers.data}
              cmkSlug={cmkData.attributes.slug}
            />
          </div>
        ) : (
          <PageContnet colSize="col-12" pageComponents={cmkData.attributes.page_components} />
        )}
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cmks = await gql.GetAllCycleCommissionsSlug()

  if (!cmks.cycleCommissions.data.length) {
    return {
      paths: [],
      fallback: false,
    }
  }

  const paths = cmks.cycleCommissions.data.map((el) => ({ params: { smks_slug: el.attributes.slug } }))

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params || !params.smks_slug) {
      return {
        props: { headerData: {}, mainScreenData: {}, cmkData: {} },
        redirect: { destination: '/404', permanent: false },
      }
    }

    const cmkData = await gql.GetCycleCommission({ pageUrl: `/${params.smks_slug}` })

    if (!cmkData.cycleCommissions.data[0]) {
      return {
        props: { headerData: {}, mainScreenData: {}, cmkData: {} },
        redirect: { destination: '/404', permanent: false },
      }
    }

    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        cmkData: cmkData.cycleCommissions.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'cmks page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} } }
  }
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     if (!params || !params.smks_slug) {
//       return {
//         props: { headerData: {}, mainScreenData: {}, cmkData: {} },
//         redirect: { destination: '/404', permanent: false },
//       }
//     }

//     const cmkData = await gql.GetCycleCommission({ pageUrl: `/${params.smks_slug}` })

//     if (!cmkData.cycleCommissions.data[0]) {
//       return {
//         props: { headerData: {}, mainScreenData: {}, cmkData: {} },
//         redirect: { destination: '/404', permanent: false },
//       }
//     }

//     const SEO = await gql.GetSEO()
//     const headerData = await gql.GetHeader()
//     const mainScreenData = await gql.GetMainScreen()

//     return {
//       props: {
//         SEO,
//         headerData,
//         mainScreenData,
//         cmkData: cmkData.cycleCommissions.data[0],
//       },
//     }
//   } catch (error) {
//     console.log(error, 'cmks page error')
//     return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} } }
//   }
// }

export default SmksPage
