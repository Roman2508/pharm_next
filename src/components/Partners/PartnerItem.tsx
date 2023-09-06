import React from 'react'

import styles from './Partners.module.scss'
import { PartnerEntity } from '@/graphql/__generated__'

interface IPartnerItemProps {
  partner: PartnerEntity
}

const PartnerItem: React.FC<IPartnerItemProps> = ({ partner }) => {
  return (
    <a href={partner.attributes.link} className={styles['item']} key={partner.id}>
      <img
        className={styles['partners__item-img']}
        src={`${process.env.API_URL}${partner.attributes.logo.data.attributes.url}`}
        alt={partner.attributes.logo.data.attributes.name}
      />
    </a>
  )
}

export default PartnerItem
