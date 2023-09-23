import React from "react"
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"

import { Layout } from "@/layouts/Layout"
import { News } from "@/components/News/News"
import NewsArchive from "@/components/News/NewsArchive"
import {
  GetAllNewsDatesQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  GetSeoQuery,
  gql,
} from "@/graphql/client"

interface INewsPageProps {
  SEO: GetSeoQuery
  newsData: GetNewsQuery
  headerData: GetHeaderQuery
  newsDates: GetAllNewsDatesQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const NewsPage: React.FC<INewsPageProps> = ({
  SEO,
  headerData,
  mainScreenData,
  newsData,
  newsDates,
  headerSchedule,
}) => {
  return (
    <Layout
      SEO={SEO}
      title="Всі новини"
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: "40px" }}>
          Всі новини
        </div>

        <div className="page-row">
          <div className="col-news-9-12">
            <News newsData={newsData} pageSize={6} />
          </div>
          <div className="col-news-3-12">
            <NewsArchive newsDates={newsDates} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const data = await gql.GetAllNovinasId()

//     if (!data.novinas.data.length) {
//       return {
//         paths: [],
//         fallback: false,
//       }
//     }

//     const paths = data.novinas.data.map((el) => ({
//       params: { news_id: el.id },
//     }))

//     return {
//       paths,
//       fallback: false,
//     }
//   } catch (err) {
//     console.log(err)
//     return {
//       paths: [],
//       fallback: false,
//     }
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const returnData = {
//       props: {
//         headerData: {},
//         mainScreenData: {},
//         fullNews: {},
//         newsDates: {},
//       },
//       redirect: { destination: "/404", permanent: true },
//     }

//     if (!params || !params.year || !params.month) {
//       return returnData
//     }

//     const SEO = await gql.GetSEO()
//     const headerData = await gql.GetHeader()
//     const newsDates = await gql.GetAllNewsDates()
//     const mainScreenData = await gql.GetMainScreen()
//     const headerSchedule = await gql.GetHeaderSchedule()

//     let maxDayInMonth = ""

//     if (params.month === "01") {
//       maxDayInMonth = "31"
//     } else if (params.month === "02") {
//       maxDayInMonth = "28"
//     } else if (params.month === "03") {
//       maxDayInMonth = "31"
//     } else if (params.month === "04") {
//       maxDayInMonth = "30"
//     } else if (params.month === "05") {
//       maxDayInMonth = "31"
//     } else if (params.month === "06") {
//       maxDayInMonth = "30"
//     } else if (params.month === "07") {
//       maxDayInMonth = "31"
//     } else if (params.month === "08") {
//       maxDayInMonth = "31"
//     } else if (params.month === "09") {
//       maxDayInMonth = "30"
//     } else if (params.month === "10") {
//       maxDayInMonth = "31"
//     } else if (params.month === "11") {
//       maxDayInMonth = "30"
//     } else if (params.month === "12") {
//       maxDayInMonth = "31"
//     }

//     const newsData = await gql.GetNewsByMonth({
//       startDate: `${params.year}-${params.month}-01`,
//       endDate: `${params.year}-${params.month}-${maxDayInMonth}`,
//       pageSize: 6,
//     })

//     return {
//       props: {
//         SEO,
//         newsData,
//         newsDates,
//         headerData,
//         headerSchedule,
//         mainScreenData,
//       },
//     }
//   } catch (error) {
//     console.log(error, "news page error")
//     return {
//       props: {
//         SEO: {},
//         headerData: {},
//         newsData: {},
//         newsDates: {},
//         mainScreenData: {},
//         headerSchedule: {},
//       },
//       redirect: { destination: "/404", permanent: true },
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const returnData = {
      props: {
        headerData: {},
        mainScreenData: {},
        fullNews: {},
        newsDates: {},
      },
      redirect: { destination: "/404", permanent: true },
    }

    if (!params || !params.year || !params.month) {
      return returnData
    }

    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const newsDates = await gql.GetAllNewsDates()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    let maxDayInMonth = ""

    if (params.month === "01") {
      maxDayInMonth = "31"
    } else if (params.month === "02") {
      maxDayInMonth = "28"
    } else if (params.month === "03") {
      maxDayInMonth = "31"
    } else if (params.month === "04") {
      maxDayInMonth = "30"
    } else if (params.month === "05") {
      maxDayInMonth = "31"
    } else if (params.month === "06") {
      maxDayInMonth = "30"
    } else if (params.month === "07") {
      maxDayInMonth = "31"
    } else if (params.month === "08") {
      maxDayInMonth = "31"
    } else if (params.month === "09") {
      maxDayInMonth = "30"
    } else if (params.month === "10") {
      maxDayInMonth = "31"
    } else if (params.month === "11") {
      maxDayInMonth = "30"
    } else if (params.month === "12") {
      maxDayInMonth = "31"
    }

    const newsData = await gql.GetNewsByMonth({
      startDate: `${params.year}-${params.month}-01`,
      endDate: `${params.year}-${params.month}-${maxDayInMonth}`,
      pageSize: 6,
    })

    return {
      props: {
        SEO,
        newsData,
        newsDates,
        headerData,
        headerSchedule,
        mainScreenData,
      },
    }
  } catch (error) {
    console.log(error, "news page error")
    return {
      props: {
        SEO: {},
        headerData: {},
        newsData: {},
        newsDates: {},
        mainScreenData: {},
        headerSchedule: {},
      },
      redirect: { destination: "/404", permanent: true },
    }
  }
}

export default NewsPage
