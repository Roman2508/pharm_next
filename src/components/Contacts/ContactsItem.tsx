import React from 'react'
import './contacts.css'

interface IContactsItemProps {
  position: string
  name: string
  phone: string
  email: string
}

const ContactsItem: React.FC<IContactsItemProps> = ({ position, name, phone, email }) => {
  const phoneWithoutSymbols = phone.replace('(', '').replace(')', '').replace('-', '').replace('_', '')

  return (
    <div className="contact__item">
      <h6 className="contact__item-position">{position}</h6>
      <h5 className="contact__item-name">{name}</h5>
      <a className="contact__item-tel" href={`tel:${phoneWithoutSymbols}`}>
        {phone}
      </a>
      <a className="contact__item-email" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  )
}

export default ContactsItem
