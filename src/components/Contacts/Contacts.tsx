import React from 'react'
import cn from 'classnames'

import styles from './Contacts.module.scss'
import ContactsItem from './ContactsItem'
import { HomePageContactEntity } from '@/graphql/__generated__'

const mainPageContacts = [
  {
    id: 1,
    name: 'Бойчук Ірина Дмитрівна',
    position: 'Директор',
    email: 'boychuck.iryna@pharm.zt.ua',
    phone: '(0412) 24-25-45',
  },
  {
    id: 2,
    name: 'Мороко Марія Іванівна',
    position: 'Головний бухгалтер',
    email: 'moroko.maria@pharm.zt.ua',
    phone: '(0412) 24-25-46',
  },
  {
    id: 3,
    name: 'Болух Віра Андріївна',
    position: 'Заступник директора з навчальної роботи',
    email: 'bolukh.vira@pharm.zt.ua',
    phone: '(0412) 24-45-89',
  },
  {
    id: 4,
    name: 'Ренькас Людмила Едуардівна',
    position: 'Відповідальний секретар приймальної комісії',
    email: 'renkas.liudmyla@pharm.zt.ua',
    phone: '(098)076-02-23',
  },
]

interface IContactsProps {
  data: HomePageContactEntity
}

export const Contacts: React.FC<IContactsProps> = ({ data }) => {
  return (
    <div className={styles['contacts']}>
      <div className={cn(styles['contacts__container'], 'container')}>
        <div className={styles['contacts__wrapper']}>
          <h2 className={cn(styles['contacts__title'], 'section-title')}>{data.attributes.title}</h2>

          <div className={styles['contacts__row']}>
            <div className={styles['contacts__items']}>
              {data.attributes.Contacts.map((el) => (
                <ContactsItem key={el.id} name={el.name} position={el.position} phone={el.phone} email={el.email} />
              ))}
            </div>

            <div className={styles['contacts__map']}>
              <iframe
                src={data.attributes.frame_url}
                width="700"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
