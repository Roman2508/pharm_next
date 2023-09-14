import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import MainScreen from '@/components/MainScreen/MainScreen'
import { GetHeaderQuery, GetMainScreenQuery, GetSeoQuery } from '@/graphql/__generated__'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface ILayoutProps {
  title?: string
  description?: string
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

export const HomePageLayout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = 'ЖБФФК',
  SEO,
  headerData,
  mainScreenData,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="title" content={`${title} | ЖБФК`} />
        <meta property="og:title" content={`${title} | ЖБФК`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {SEO.seo.data?.attributes.SEO.map((el) => (
          <meta key={el.id} property={el.name} content={el.content} />
        ))}
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
