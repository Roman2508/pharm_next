import { HomePageLayout } from '@/layouts/HomePageLayout'
import About from '@/components/About/About'
import Announcement from '@/components/Announcement/Announcement'
import Stats from '@/components/Stats/Stats'
import { News } from '@/components/News/News'
import { Events } from '@/components/Events/Events'
import { Gallery } from '@/components/Gallery/Gallery'
import { Videos } from '@/components/Videos/Videos'
import { Contacts } from '@/components/Contacts/Contacts'
import { Partners } from '@/components/Partners/Partners'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import {
  GetAdvertisementsQuery,
  GetAllEventsQuery,
  GetAllVideosQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetHomePageDataQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  GetPartnersQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

interface IHomeProps {
  SEO: GetSeoQuery
  newsData: GetNewsQuery
  videos: GetAllVideosQuery
  events: GetAllEventsQuery
  footerData: GetFooterQuery
  partners: GetPartnersQuery
  headerData: GetHeaderQuery
  // homePageData: GetHomePageDataQuery
  mainScreenData: GetMainScreenQuery
  advertisments: GetAdvertisementsQuery
  headerSchedule: GetHeaderScheduleQuery
}

const Home: NextPage<IHomeProps> = ({
  SEO,
  events,
  videos,
  newsData,
  partners,
  headerData,
  footerData,
  // homePageData,
  advertisments,
  mainScreenData,
  headerSchedule,
}) => {
  // if (
  //   !SEO ||
  //   !events ||
  //   !videos ||
  //   !newsData ||
  //   !partners ||
  //   !footerData ||
  //   !headerData ||
  //   !homePageData ||
  //   !advertisments ||
  //   !mainScreenData ||
  //   !headerSchedule
  // ) {
  //   return <LoadingSpinner />
  // }

  return (
    <HomePageLayout
      title="Головна сторінка | ЖБФК"
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
      footerData={footerData}
      SEO={SEO}
    >
      <Announcement advertisments={advertisments} />
      {/* @ts-ignore */}
      {/* <About data={homePageData.homePageAbout.data} /> */}
      {/* @ts-ignore */}
      {/* <Stats data={homePageData.homePageStat.data} /> */}
      <div className="container">
        <News newsData={newsData} showTitle addMarginBottom />
      </div>
      <Events events={events} />
      {/* @ts-ignore */}
      {/* <Gallery data={homePageData.homePageGallery.data} /> */}
      <Videos videos={videos} />
      {/* @ts-ignore */}
      {/* <Contacts data={homePageData.homePageContact.data} /> */}
      <Partners partners={partners} />
    </HomePageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const newsData = await gql.GetNews()
    const events = await gql.GetAllEvents()
    const videos = await gql.GetAllVideos()
    const partners = await gql.GetPartners()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const mainScreenData = await gql.GetMainScreen()
    // const homePageData = await gql.GetHomePageData()
    const advertisments = await gql.GetAdvertisements()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        videos,
        events,
        partners,
        newsData,
        footerData,
        headerData,
        // homePageData,
        advertisments,
        mainScreenData,
        headerSchedule,
      },
    }
  } catch (error) {
    console.log(error, 'home page error')
    return {
      props: {
        SEO: {},
        events: {},
        videos: {},
        newsData: {},
        headerData: {},
        footerData: {},
        // homePageData: {},
        advertisments: {},
        mainScreenData: {},
        headerSchedule: {},
      },
    }
  }
}

export default Home
