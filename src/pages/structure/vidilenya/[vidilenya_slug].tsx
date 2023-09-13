import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import PageContnet from '@/components/PageContent/PageContnet'
import { CycleCommissionEntity, GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'

interface IVidilenyaPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  vidilenyaData: CycleCommissionEntity
}

const VidilenyaPage: NextPage<IVidilenyaPageProps> = ({ headerData, vidilenyaData, mainScreenData }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title={vidilenyaData.attributes.SEO.title}>
      <h1 className={`${styles['main-title']} section-title`}>{vidilenyaData.attributes.name}</h1>

      {/* {vidilenyaData.attributes.main_photo.data && (
        <div className="container">
          <div className={'main-photo-page'}>
            <img
              src={`${process.env.API_URL}${vidilenyaData.attributes.main_photo.data.attributes.url}`}
              alt="main page photo"
            />
          </div>
        </div>
      )} */}

      <div className={cn(styles['page-conent'])}>
        {String(vidilenyaData.attributes.layout) === 'col_1_8_3' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet colSize="col-1-12" pageComponents={vidilenyaData.attributes.left_sidebar} />
            <PageContnet
              colSize="col-8-12"
              pageComponents={vidilenyaData.attributes.page_components}
              mainPhotoCol={vidilenyaData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-3-12" pageComponents={vidilenyaData.attributes.right_sidebar} />
          </div>
        ) : String(vidilenyaData.attributes.layout) === 'col_2_7_4' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet colSize="col-2-12" pageComponents={vidilenyaData.attributes.left_sidebar} />
            <PageContnet
              colSize="col-7-12"
              pageComponents={vidilenyaData.attributes.page_components}
              mainPhotoCol={vidilenyaData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-4-12" pageComponents={vidilenyaData.attributes.right_sidebar} />
          </div>
        ) : String(vidilenyaData.attributes.layout) === 'col_8_4' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet
              colSize="col-8-12"
              pageComponents={vidilenyaData.attributes.page_components}
              mainPhotoCol={vidilenyaData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-4-12" pageComponents={vidilenyaData.attributes.right_sidebar} />
          </div>
        ) : String(vidilenyaData.attributes.layout) === 'col_9_3' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet
              colSize="col-9-12"
              pageComponents={vidilenyaData.attributes.page_components}
              mainPhotoCol={vidilenyaData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-3-12" pageComponents={vidilenyaData.attributes.right_sidebar} />
          </div>
        ) : (
          <PageContnet colSize="col-12" pageComponents={vidilenyaData.attributes.page_components} />
        )}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    if (!params || !params.vidilenya_slug) {
      return {
        props: { headerData: {}, mainScreenData: {}, vidilenyaData: {} },
        redirect: { destination: '/404', permanent: false },
      }
    }

    const vidilenyaData = await gql.GetVidilenya({ vidilenyaSlug: `${params.vidilenya_slug}` })

    if (!vidilenyaData.vidilenyas.data[0]) {
      return {
        props: { headerData: {}, mainScreenData: {}, vidilenyaData: {} },
        redirect: { destination: '/404', permanent: false },
      }
    }

    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
        vidilenyaData: vidilenyaData.vidilenyas.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'vidilenya page error')
    return { props: { headerData: {}, mainScreenData: {}, vidilenyaData: {} } }
  }
}

export default VidilenyaPage