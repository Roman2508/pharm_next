import React from 'react'
import cn from 'classnames'
import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import { Layout } from '@/layouts/Layout'
import styles from './PublicInfo.module.scss'
import { GetHeaderQuery, gql } from '@/graphql/client'
import { Accordion } from '@/components/ui/Accordion/Accordion'
import publicInfoImage from '../../../public/assets/images/public-info/public_inf.jpg'

interface IPublicInfoPageProps {
  headerData: GetHeaderQuery
}

const PublicInfo: NextPage<IPublicInfoPageProps> = ({ headerData }) => {
  return (
    <Layout title="Публічна інформація" headerData={headerData}>
      <div className={styles['public-info']}>
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '50px' }}>
            Публічна інформація
          </h1>

          <div className={'main-photo-page'}>
            <Image src={publicInfoImage} alt="public info photo" />
          </div>

          <div className={styles['public-info__content']}>
            <h3 className={cn(styles['public-info__title'], 'title-md')}>Основні, фінансові та розпорядчі документи</h3>

            <Accordion title="Основні, фінансові та розпорядчі документи">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    СТАТУТ ЖБФФК
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    КОЛЕКТИВНИЙ ДОГОВІР ЖБФФК 2018-2023
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    КОЛЕКТИВНИЙ ДОГОВІР ЖБФФК 2023-2028
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    ВИПИСКА З ЄДИНОГО ДЕРЖАВНОГО РЕЄСТРУ ЮРИДИЧНИХ ОСІБ
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    ЛІЦЕНЗІЯ НА ПРОВАДЖЕННЯ ОСВІТНЬОЇ ДІЯЛЬНОСТІ:
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Відомості щодо права провадження освітньої діяльності у сфері вищої освіти;
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Відомості щодо права провадження освітньої діяльності у сфері фахової передвищої освіти
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Відомості щодо права провадження освітньої діяльності у сфері післядипломної освіти
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    СЕРТИФІКАТИ ПРО АКРЕДИТАЦІЮ ОСВІТНІХ ПРОГРАМ
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="Результати діяльності ЖБФФК">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт про результати діяльності ЖБФФК за 2020-2021 н.р.
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт про результати діяльності ЖБФФК за 2021-2022 н.р.
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт про результати діяльності ЖБФФК за 2022-2023 н.р.
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Стратегія розвитку ЖБФФК на 2023-2027 роки
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Ліцензований обсяг та фактична кількість осіб, які навчають у ЖБФФК
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Доступність закладу освіти для навчання осіб з особливими освітніми потребами
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Етичний кодекс ЖБФФК
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Етичний кодекс ЖБФФК
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="Фінансова інформація">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Фінансовий звіт
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт про надходження та використання коштів
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Кошторис
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Кошторис
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Річний план закупівель (інформація про проведення тендерних процедур)
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    План заходів коледжу, спрямованих на запобігання корупційним та пов’язаним з корупцією
                    правопорушенням
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Інформація про перелік товарів, робіт і послуг, отриманих як благодійна допомога
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Розмір плати за навчання
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Орієнтовна вартість навчання на курсах підвищення кваліфікації
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Нові реквізити для оплати за навчання
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Нові реквізити для оплати за навчання
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="Звіти директора">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт директора 2018
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт директора 2019
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт директора 2020
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт директора 2021
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Звіт директора 2022
                  </a>
                </li>
              </ul>
            </Accordion>

            <h3 className={cn(styles['public-info__title'], 'title-md')}>Положення по коледжу</h3>

            <Accordion title="Положення про колегіальні органи">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про збори трудового колективу
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про педагогічну раду
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про методичну раду
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про раду кураторів
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про адміністративну раду
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про студентське самоврядування
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="Організація освітнього процесу">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про організацію освітнього процесу
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Про внутрішню систему забезпечення якості освіти
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про оцінювання навчальних досягнень студентів
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про призначення і виплату стипендій
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про порядок реалізації студентами права на вільний вибір дисциплін
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про зарахування результатів навчання здобувачам освіти, отриманих у неформальній та/або
                    інформальній освіті
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про дистанційне навчання
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про заочну форму навчання
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про самостійну роботу студентів
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про організацію навчання за індивідуальним графіком
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про академічну доброчесність
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про перевід студентів з контрактної форми навчання на бюджетну форму навчання за
                    регіональним замовленням
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про силабус освітнього компонента (навчальної дисципліни)
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про порядок відрахування, переривання навчання, поновлення та переведення здобувачів
                    освіти, надання їм академічної відпустки та ліквідації академічної різниці
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про порядок відпрацювання аудиторних занять
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про журнал обліку роботи академічної групи та викладачів
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про порядок розроблення та реалізації ОПП
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про проведення практики
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про навчальну лабораторію (кабінет)
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про атестацію навчальних лабораторій (кабінетів)
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Тимчасовий порядок організації освітнього процесу ЖБФФК в період карантину
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Порядок організації освітнього процесу у ЖБФФК в період воєнного стану
                  </a>
                </li>
              </ul>
            </Accordion>

            <Accordion title="Положення структурних підрозділів">
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про відділення
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про відділ кадрів
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про ЦК
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Положення про бібліотеку
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Про службу охорони праці
                  </a>
                </li>
                <li className={'bulleted-list-item'}>
                  <a className={'underlined-link'} href="#">
                    Про організацію роботи з охорони праці та безпеки життєдіяльності учасників освітнього процесу
                  </a>
                </li>
              </ul>
            </Accordion>

            <h3 className={cn(styles['public-info__title'], 'title-md')}>Доступ до публічної інформації</h3>

            <div className={cn(styles['public-info__text'], 'page-content')}>
              <p className={styles['block-text']}>
                <b>Житомирський базовий фармацевтичний фаховий коледж Житомирської обласної ради</b> надає публічну
                інформацію керуючись Законом України «Про доступ до публічної інформації» та Указом Президента України
                «Питання забезпечення органами виконавчої влади доступу до публічної інформації».
              </p>
              <p className={styles['block-text']}>
                <b>Надання публічної інформації ЖБФФК здійснює у відповідь на інформаційний запит.</b>
              </p>
              <p className={styles['block-text']}>
                Згідно з законом, публічною є відображена та задокументована будь-якими засобами та на будь-яких носіях
                інформація, що була отримана або створена в процесі виконання суб’єктами владних повноважень своїх
                обов’язків, передбачених чинним законодавством, або яка знаходиться у володінні суб’єктів владних
                повноважень.
              </p>
              <p className={styles['block-text']}>
                <b>Запит від особи на отримання інформації подається у довільній формі.</b>
              </p>
              <p className={styles['block-text']}>При цьому обов’язково необхідно вказати:</p>
              <p className={styles['block-text']}>
                1. Ім′я та прізвище запитувача, поштову адресу або адресу електронної пошти, а також номер телефону;
                <br />
                2. Опис інформації, яку запитувач хотів би отримати (вид, назву, реквізити чи зміст документа, щодо
                якого зроблено запит); <br />
                3. Підпис і дату.
              </p>
              <p className={styles['block-text']}>
                Для спрощення процедури оформлення письмових запитів на інформацію особа може подавати запит шляхом
                заповнення відповідних форм запитів на інформацію.
              </p>
              <p className={styles['block-text']}>
                <b>Форми для подання інформаційного запиту у письмовому виді:</b>
              </p>
              <ul className={'bulleted-list'}>
                <li className={'bulleted-list-item'}>Від фізичної особи (зразок);</li>
                <li className={'bulleted-list-item'}>Від юридичної особи (зразок);</li>
                <li className={'bulleted-list-item'}>Від об’єднань громадян (зразок);</li>
                <li className={'bulleted-list-item'}>
                  Форма для подання інформаційного запиту у електронному виді (зразок).
                </li>
              </ul>

              <p className={styles['block-text']}>
                <b>Поштова адреса ЖБФФК для подання інформаційного запиту:</b>
              </p>
              <p className={styles['block-text']}>
                вул. Чуднівська, 99 м. Житомир 10005 Україна, відповідальній особі з питань запитів на інформацію (на
                конверті вказувати Публічна інформація);
              </p>
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

    return {
      props: {
        headerData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return { props: { headerData: {} } }
  }
}

export default PublicInfo
