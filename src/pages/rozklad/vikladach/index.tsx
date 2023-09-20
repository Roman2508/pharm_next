import React from 'react'
import { GetStaticProps } from 'next'

import {
  gql,
  GetSeoQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetHeaderScheduleQuery,
  GetAllCycleCommissionsTeachersQuery,
} from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import TeachersSchedule from '@/components/TeachersSchedule/TeachersSchedule'

interface ITeachersSchedulePageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const TeachersSchedulePage: React.FC<ITeachersSchedulePageProps> = ({
  SEO,
  headerData,
  mainScreenData,
  headerSchedule,
  cycleCommissions,
}) => {
  return (
    <Layout
      SEO={SEO}
      title="Викладачі"
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
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
    const headerSchedule = await gql.GetHeaderSchedule()
    const cycleCommissions = await gql.GetAllCycleCommissionsTeachers()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        headerSchedule,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cycleCommission: {}, headerSchedule: {} } }
  }
}

export default TeachersSchedulePage
