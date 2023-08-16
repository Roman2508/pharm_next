'use client'

import React from 'react'
import styles from './MainScreen.module.scss'

const MainScreen = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current?.play()
    }
  }, [])

  return (
    <div className={styles['main-screen']}>
      <div className={styles['main-screen__video']}>
        <video ref={videoRef} preload="none" autoPlay muted loop playsInline>
          <source src="./assets/videos/main-screen-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles['main-screen__content']}>
        <h1 className={styles['main-screen__title']}>ЖИТОМИРСЬКИЙ БАЗОВИЙ ФАРМАЦЕВТИЧНИЙ ФАХОВИЙ КОЛЕДЖ</h1>
        <img className={styles['main-screen__logo']} src="./assets/icons/logo_white.svg" alt="logo" />
      </div>
    </div>
  )
}

export default MainScreen
