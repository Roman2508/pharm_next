import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import {
  GetAllCycleCommissionsTeachersQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import TeachersSchedule from '@/components/TeachersSchedule/TeachersSchedule'

interface ITeachersSchedulePageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const TeachersSchedulePage: React.FC<ITeachersSchedulePageProps> = ({
  SEO,
  headerData,
  mainScreenData,
  cycleCommissions,
}) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title="Викладачі">
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Викладачі
        </div>

        <TeachersSchedule cycleCommissions={cycleCommissions} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const cycleCommissions = await gql.GetAllCycleCommissionsTeachers()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cycleCommission: {} } }
  }
}

export default TeachersSchedulePage
