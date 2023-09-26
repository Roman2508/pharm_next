import React from 'react'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Rozklad.module.scss'
import {
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  GroupEntity,
  gql,
} from '@/graphql/client'

interface IGroupSchedulePageProps {
  SEO: GetSeoQuery
  groupData: GroupEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const GroupSchedulePage: React.FC<IGroupSchedulePageProps> = ({
  SEO,
  groupData,
  headerData,
  mainScreenData,
  headerSchedule,
}) => {
  const calendarUrl = `https://calendar.google.com/calendar/embed?showTitle=0&showTz=0&mode=AGENDA&height=600&wkst=2&hl=uk_UA&bgcolor=%23FFFFFF&src=${groupData.attributes.calendar_id}&ctz=Europe%2FKiev`

  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
      title={groupData.attributes.name}
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Розклад групи {groupData.attributes.name}
        </div>

        <div className={styles['schedule-box']}>
          <iframe
            frameBorder="0"
            height="800"
            scrolling="auto"
            src={calendarUrl}
            style={{ borderWidth: 0 }}
            width="90%"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const data = await gql.GetGroupSchedule()

    if (!data.groups.data.length) {
      return {
        paths: [],
        fallback: false,
      }
    }

    const paths = data.groups.data.map((el) => ({ params: { group_name: el.attributes.name } }))

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const returnData = {
      props: { SEO: {}, headerData: {}, mainScreenData: {}, groupData: {}, headerSchedule: {} },
      redirect: { destination: '/404', permanent: true },
    }

    if (!params || !params.group_name || typeof params.group_name !== 'string') {
      return returnData
    }

    const groupData = await gql.GetGroupSchedule({ groupName: params.group_name })

    if (!groupData.groups.data[0]) {
      return returnData
    }

    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        mainScreenData,
        headerSchedule,
        groupData: groupData.groups.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, groupData: {}, headerData: {}, mainScreenData: {}, headerSchedule: {} } }
  }
}

export default GroupSchedulePage
