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
import { GetHeaderQuery, GetMainScreenQuery, gql } from '@/graphql/client'

interface IHomeProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const Home: NextPage<IHomeProps> = ({ headerData, mainScreenData }) => {
  return (
    <HomePageLayout title="ЖБФФК | Головна сторінка" headerData={headerData} mainScreenData={mainScreenData}>
      <Announcement />
      <About />
      <Stats />
      <News />
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

    return {
      props: {
        headerData,
        mainScreenData,
      },
    }
  } catch (error) {
    console.log(error, 'home page error')
    return { props: { headerData: {} } }
  }
}

export default Home
