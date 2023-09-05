import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { GetStaticProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from './VidladSklad.module.scss'
import {
  GetAllCycleCommissionsQuery,
  GetAllTeachersFullInfoQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  WorkerEntity,
  gql,
} from '@/graphql/client'

import photo from '../../../../public/assets/images/administration/bolukh-vira-andriivna_1.jpg'
import photo1 from '../../../../public/assets/images/administration/dunaevska-oksana-feliksivna.jpg'
import photo2 from '../../../../public/assets/images/administration/kozachenko-galina-viktorivna_1.jpg'
import Select from '@/components/ui/Select/Select'
import { Worker } from 'cluster'

interface ITeachingStaffPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  teachers: GetAllTeachersFullInfoQuery
  cycleCommissions: GetAllCycleCommissionsQuery
}

const TeachingStaff: NextPage<ITeachingStaffPageProps> = ({
  headerData,
  mainScreenData,
  teachers,
  cycleCommissions,
}) => {
  const [selectedCmk, setSelectedCmk] = React.useState('')
  const [cmkTeachers, setCmkTeachers] = React.useState<readonly WorkerEntity[]>([])
  const [allTeachers, setAllTeachers] = React.useState<readonly WorkerEntity[]>([])

  React.useEffect(() => {
    setCmkTeachers(teachers.workers.data)
    setAllTeachers(teachers.workers.data)
  }, [])

  React.useEffect(() => {
    if (!selectedCmk) return

    setCmkTeachers(() => {
      const filtred = allTeachers.filter((el) => el.attributes.cycle_commission.data.attributes.name === selectedCmk)

      if (filtred.length === 0) {
        return allTeachers
      }

      return filtred
    })
  }, [selectedCmk])

  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Викладацький склад">
      <div className="container">
        <div className={cn(styles['teachers__title'], 'section-title')}>Викладацький склад</div>

        <div className={styles['teachers__filter']}>
          <span className={styles['teachers__filter-text']}>ЦМК:</span>
          <Select width="360px" items={cycleCommissions} activeItem={selectedCmk} setActiveItem={setSelectedCmk} />
        </div>

        <div className={styles['teachers__list']}>
          {/* <!-- teachers --> */}
          {(cmkTeachers?.length ? cmkTeachers : teachers.workers.data).map((teacher) => {
            return (
              <div className={styles['teachers__item']} key={teacher.id}>
                <div className={styles['teachers__image-box']}>
                  <Image
                    src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                    width={100}
                    height={200}
                    alt="teachers"
                  />
                </div>
                <div className={styles['teachers__item-info']}>
                  <a className={styles['teachers__item-name']} href="#">
                    {teacher.attributes.name}
                  </a>
                  <a className={styles['teachers__item-division']} href="#">
                    {teacher.attributes.cycle_commission.data.attributes.name}
                  </a>
                  <p className={styles['teachers__item-subjects']}>
                    {teacher.attributes.lessons.data.map((lesson, index) => (
                      <React.Fragment key={lesson.attributes.name}>
                        «{lesson.attributes.name}»{teacher.attributes.lessons.data.length === index + 1 ? '. ' : ', '}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const teachers = await gql.GetAllTeachersFullInfo()
    const cycleCommissions = await gql.GetAllCycleCommissions()

    return {
      props: {
        teachers,
        headerData,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'teachers page error')
    return { props: { headerData: {}, mainScreenData: {}, teachers: {}, cycleCommissions: {} } }
  }
}

export default TeachingStaff
