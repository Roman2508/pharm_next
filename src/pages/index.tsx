import { HomePageLayout } from "@/layouts/HomePageLayout"
import About from "@/components/About/About"
import Announcement from "@/components/Announcement/Announcement"
import Stats from "@/components/Stats/Stats"
import { News } from "@/components/News/News"
import { Events } from "@/components/Events/Events"
import { Gallery } from "@/components/Gallery/Gallery"
import { Videos } from "@/components/Videos/Videos"
import { Contacts } from "@/components/Contacts/Contacts"
import { Partners } from "@/components/Partners/Partners"
import { GetStaticProps, NextPage } from "next"
import {
  GetAdvertisementsQuery,
  GetAllEventsQuery,
  GetAllVideosQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  GetPartnersQuery,
  gql,
} from "@/graphql/client"

interface IHomeProps {
  newsData: GetNewsQuery
  videos: GetAllVideosQuery
  events: GetAllEventsQuery
  partners: GetPartnersQuery
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  advertisments: GetAdvertisementsQuery
}

const Home: NextPage<IHomeProps> = ({
  headerData,
  mainScreenData,
  newsData,
  advertisments,
  events,
  videos,
  partners,
}) => {
  return (
    <HomePageLayout
      title="Головна сторінка | ЖБФК"
      headerData={headerData}
      mainScreenData={mainScreenData}
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const newsData = await gql.GetNews()
    const advertisments = await gql.GetAdvertisements()
    const events = await gql.GetAllEvents()
    const videos = await gql.GetAllVideos()
    const partners = await gql.GetPartners()

    return {
      props: {
        videos,
        events,
        partners,
        newsData,
        headerData,
        advertisments,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, "home page error")
    return {
      props: {
        newsData: {},
        headerData: {},
        advertisments: {},
        mainScreenData: {},
        events: {},
        videos: {},
      },
    }
  }
}

export default Home
