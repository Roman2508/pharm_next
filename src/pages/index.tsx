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
import { GetStaticProps, NextPage } from 'next'
import {
  GetAdvertisementsQuery,
  GetAllEventsQuery,
  GetAllVideosQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  GetPartnersQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'

interface IHomeProps {
  SEO: GetSeoQuery
  newsData: GetNewsQuery
  videos: GetAllVideosQuery
  events: GetAllEventsQuery
  partners: GetPartnersQuery
  headerData: GetHeaderQuery
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
  advertisments,
  mainScreenData,
  headerSchedule,
}) => {
  return (
    <HomePageLayout
      title="Головна сторінка | ЖБФК"
      headerData={headerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
      SEO={SEO}
    >
      <Announcement advertisments={advertisments} />
      <About />
      <Stats />
      <div className="container">
        <News newsData={newsData} showTitle addMarginBottom />
      </div>
      <Events events={events} />
      <Gallery />
      <Videos videos={videos} />
      <Contacts />
      <Partners partners={partners} />
    </HomePageLayout>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const headerSchedule = await gql.GetHeaderSchedule()

    const mainScreenData = await gql.GetMainScreen()
    const SEO = await gql.GetSEO()
    const newsData = await gql.GetNews()
    const advertisments = await gql.GetAdvertisements()
    const events = await gql.GetAllEvents()
    const videos = await gql.GetAllVideos()
    const partners = await gql.GetPartners()

    return {
      props: {
        SEO,
        videos,
        events,
        partners,
        newsData,
        headerData,
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
        advertisments: {},
        mainScreenData: {},
        headerSchedule: {},
      },
    }
  }
}

export default Home
