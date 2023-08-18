import React from 'react'

import styles from './AboutPage.module.scss'
import { Layout } from '@/layouts/Layout'
import About from '@/components/About/About'

const AboutPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles['about-page']}>
          <h1 className={`${styles['about-page__title']} section-title`}>Про ЖБФФК</h1>

          <About buttonVisible={false} titleVisible={false} />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
