import React from 'react'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Rozklad.module.scss'
import {
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  WorkerEntity,
  gql,
} from '@/graphql/client'

interface ITeacherSchedulePageProps {
  SEO: GetSeoQuery
  teacherData: WorkerEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const TeacherSchedulePage: React.FC<ITeacherSchedulePageProps> = ({
  SEO,
  headerData,
  teacherData,
  headerSchedule,
  mainScreenData,
}) => {
  const calendarUrl = `https://calendar.google.com/calendar/embed?showTitle=0&showTz=0&mode=AGENDA&height=600&wkst=2&hl=uk_UA&bgcolor=%23FFFFFF&src=${teacherData.attributes.calendar_id}&ctz=Europe%2FKiev`

  return (
    <Layout
      SEO={SEO}
      title="Викладач"
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const cmks = await gql.GetAllTeachers()

    if (!cmks.workers.data.length) {
      return {
        paths: [],
        fallback: true,
      }
    }

    const paths = cmks.workers.data.map((el) => ({ params: { teacher_slug: el.attributes.slug } }))

    return {
      paths,
      fallback: true,
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [],
      fallback: true,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const returnData = {
      props: { headerData: {}, mainScreenData: {}, teacherData: {}, headerSchedule: {} },
      redirect: { destination: '/404', permanent: true },
    }

    if (!params || !params.teacher_slug || typeof params.teacher_slug !== 'string') {
      return returnData
    }

    const teacherData = await gql.GetTeacherSchedule({ teacherSlug: params.teacher_slug })

    if (!teacherData.workers.data[0]) {
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
        teacherData: teacherData.workers.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, teacherData: {}, headerData: {}, mainScreenData: {}, headerSchedule: {} } }
  }
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     const returnData = {
//       props: { headerData: {}, mainScreenData: {}, teacherData: {} },
//       redirect: { destination: '/404', permanent: true },
//     }

//     if (!params || !params.teacher_slug || typeof params.teacher_slug !== 'string') {
//       return returnData
//     }

//     const teacherData = await gql.GetTeacherSchedule({ teacherSlug: params.teacher_slug })

//     if (!teacherData.workers.data[0]) {
//       return returnData
//     }

//     const SEO = await gql.GetSEO()
//     const headerData = await gql.GetHeader()
//     const mainScreenData = await gql.GetMainScreen()

//     return {
//       props: {
//         SEO,
//         headerData,
//         mainScreenData,
//         teacherData: teacherData.workers.data[0],
//       },
//     }
//   } catch (error) {
//     console.log(error, 'news page error')
//     return { props: { SEO: {}, teacherData: {}, headerData: {}, mainScreenData: {} } }
//   }
// }

export default TeacherSchedulePage
