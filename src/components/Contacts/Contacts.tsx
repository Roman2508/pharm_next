import React from 'react'
import cn from 'classnames'

import styles from './Contacts.module.scss'
import ContactsItem from './ContactsItem'

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

export const Contacts = () => {
  return (
    <div className={styles['contacts']}>
      <div className={cn(styles['contacts__container'], 'container')}>
        <div className={styles['contacts__wrapper']}>
          <h2 className={cn(styles['contacts__title'], 'section-title')}>КОНТАКТИ</h2>

          <div className={styles['contacts__row']}>
            <div className={styles['contacts__items']}>
              {mainPageContacts.map((el) => (
                <ContactsItem key={el.id} name={el.name} position={el.position} phone={el.phone} email={el.email} />
              ))}
            </div>

            <div className={styles['contacts__map']}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6291.689037301852!2d28.64056024719695!3d50.244635952177546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c648aed44e5cf%3A0x8c8080cc023799b!2z0JbQuNGC0L7QvNC40YDRgdGM0LrQuNC5INCx0LDQt9C-0LLQuNC5INGE0LDRgNC80LDRhtC10LLRgtC40YfQvdC40Lkg0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCW0LjRgtC-0LzQuNGA0YHRjNC60L7RlyDQvtCx0LvQsNGB0L3QvtGXINGA0LDQtNC4!5e0!3m2!1sru!2sua!4v1688215841222!5m2!1sru!2sua"
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
