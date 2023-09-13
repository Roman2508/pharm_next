import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Rozklad.module.scss'
import { GetHeaderQuery, GetMainScreenQuery, WorkerEntity, gql } from '@/graphql/client'

interface ITeacherSchedulePageProps {
  teacherData: WorkerEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const TeacherSchedulePage: React.FC<ITeacherSchedulePageProps> = ({ headerData, mainScreenData, teacherData }) => {
  const calendarUrl = `https://calendar.google.com/calendar/embed?showTitle=0&showTz=0&mode=AGENDA&height=600&wkst=2&hl=uk_UA&bgcolor=%23FFFFFF&src=${teacherData.attributes.calendar_id}&ctz=Europe%2FKiev`

  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Викладач">
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          {teacherData.attributes.name}
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
      props: { headerData: {}, mainScreenData: {}, teacherData: {} },
      redirect: { destination: '/404', permanent: false },
    }

    if (!params || !params.teacher_slug || typeof params.teacher_slug !== 'string') {
      return returnData
    }

    const teacherData = await gql.GetTeacherSchedule({ teacherSlug: params.teacher_slug })

    if (!teacherData.workers.data[0]) {
      return returnData
    }

    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
        teacherData: teacherData.workers.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { teacherData: {}, headerData: {}, mainScreenData: {} } }
  }
}

export default TeacherSchedulePage