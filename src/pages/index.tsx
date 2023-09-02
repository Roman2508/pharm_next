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
import { GetHeaderQuery, GetMainScreenQuery, GetNewsQuery, gql } from '@/graphql/client'

interface IHomeProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
  newsData: GetNewsQuery
}

const Home: NextPage<IHomeProps> = ({ headerData, mainScreenData, newsData }) => {
  return (
    <HomePageLayout title="Головна сторінка | ЖБФК" headerData={headerData} mainScreenData={mainScreenData}>
      <Announcement />
      <About />
      <Stats />
      <div className="container">
        <News newsData={newsData} showTitle />
      </div>
      <Events />
      <Gallery />
      <Videos />
      <Contacts />
      <Partners />
    </HomePageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const newsData = await gql.GetNews()

    return {
      props: {
        headerData,
        mainScreenData,
        newsData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'home page error')
    return { props: { headerData: {} } }
  }
}

export default Home
