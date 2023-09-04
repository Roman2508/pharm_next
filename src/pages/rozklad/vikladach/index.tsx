import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import { GetAllCycleCommissionsTeachersQuery, GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'
import TeachersSchedule from '@/components/TeachersSchedule/TeachersSchedule'

interface ITeachersSchedulePageProps {
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const TeachersSchedulePage: React.FC<ITeachersSchedulePageProps> = ({
  headerData,
  mainScreenData,
  cycleCommissions,
}) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Викладачі">
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
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    // const teachers = await gql.GetAllTeachers()
    const cycleCommissions = await gql.GetAllCycleCommissionsTeachers()

    return {
      props: {
        cycleCommissions,
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

export default TeachersSchedulePage
