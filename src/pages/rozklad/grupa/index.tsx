import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import GroupSchedule from '@/components/GroupSchedule/GroupSchedule'
import { GetAllGroupsQuery, GetHeaderQuery, GetMainScreenQuery, GetSeoQuery, gql } from '@/graphql/client'

interface ISchedulePageProps {
  SEO: GetSeoQuery
  groups: GetAllGroupsQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({ SEO, headerData, mainScreenData, groups }) => {
  return (
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title="Розклад">
      <div className="container">
        <GroupSchedule groups={groups} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const groups = await gql.GetAllGroups()

    return {
      props: {
        SEO,
        groups,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, headerData: {} } }
  }
}

export default SchedulePage
