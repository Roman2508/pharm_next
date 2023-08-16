import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

// import Header from '@/components/Header/Header'

interface ILayoutProps {
  title?: string
  description?: string
}

export const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = 'ЖБФФК',
  description = 'ЖБФФК',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* <Header /> */}
        {children}
      </main>
    </>
  )
}
