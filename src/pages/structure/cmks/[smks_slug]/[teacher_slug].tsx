import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

import {
  gql,
  GetSeoQuery,
  WorkerEntity,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetHeaderScheduleQuery,
} from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from './Teacher.module.scss'
import { FancyboxGallery } from '@/components/FancyboxGallery'
import pageStyles from '../../../../components/PageContent/Page.module.scss'

interface ITeacherPageProps {
  SEO: GetSeoQuery
  teacher: WorkerEntity
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const tabs = [
  { id: 1, text: 'Загальна інформація' },
  { id: 2, text: 'Додаткова інформація' },
  { id: 3, text: 'Друковані праці' },
]

const TeacherPage: React.FC<ITeacherPageProps> = ({ SEO, teacher, headerData, mainScreenData, headerSchedule }) => {
  const [activeTab, setActiveTab] = React.useState(1)

  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      mainScreenData={mainScreenData}
      title={teacher.attributes.name}
      headerSchedule={headerSchedule}
    >
      <div className="container">
        <h1 className="section-title">{teacher.attributes.name}</h1>

        <div className={styles.wrapper}>
          <div className={styles['tabs-wrapper']}>
            <div className={styles.tabs}>
              {tabs.map((el) => (
                <div
                  key={el.id}
                  className={cn(styles.tab, {
                    [styles['active-tab']]: activeTab === el.id,
                  })}
                  onClick={() => setActiveTab(el.id)}
                >
                  {el.text}
                </div>
              ))}
            </div>
          </div>

          {activeTab === 1 && (
            <div className={`${styles.content} ${styles['general-information']}`}>
              <div className={styles.img}>
                <FancyboxGallery>
                  <a
                    data-fancybox="gallery"
                    href={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                    style={{ maxWidth: '200px' }}
                  >
                    <Image
                      src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                      alt={'teacher photo'}
                      width={150}
                      height={200}
                    />
                  </a>
                </FancyboxGallery>
                {/* <img
                  src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                  alt={teacher.attributes.name}
                /> */}
              </div>
              <div className={pageStyles['page-conent']}>
                <Link
                  className={styles['mb-10']}
                  href={`/structure/cmks/${teacher.attributes.cycle_commission.data.attributes.slug}`}
                >
                  {teacher.attributes.cycle_commission.data.attributes.name}
                </Link>

                {teacher.attributes.email && (
                  <>
                    <span className={styles['mb-10']}>
                      <b>Електронна пошта:</b>
                    </span>
                    <Link className={styles['mb-10']} href={`mailto:${teacher.attributes.email}`}>
                      {teacher.attributes.email}
                    </Link>
                  </>
                )}

                <span className={styles['mb-10']}>
                  <b>Навчальні предмети, які викладає:</b>
                </span>

                <ul className={styles['lessons']}>
                  {teacher.attributes.lessons.data.map((lesson) => (
                    <li key={lesson.id}>«{lesson.attributes.name}»</li>
                  ))}
                </ul>

                <span className={styles['mb-10']}>
                  <b>Посада, науковий ступінь, вчене звання, кваліфікаційна категорія:</b>
                </span>
                <p>{teacher.attributes.status ? teacher.attributes.status : teacher.attributes.position}</p>

                <Link href={`/rozklad/vikladach/${teacher.attributes.slug}`}>Переглянути розклад викладача</Link>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className={cn(styles.content, pageStyles['page-conent'])}>
              <div
                dangerouslySetInnerHTML={{
                  __html: teacher.attributes.additional_information,
                }}
              />
            </div>
          )}

          {activeTab === 3 && (
            <div className={cn(styles.content, pageStyles['page-conent'])}>
              <div
                dangerouslySetInnerHTML={{
                  __html: teacher.attributes.printed_works,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const teachers = await gql.GetAllTeachersWithCycleCommission()

    if (!teachers.workers.data.length) {
      return {
        paths: [],
        fallback: false,
      }
    }

    const paths = teachers.workers.data.map((el) => {
      const smks_slug = el.attributes.cycle_commission.data?.attributes.slug || ''

      return {
        params: {
          smks_slug,
          teacher_slug: el.attributes.slug || '',
        },
      }
    })

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
      props: { headerData: {}, mainScreenData: {}, teacher: {}, headerSchedule: {} },
      redirect: { destination: '/404', permanent: false },
    }

    if (!params || !params.teacher_slug) {
      return returnData
    }

    const teacher = await gql.GetOneTeacher({
      teacherSlug: `${params.teacher_slug}`,
    })

    if (!teacher.workers.data.length) {
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
        teacher: teacher.workers.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'cmks page error')
    return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {}, headerSchedule: {} } }
  }
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     const returnData = {
//       props: { headerData: {}, mainScreenData: {}, teacher: {} },
//       redirect: { destination: '/404', permanent: false },
//     }

//     if (!params || !params.teacher_slug) {
//       return returnData
//     }

//     const teacher = await gql.GetOneTeacher({
//       teacherSlug: `${params.teacher_slug}`,
//     })

//     if (!teacher.workers.data.length) {
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
//         teacher: teacher.workers.data[0],
//       },
//     }
//   } catch (error) {
//     console.log(error, 'cmks page error')
//     return { props: { SEO: {}, headerData: {}, mainScreenData: {}, cmkData: {} } }
//   }
// }

export default TeacherPage
