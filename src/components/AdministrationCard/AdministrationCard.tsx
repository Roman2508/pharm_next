import React from 'react'

import './administration-card.css'
import Link from 'next/link'

interface IAdministrationCardProps {
  photo: string
  position: string
  name: string
  phone: string
  mail: string
}

const AdministrationCard: React.FC<IAdministrationCardProps> = ({ photo, position, name, phone, mail }) => {
  return (
    <div className="administration__item">
      <div className="administration__item-top">
        <img src={photo} alt="administration" />
        <p className="administration__item-position">{position}</p>
      </div>
      <Link className="administration__item-name" href="#">
        {name}
      </Link>
      <a className="administration__item-tel" href="tel:0412242545">
        {phone}
      </a>
      <a className="administration__item-mail" href="mailto:boychuck.iryna@pharm.zt.ua">
        {mail}
      </a>
    </div>
  )
}

export default AdministrationCard
