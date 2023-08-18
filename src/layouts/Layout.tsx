import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import Header from '@/components/Header/Header'
import SubHeader from '@/components/SubHeader/SubHeader'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { Footer } from '@/components/Footer/Footer'
import { GetHeaderQuery } from '@/graphql/__generated__'

// import Header from '@/components/Header/Header'

interface ILayoutProps {
  title?: string
  description?: string
  headerData: GetHeaderQuery
}

export const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = 'ЖБФФК',
  description = 'ЖБФФК',
  headerData,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header headerData={headerData} />
        <SubHeader />
        <Breadcrumbs />
        {children}
        <Footer />
      </main>
    </>
  )
}
