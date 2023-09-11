import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from './GeneralInfo.module.scss'
import { GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'

interface IGeneralInfoProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const GeneralInfo: React.FC<IGeneralInfoProps> = ({ headerData, mainScreenData }) => {
  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Zhytomyr College of Pharmacy">
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Zhytomyr College of Pharmacy
        </div>

        <div className="page-row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6291.689037301852!2d28.64056024719695!3d50.244635952177546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c648aed44e5cf%3A0x8c8080cc023799b!2z0JbQuNGC0L7QvNC40YDRgdGM0LrQuNC5INCx0LDQt9C-0LLQuNC5INGE0LDRgNC80LDRhtC10LLRgtC40YfQvdC40Lkg0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCW0LjRgtC-0LzQuNGA0YHRjNC60L7RlyDQvtCx0LvQsNGB0L3QvtGXINGA0LDQtNC4!5e0!3m2!1sru!2sua!4v1688215841222!5m2!1sru!2sua"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className={styles.wrapper}>
            <div className={styles.col}>
              <div className={styles['section-name']}>Correspondence Address:</div>
              <div className={styles.info}>
                <p>Chudnivska str. 99</p>
                <p>Zhytomyr </p>
                <p>10005, Ukraine</p>
                <p>
                  Phone: <a href="tel:0412242547">(0412) 24-25-47</a>
                </p>
                <p>
                  E-mail: <a href="mailto:college@pharm.zt.ua">college@pharm.zt.ua</a>
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles['section-name']}>Principal:</div>
              <div className={styles.principal}>
                <div className={styles.img}>
                  <img src="./assets/images/general-info/boychuk-irina-dmitrivna.jpg" alt="principal photo" />
                </div>
                <div className={styles.info}>
                  <h4>Boichuk Iryna</h4>
                  <p>
                    Phone: <a href="tel:0412242545">(0412) 24-25-45</a>
                  </p>
                  <p>
                    E-mail: <a href="mailto:boichuck.iryna@pharm.zt.ua">boichuck.iryna@pharm.zt.ua</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <table>
            <body>
              <tr>
                <td>Field of Expertise</td>
                <td>Program Subject Area</td>
                <td>Education Program</td>
                <td>Educational Background</td>
                <td>Form of Study</td>
                <td>Term of Study</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </body>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'general info page error')
    return { props: { headerData: {} } }
  }
}

export default GeneralInfo
