import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Rozklad.module.scss'
import { GetHeaderQuery, GetMainScreenQuery, WorkerEntity, gql } from '@/graphql/client'

interface IGroupSchedulePageProps {
  groupData: WorkerEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const GroupSchedulePage: React.FC<IGroupSchedulePageProps> = ({ headerData, mainScreenData, groupData }) => {
  const calendarUrl = `https://calendar.google.com/calendar/embed?showTitle=0&showTz=0&mode=AGENDA&height=600&wkst=2&hl=uk_UA&bgcolor=%23FFFFFF&src=${groupData.attributes.calendar_id}&ctz=Europe%2FKiev`

  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title={groupData.attributes.name}>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const returnData = {
      props: { headerData: {}, mainScreenData: {}, groupData: {} },
      redirect: { destination: '/404', permanent: false },
    }

    if (!params || !params.group_name || typeof params.group_name !== 'string') {
      return returnData
    }

    const teacherData = await gql.GetGroupSchedule({ groupName: params.group_name })

    if (!teacherData.groups.data[0]) {
      return returnData
    }

    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
        groupData: teacherData.groups.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { teacherData: {}, headerData: {}, mainScreenData: {} } }
  }
}

export default GroupSchedulePage
