import React from 'react'
import Image from 'next/image'

import styles from './SubHeader.module.scss'
import logoIcon from '../../../public/assets/icons/logo_white.svg'
import Link from 'next/link'
import { GetMainScreenQuery } from '@/graphql/__generated__'

interface ISubHeaderProps {
  mainScreenData: GetMainScreenQuery
}

const SubHeader: React.FC<ISubHeaderProps> = ({ mainScreenData }) => {
  return (
    <div className={styles['sub-header']}>
      <div className={styles['sub-header__video']}>
        <video autoPlay muted loop playsInline>
          <source
            src={`${process.env.API_URL}${mainScreenData.header.data.attributes.Header.background.data.attributes.url}`}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container">
        <div className={styles['sub-header__inner']}>
          <Link className={styles['sub-header__logo-box']} href="/">
            <Image className={styles['sub-header__logo']} src={logoIcon} alt="cloud icon" width={140} />
          </Link>
          <h1 className={styles['sub-header__title']}>{mainScreenData.header.data.attributes.Header.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
