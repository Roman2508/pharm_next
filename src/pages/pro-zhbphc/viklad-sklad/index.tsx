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
  GetSeoQuery,
  WorkerEntity,
  gql,
} from '@/graphql/client'

import Select from '@/components/ui/Select/Select'
import SelectItem from '@/components/ui/Select/SelectItem'
import Link from 'next/link'

interface ITeachingStaffPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  teachers: GetAllTeachersFullInfoQuery
  cycleCommissions: GetAllCycleCommissionsQuery
}

const TeachingStaff: NextPage<ITeachingStaffPageProps> = ({
  SEO,
  headerData,
  mainScreenData,
  teachers,
  cycleCommissions,
}) => {
  const [selectedCmk, setSelectedCmk] = React.useState('')
  const [cmkTeachers, setCmkTeachers] = React.useState<readonly WorkerEntity[]>([])
  const [allTeachers, setAllTeachers] = React.useState<readonly WorkerEntity[]>([])

  React.useEffect(() => {
    //@ts-ignore
    setCmkTeachers(teachers.workers.data)
    //@ts-ignore
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
    <Layout SEO={SEO} headerData={headerData} mainScreenData={mainScreenData} title="Викладацький склад">
      <div className="container">
        <div className={cn(styles['teachers__title'], 'section-title')}>Викладацький склад</div>

        <div className={styles['teachers__filter']}>
          <span className={styles['teachers__filter-text']}>ЦМК:</span>
          <Select width="360px" activeItem={selectedCmk}>
            <>
              <SelectItem key={'- Виберіть -'} value="- Виберіть -" onClick={() => setSelectedCmk('- Виберіть -')} />

              {cycleCommissions.cycleCommissions.data.map((el) => (
                <SelectItem key={el.id} onClick={() => setSelectedCmk(el.attributes.name)} value={el.attributes.name} />
              ))}
            </>
          </Select>
        </div>

        <div className={styles['teachers__list']}>
          {/* <!-- teachers --> */}
          {(cmkTeachers?.length ? cmkTeachers : teachers.workers.data).map((teacher) => {
            return (
              <Link
                className={styles['teachers__item']}
                href={`/structure/cmks/${teacher.attributes.cycle_commission.data.attributes.slug}/${teacher.attributes.slug}`}
                key={teacher.id}
              >
                <div className={styles['teachers__image-box']}>
                  <Image
                    src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                    width={200}
                    height={300}
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
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const teachers = await gql.GetAllTeachersFullInfo()
    const cycleCommissions = await gql.GetAllCycleCommissions()

    return {
      props: {
        SEO,
        teachers,
        headerData,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'teachers page error')
    return {
      props: {
        SEO: {},
        headerData: {},
        mainScreenData: {},
        teachers: {},
        cycleCommissions: {},
      },
    }
  }
}

export default TeachingStaff
