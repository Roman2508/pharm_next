import React from "react"

import styles from "./ProZhbphc.module.scss"
import { Layout } from "@/layouts/Layout"
import About from "@/components/About/About"
import { GetStaticProps } from "next"
import { GetHeaderQuery, GetMainScreenQuery, gql } from "@/graphql/client"
import Image from "next/image"

import collegeImage from "../../../public/assets/images/about/college.jpg"
import Link from "next/link"

interface IAboutPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const AboutPage: React.FC<IAboutPageProps> = ({
  headerData,
  mainScreenData,
}) => {
  return (
    <Layout
      headerData={headerData}
      mainScreenData={mainScreenData}
      title="Про ЖБФФК"
    >
      <div className="container">
        <div className={styles["about-page"]}>
          <h1 className={`${styles["about-page__title"]} section-title`}>
            Про ЖБФФК
          </h1>

          <div className="page-row">
            <div className="col-9-12">
              <div className={"main-photo-page"}>
                <Image src={collegeImage} alt="college photo" />
              </div>

              <h3 className="title-md">Наші переваги</h3>
              <div className="page-content">
                <p>
                  <b>Житомирський базовий фармацевтичний фаховий коледж</b> -
                  один з найкращих освітніх центрів поліського регіону і всієї
                  України.
                </p>
                <p>
                  Коледж є базовим з питань навчально-методичної роботи для
                  вищих медичних, фармацевтичних навчальних закладів, які
                  здійснюють підготовку фармацевтів в Україні.
                </p>
                <p>
                  <b>Житомирський базовий фармацевтичний фаховий коледж</b> - це
                  потужний кадровий потенціал, міцна матеріально-технічна база,
                  конкурентоспроможність фахівців на ринку праці.
                </p>
              </div>

              <h3 className="title-md">Якісні знання</h3>
              <div className="page-content">
                <p>
                  <b>Кваліфікований фармацевт</b> - працівник галузі охорони
                  здоров´я, що відповідає за раціональне використання лікарських
                  засобів, докладає відповідних зусиль для отримання пацієнтами
                  ефективних ліків та надання якісних фармацевтичних послуг. Це
                  вимагає готовності відповідати вимогам високих професійних
                  стандартів, володіння та використання законодавства у
                  відповідній сфері, бути в курсі подій у
                  фармацевтичній/аптечній практиці та науці, новітніх досягнень,
                  пов´язаних із застосуванням ліків, розуміння
                  організаційно-економічних питань, знання тенденцій, процесів,
                  особливостей розвитку та динаміки змін фармацевтичного ринку;
                  відображати певні моральні принципи та етичні норми поведінки,
                  характерні засадам законності та професіоналізму, чесності та
                  об´єктивності, партнерства та індивідуального підходу до
                  кожного пацієнта.
                </p>
              </div>

              <h3 className="title-md">Престижна професія</h3>
              <div className="page-content">
                <p>
                  <b>Фармацевт</b> – одна з найпотрібніших у світі професії, і
                  її заслужена престижність, шляхетність підтверджується
                  світовим досвідом, стрімким розвитком фармації у світі,
                  зокрема в Україні.
                </p>

                <p>
                  <b>Фармацевт</b> – це сьогодення і майбутнє фармації. Його
                  діяльність – це натхненна праця в ім’я збереження здоров’я
                  людини, продовження тривалості життя і поліпшення його якості.
                </p>
              </div>
            </div>

            <div className="col-3-12">
              {headerData.header.data.attributes.Header.navigation[0].submenu.map(
                (el) => (
                  <Link className="page-button-link" href={el.link} key={el.id}>
                    {el.text}
                  </Link>
                )
              )}
            </div>
          </div>
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
    console.log(error, "about page error")
    return { props: { headerData: {}, mainScreenData: {} } }
  }
}

export default AboutPage
