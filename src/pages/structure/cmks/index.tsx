import React from 'react'
import cn from 'classnames'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from './CmksPage.module.scss'
import { CycleCommissionEntity, GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'
import Link from 'next/link'

interface ISmksPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  cmkList: CycleCommissionEntity[]
}

const SmksPage: NextPage<ISmksPageProps> = ({ headerData, cmkList, mainScreenData }) => {
  console.log(cmkList)
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title={'Циклові комісії'}>
      <h1 className={`${styles['main-title']} section-title`}>Циклові комісії</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {cmkList.map((el) => (
            <Link key={el.id} className={styles['item']} href={`cmks/${el.attributes.slug}`}>
              <div className={cn(styles['photo'], 'scale-photo-hover', 'hand-pointer')}>
                <img src={`${process.env.API_URL}${el.attributes.main_photo.data.attributes.url}`} alt="subdivisions" />
              </div>
              <div className={styles['text-box']}>
                <p className={styles['text']}>{el.attributes.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const cmkList = await gql.GetAllCycleCommissions()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
        cmkList: cmkList.cycleCommissions.data,
      },
    }
  } catch (error) {
    console.log(error, 'cmks page error')
    return { props: { headerData: {}, mainScreenData: {}, cmkData: {} } }
  }
}

export default SmksPage