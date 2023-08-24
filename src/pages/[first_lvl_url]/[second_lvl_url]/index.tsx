import React from 'react'

import styles from './Page.module.scss'

import { Layout } from '@/layouts/Layout'
import { GetServerSideProps, GetStaticProps } from 'next'
import { GetHeaderQuery, PageEntity, gql } from '@/graphql/client'
import DynamicPageLayout from '@/utils/dynamicPageLayout'

interface IAdministrationProps {
  headerData: GetHeaderQuery
  pageData: PageEntity
}

const Administration: React.FC<IAdministrationProps> = ({ headerData, pageData }) => {
  const DLayout = DynamicPageLayout(String(pageData.attributes.layout))

  console.log(pageData.attributes.page_components[0])

  return (
    <Layout headerData={headerData} title={pageData.attributes.meta_title}>
      <div className={styles['---']}>
        <div className={`${styles['---']} section-title`}>{pageData.attributes.title}</div>
        <div className="container">
          <DLayout>
            {pageData.attributes.page_components.map((component) => {
              if (component) {
              }

              return <>111</>
            })}
          </DLayout>
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const headerData = await gql.GetHeader()

    if (params && params.first_lvl_url && params.second_lvl_url) {
      const pageData = await gql.GetPage({ pageUrl: `/${params.first_lvl_url}/${params.second_lvl_url}` })

      if (pageData.pages.data[0]) {
        return {
          props: {
            headerData,
            pageData: pageData.pages.data[0],
          },
        }
      } else {
        return {
          props: {
            headerData: {},
            pageData: {},
          },
          redirect: {
            // redirect to notFonundPage
            destination: '/',
            permanent: false,
          },
        }
      }
    } else {
      return {
        props: {
          headerData: {},
          pageData: {},
        },
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    //
  } catch (error) {
    console.log(error, 'default page error')
    return { props: { headerData: {}, pageData: {} } }
  }
}

export default Administration
