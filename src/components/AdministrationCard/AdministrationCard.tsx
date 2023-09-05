import React from 'react'

import styles from './AdministrationCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface IAdministrationCardProps {
  photo: string
  position: string
  name: string
  phone: string
  mail: string
}

const AdministrationCard: React.FC<IAdministrationCardProps> = ({ photo, position, name, phone, mail }) => {
  return (
    <div className={styles['administration__item']}>
      <div className={styles['administration__item-top']}>
        <Image src={`${process.env.API_URL}${photo}`} width={300} height={400} alt="administration" />
        <p className={styles['administration__item-position']}>{position}</p>
      </div>
      <Link className={styles['administration__item-name']} href="#">
        {name}
      </Link>
      <a className={styles['administration__item-tel']} href="tel:0412242545">
        {phone}
      </a>
      <a className={styles['administration__item-mail']} href="mailto:boychuck.iryna@pharm.zt.ua">
        {mail}
      </a>
    </div>
  )
}

export default AdministrationCard
