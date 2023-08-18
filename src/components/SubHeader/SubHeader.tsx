import React from 'react'
import Image from 'next/image'

import styles from './SubHeader.module.scss'
import logoIcon from '../../../public/assets/icons/logo_white.svg'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className={styles['sub-header']}>
      <div className={styles['sub-header__video']}>
        <video autoPlay muted loop playsInline>
          <source src="../assets/videos/main-screen-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className={styles['sub-header__inner']}>
          <Link className={styles['sub-header__logo-box']} href="/">
            <Image className={styles['sub-header__logo']} src={logoIcon} alt="cloud icon" width={140} />
          </Link>
          <h1 className={styles['sub-header__title']}>ЖИТОМИРСЬКИЙ БАЗОВИЙ ФАРМАЦЕВТИЧНИЙ ФАХОВИЙ КОЛЕДЖ</h1>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
