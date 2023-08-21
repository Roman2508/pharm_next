import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from './VidomiVip.module.scss'
import { GetHeaderQuery } from '@/graphql/__generated__'

interface IVidomiVipPageProps {
  headerData: GetHeaderQuery
}

const VidomiVip: NextPage<IVidomiVipPageProps> = ({ headerData }) => {
  return (
    <Layout headerData={headerData} title="Відео і 3D-панорами">
      <div className={'subdivisions'}>
        <h1 className="section-title">Відомі випускники</h1>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()

    return {
      props: {
        headerData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default VidomiVip
