import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from './Rozklad.module.scss'
import pageStyles from '../../components/PageContent/Page.module.scss'
import {
  GetAllCycleCommissionsTeachersQuery,
  GetAllGroupsQuery,
  GetAllTeachersQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  gql,
} from '@/graphql/client'
import { sortGroupsByDepartments } from '@/utils/sortGroupsByDepartments'
import GroupSchedule from '@/components/GroupSchedule/GroupSchedule'
import TeachersSchedule from '@/components/TeachersSchedule/TeachersSchedule'

interface ISchedulePageProps {
  groups: GetAllGroupsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({ headerData, mainScreenData, cycleCommissions, groups }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Розклад">
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

    return {
      props: {
        groups,
        headerData,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { headerData: {} } }
  }
}

export default SchedulePage
