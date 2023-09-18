import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import Header from '@/components/Header/Header'
import SubHeader from '@/components/SubHeader/SubHeader'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { Footer } from '@/components/Footer/Footer'
import { GetHeaderQuery, GetMainScreenQuery, GetSeoQuery } from '@/graphql/__generated__'

interface ILayoutProps {
  title?: string
  description?: string
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

export const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = '',
  SEO,
  headerData,
  mainScreenData,
}) => {
  return (
    <>
      <Head>
        <title>{`${title} | ЖБФК`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="title" content={`${title} | ЖБФК`} />
        <meta property="og:title" content={`${title} | ЖБФК`} />
        {SEO.seo?.data?.attributes.SEO.map((el) => (
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
        <SubHeader mainScreenData={mainScreenData} />
        <Breadcrumbs />
        {children}
        <Footer />
      </main>
    </>
  )
}
