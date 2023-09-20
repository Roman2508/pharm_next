import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import {
  GetAllCycleCommissionsTeachersQuery,
  GetAllGroupsQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import GroupSchedule from '@/components/GroupSchedule/GroupSchedule'
import TeachersSchedule from '@/components/TeachersSchedule/TeachersSchedule'

interface ISchedulePageProps {
  SEO: GetSeoQuery
  groups: GetAllGroupsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({
  SEO,
  groups,
  headerData,
  headerSchedule,
  mainScreenData,
  cycleCommissions,
}) => {
  return (
    <Layout
      SEO={SEO}
      title="Розклад"
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Групи
        </div>

        <GroupSchedule groups={groups} />

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
    const groups = await gql.GetAllGroups()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()
    const cycleCommissions = await gql.GetAllCycleCommissionsTeachers()

    return {
      props: {
        SEO,
        groups,
        headerData,
        headerSchedule,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return {
      props: { SEO: {}, headerData: {}, mainScreenData: {}, cycleCommission: {}, groups: {}, headerSchedule: {} },
    }
  }
}

export default SchedulePage
