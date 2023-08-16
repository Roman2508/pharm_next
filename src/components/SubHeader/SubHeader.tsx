import React from 'react'
import Image from 'next/image'

import './sub-header.css'
import logoIcon from '../../../public/assets/icons/logo_white.svg'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="sub-header__video">
        <video autoPlay muted loop playsInline>
          <source src="../assets/videos/main-screen-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="sub-header__inner">
          <Link className="sub-header__logo-box" href="/">
            <Image className="sub-header__logo" src={logoIcon} alt="cloud icon" width={140} />
          </Link>
          <h1 className="sub-header__title">ЖИТОМИРСЬКИЙ БАЗОВИЙ ФАРМАЦЕВТИЧНИЙ ФАХОВИЙ КОЛЕДЖ</h1>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
