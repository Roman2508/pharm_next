import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import useSlider from '@/hooks/useSlider'
import styles from './Videos.module.scss'
import stylesSlider from '../Slider/Slider.module.scss'
import { SliderArrow } from '../Slider/SliderArrows'
import { GetAllVideosQuery } from '@/graphql/__generated__'
import { getVideoUrl } from '@/utils/getVideoUrl'

const videosItems = [
  {
    id: 1,
    title: 'Фарм Коледж - День Вчителя',
    photo: ['./assets/images/video-posters/1.png', '../assets/images/video-posters/1.png'],
  },
  {
    id: 2,
    title: 'ЖБФК запрошує на навчання',
    photo: ['./assets/images/video-posters/2.png', '../assets/images/video-posters/2.png'],
  },
  {
    id: 3,
    title: 'Наш коледж',
    photo: ['./assets/images/video-posters/3.jpg', '../assets/images/video-posters/3.jpg'],
  },
]

interface IVideoProps {
  test?: boolean
  videos: GetAllVideosQuery
}

export const Videos: React.FC<IVideoProps> = ({ test, videos }) => {
  const { activeSlide, loaded, sliderRef, instanceRef } = useSlider()

  const [activeVideoUrl, setActiveVideoUrl] = React.useState('')
  const [openFullScreenVideo, setOpenFullScreenVideo] = React.useState(false)

  React.useEffect(() => {
    setActiveVideoUrl(videos.videos.data[0].attributes.video_url)
  }, [])

  const videoUrl = getVideoUrl(activeVideoUrl)

  const handleOpenVideo = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl)
    setOpenFullScreenVideo(true)
  }

  return (
    <>
      <div className={cn(styles['full-screen'], { [styles.layoutClose]: !openFullScreenVideo })}>
        <div className={styles['full-screen__inner']}>
          <div
            className={cn(styles['full-screen__content'], {
              [styles.openModal]: openFullScreenVideo,
              [styles.closeModal]: !openFullScreenVideo,
            })}
          >
            <iframe
              id="ytplayer"
              width="60%"
              height="70%"
              allow="fullscreen"
              src={`${videoUrl}?controls=2`}
              allowFullScreen
              frameBorder="0"
            />

            <svg
              className={styles.closeIcon}
              onClick={() => setOpenFullScreenVideo(false)}
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#ffffff"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles['videos']} style={!test ? { marginBottom: '140px' } : {}}>
        <h2 className={cn(styles['videos__title'], 'section-title')}>Відео</h2>

        <div ref={sliderRef} className={cn(stylesSlider['slider__wrapper'], 'keen-slider')}>
          {videos.videos.data.map((video, index) => (
            <div key={video.id} className={cn(styles['slide-wrapper'], 'keen-slider__slide')}>
              <div
                className={cn(styles['videos__slider-inner'], {
                  [styles['active--slide']]: index === activeSlide,
                })}
                style={{
                  backgroundImage: `url(${process.env.API_URL}${video.attributes.video_poster.data.attributes.url})`,
                }}
                // style={{ backgroundImage: `url(${!test ? video.photo[0] : video.photo[1]})` }}
              >
                <h3 className={styles['videos__slider-title']}>{video.attributes.title}</h3>
                <Image
                  className={styles['videos__slider-play']}
                  width={80}
                  height={80}
                  src={!test ? './assets/icons/video-play.svg' : '../assets/icons/video-play.svg'}
                  onClick={() => handleOpenVideo(video.attributes.video_url)}
                  alt="video-play"
                />
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <SliderArrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={activeSlide === 0}
            />

            <SliderArrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={activeSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
    </>
  )
}
