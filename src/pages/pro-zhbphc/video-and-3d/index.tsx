import React from "react"
import { GetStaticProps, NextPage } from "next"

import { gql } from "@/graphql/client"
import { Layout } from "@/layouts/Layout"
import styles from "./VideoAnd3d.module.scss"
import { Videos } from "@/components/Videos/Videos"
import {
  GetAllVideosQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetPanoramsQuery,
} from "@/graphql/__generated__"
import FullScreenFrame from "@/components/FullScreenFrame/FullScreenFrame"
import Image from "next/image"

interface IMTBazaPageProps {
  videos: GetAllVideosQuery
  headerData: GetHeaderQuery
  panoramas: GetPanoramsQuery
  mainScreenData: GetMainScreenQuery
}

const VideoAnd3d: NextPage<IMTBazaPageProps> = ({
  headerData,
  mainScreenData,
  videos,
  panoramas,
}) => {
  const [isOpenFullScreen, setOpenFullScreen] = React.useState(false)
  const [frameUrl, setFrameUrl] = React.useState("")

  const handleOpenFullScreenFrame = (url: string) => {
    console.log(url)
    setFrameUrl(url)
    setOpenFullScreen(true)
  }
  console.log(panoramas)
  return (
    <Layout
      headerData={headerData}
      mainScreenData={mainScreenData}
      title="Відео і 3D-панорами"
    >
      <FullScreenFrame
        isOpenFullScreen={isOpenFullScreen}
        setOpenFullScreen={setOpenFullScreen}
      >
        <iframe
          frameBorder="0"
          width="90%"
          height="90%"
          src={frameUrl}
          allowFullScreen
        />
      </FullScreenFrame>

      <div className={styles["subdivisions"]}>
        <h1 className="section-title" style={{ marginBottom: "50px" }}>
          Відео і 3D-панорами
        </h1>

        <div className="container">
          <div className={styles["card__wrapper"]}>
            {panoramas.panoramas.data.map((el) => (
              <div
                className={styles["card__item"]}
                key={el.id}
                onClick={() => handleOpenFullScreenFrame(el.attributes.link)}
              >
                <div className="scale-photo-hover scale-icon">
                  <Image
                    className={styles["photo-element"]}
                    src={`${process.env.API_URL}${el.attributes.poster.data.attributes.url}`}
                    alt={el.attributes.poster.data.attributes.name}
                    width={el.attributes.poster.data.attributes.width}
                    height={el.attributes.poster.data.attributes.height}
                  />
                </div>
                <div className={styles["card__text-box"]}>
                  <p className={styles["card__text"]}>{el.attributes.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Videos test videos={videos} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()
    const videos = await gql.GetAllVideos()
    const panoramas = await gql.GetPanorams()

    return {
      props: {
        videos,
        panoramas,
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, "about page error")
    return { props: { headerData: {} } }
  }
}

export default VideoAnd3d
