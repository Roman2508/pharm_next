import { HomePageLayout } from '@/layouts/HomePageLayout'
import About from '@/components/About/About'
import Announcement from '@/components/Announcement/Announcement'
import Stats from '@/components/Stats/Stats'
import { News } from '@/components/News/News'
import { Events } from '@/components/Events/Events'

export default function Home() {
  return (
    <HomePageLayout title="ЖБФФК | Головна сторінка">
      <Announcement />
      <About />
      <Stats />
      <News />
      <Events />
    </HomePageLayout>
  )
}
