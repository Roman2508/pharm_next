import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { HomePageLayout } from '@/layouts/HomePageLayout'
import About from '@/components/About/About'
import Announcement from '@/components/Announcement/Announcement'

export default function Home() {
  return (
    <HomePageLayout title="ЖБФФК | Головна сторінка">
      <Announcement />
      <About />
    </HomePageLayout>
  )
}
