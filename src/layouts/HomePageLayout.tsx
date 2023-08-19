import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import MainScreen from '@/components/MainScreen/MainScreen'
import { GetHeaderQuery, GetMainScreenQuery } from '@/graphql/__generated__'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface ILayoutProps {
  title?: string
  description?: string
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

export const HomePageLayout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = 'ЖБФФК',
  description = 'ЖБФФК',
  headerData,
  mainScreenData,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://pharm.zt.ua//themes/custom/pharm/favicon-32x32.png"
        />
      </Head>
      <main>
        <Header headerData={headerData} />
        <MainScreen mainScreenData={mainScreenData} />
        {children}
        <Footer />
      </main>
    </>
  )
}
