import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import GroupSchedule from '@/components/GroupSchedule/GroupSchedule'
import { GetAllGroupsQuery, GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'

interface ISchedulePageProps {
  groups: GetAllGroupsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({ headerData, mainScreenData, groups }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Розклад">
      <div className="container">
        <GroupSchedule groups={groups} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const groups = await gql.GetAllGroups()

    return {
      props: {
        groups,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { headerData: {} } }
  }
}

export default SchedulePage
