import React from 'react'
import styles from '../ProZhbphc.module.scss'
import { Layout } from '@/layouts/Layout'
import { GetHeaderQuery, GetMainScreenQuery } from '@/graphql/__generated__'
import { GetStaticProps, NextPage } from 'next'
import { gql } from '@/graphql/client'
import ContactsItem from '@/components/Contacts/ContactsItem'
import Input from '@/components/ui/Input/Input'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import Button from '@/components/ui/Button/Button'
import Select from '@/components/ui/Select/Select'
import SelectItem from '@/components/ui/Select/SelectItem'

interface IContactsPageProps {
  headerData: GetHeaderQuery
  mainScreenData: GetMainScreenQuery
}

const contactsItems = [
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

const topicList = [
  { id: 1, text: '- Виберіть -' },
  { id: 2, text: 'Загальне питання' },
  { id: 3, text: 'Питання до адміністрації' },
  { id: 4, text: 'Питання про вступ' },
]

const Contacts: NextPage<IContactsPageProps> = ({ headerData, mainScreenData }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    body: '',
    topic: topicList[0].text,
  })

  const handleChangeTopic = (topic: string) => {
    setFormData((prev) => ({ ...prev, topic }))
  }
  const handleChangeName = (name: string) => {
    setFormData((prev) => ({ ...prev, name }))
  }
  const handleChangeEmail = (email: string) => {
    setFormData((prev) => ({ ...prev, email }))
  }
  const handleChangeBody = (body: string) => {
    setFormData((prev) => ({ ...prev, body }))
  }

  const handleSubmit = async (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault()

    // let isValidForm = handleValidation()

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: formData.email,
        fullname: formData.name,
        subject: formData.topic,
        message: formData.body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      console.log(error)
      return
    }
  }

  return (
    <Layout headerData={headerData} mainScreenData={mainScreenData} title="Контакти">
      <div className="contacts">
        <div className="container">
          <h1 className="section-title">Контакти</h1>

          <iframe
            allowFullScreen
            frameBorder="0"
            height="250"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.243123431151!2d28.64189402690805!3d50.245541009318345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c648aed44e5cf%3A0x8c8080cc023799b!2z0JbQuNGC0L7QvNC40YDRgdC60LjQuSDQkdCw0LfQvtCy0YvQuSDQpNCw0YDQvNCw0YbQtdCy0YLQuNGH0LXRgdC60LjQuSDQmtC-0LvQu9C10LTQtiDQuNC8LiDQky7QoS7Qn9GA0L7RgtCw0YHQtdCy0LjRh9Cw!5e0!3m2!1sru!2sua!4v1545820629782"
            style={{ border: 0, margin: '40px 0' }}
            width="100%"
          ></iframe>

          <div className="page-row">
            <div className="col-8-12">
              <div className={styles['contacts__items']}>
                {contactsItems.map((el, index) => (
                  <ContactsItem key={index} name={el.name} email={el.email} phone={el.phone} position={el.position} />
                ))}
              </div>
            </div>
            <div className="col-4-12">
              <h3 className="title-md">Задати питання</h3>

              <form className={styles['form']} onSubmit={handleSubmit}>
                <Input setValue={handleChangeName} width="100%" label="Ваше ім`я" value={formData.name} />
                <Input
                  setValue={handleChangeEmail}
                  width="100%"
                  inputType="email"
                  label="Ваш E-mail"
                  value={formData.email}
                />

                <Select activeItem={formData.topic}>
                  {topicList.map((el) => (
                    <SelectItem value={el.text} key={el.id} onClick={() => handleChangeTopic(el.text)} />
                  ))}
                </Select>

                <Textarea setValue={handleChangeBody} width="100%" label="Текст повідомлення" value={formData.body} />
                <Button>Відправити повідомлення</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const headerData = await gql.GetHeader()
    const mainScreenData = await gql.GetMainScreen()

    return {
      props: {
        headerData,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default Contacts
