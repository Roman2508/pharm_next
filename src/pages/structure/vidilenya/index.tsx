import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import { GetHeaderQuery, GetMainScreenQuery, VidilenyaEntity, gql } from '@/graphql/client'
import Link from 'next/link'
import PageCard from '@/components/PageCard/PageCard'

interface ViddilenyaPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  vidilenyaList: VidilenyaEntity[]
}

const ViddilenyaPage: NextPage<ViddilenyaPageProps> = ({ headerData, vidilenyaList, mainScreenData }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title={'Відділення'}>
      <h1 className={`${styles['main-title']} section-title`}>Відділення</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {vidilenyaList.map((el) => (
            <PageCard
              id={el.id}
              department={'vidilenya'}
              slug={el.attributes.slug}
              photo={el.attributes.main_photo.data.attributes.url}
              name={el.attributes.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const vidilenyaList = await gql.GetAllVidilenyas()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
        vidilenyaList: vidilenyaList.vidilenyas.data,
      },
    }
  } catch (error) {
    console.log(error, 'viddilenya page error')
    return { props: { headerData: {}, mainScreenData: {}, cmkData: {} } }
  }
}

export default ViddilenyaPage