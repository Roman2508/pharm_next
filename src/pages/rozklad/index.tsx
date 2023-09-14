import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import {
  GetAllCycleCommissionsTeachersQuery,
  GetAllGroupsQuery,
  GetHeaderQuery,
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
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({ SEO, headerData, mainScreenData, cycleCommissions, groups }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title="Розклад">
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
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const cycleCommissions = await gql.GetAllCycleCommissionsTeachers()
    const groups = await gql.GetAllGroups()
    const SEO = await gql.GetSEO()

    return {
      props: {
        SEO,
        groups,
        headerData,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cycleCommission: {}, groups: {} } }
  }
}

export default SchedulePage
