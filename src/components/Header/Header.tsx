import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
// import { useQuery } from '@apollo/client'

import styles from './Header.module.scss'
import { GetServerSideProps, GetStaticProps } from 'next'
// import { GET_HEADER } from 'gql/GetHeader'
import cloudIcon from '../../../public/assets/icons/cloud.png'
import educationIcon from '../../../public/assets/icons/education.png'
import youtubeIcon from '../../../public/assets/icons/youtube.png'
import facebookIcon from '../../../public/assets/icons/facebook.png'
import instagramIcon from '../../../public/assets/icons/instagram.png'
import emailIcon from '../../../public/assets/icons/email.png'
import telegramIcon from '../../../public/assets/icons/telegram.png'
import closeIcon from '../../../public/assets/icons/close.svg'
import burgerIcon from '../../../public/assets/icons/burger.svg'
import logoIcon from '../../../public/assets/icons/logo.png'

// GET header data
// http://localhost:1337/api/header?populate%5B0%5D=Header&populate%5B1%5D=Header.navigation&populate%5B2%5D=Header.navigation.submenu&populate%5B3%5D=Header.navigation.submenu.submenu&populate%5B4%5D=Header.logo&populate%5B5%5D=Header.background&populate%5B6%5D=Header.videoPoster&populate%5B7%5D=Header.social&populate%5B8%5D=Header.social.icons&populate%5B9%5D=Header.social.icons.icon&populate%5B10%5D=Header.headerIcons&populate%5B11%5D=Header.headerIcons.icon

const headerNav = [
  {
    id: 1,
    name: 'Про ЖБФФК',
    link: '/pro-zhbphc',
    submenu: [
      {
        id: 1,
        name: 'Історія коледжу',
        link: '/pro-zhbphc/istoria-col',
        submenu: [],
      },
      { id: 2, name: 'Контакти', link: '/pro-zhbphc/', submenu: [] },
      {
        id: 3,
        name: 'Адміністрація',
        link: '/pro-zhbphc/administracia',
        submenu: [],
      },
      { id: 4, name: 'Викладацький склад', link: '/pro-zhbphc/', submenu: [] },
      { id: 5, name: 'Публічна інформація', link: '/pro-zhbphc/', submenu: [] },
      {
        id: 6,
        name: 'Матеріально-технічна база',
        link: '/pro-zhbphc/',
        submenu: [],
      },
      { id: 7, name: 'Гуртожиток', link: '/pro-zhbphc/', submenu: [] },
      { id: 8, name: 'Відео і 3D-панорама', link: '/pro-zhbphc/', submenu: [] },
      {
        id: 9,
        name: 'Відомі випускники коледжу',
        link: '/pro-zhbphc/',
        submenu: [],
      },
      {
        id: 10,
        name: 'Герб та гімн коледжу',
        link: '/pro-zhbphc/',
        submenu: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Структура ',
    link: '/',
    submenu: [
      {
        id: 1,
        name: 'Відділення',
        link: '/',
        submenu: [
          { id: 1, name: 'Фармацевтичне', link: '/', submenu: [] },
          {
            id: 2,
            name: 'Фармацевтично - лабораторне',
            link: '/',
            submenu: [],
          },
          { id: 3, name: 'Заочної форми навчання', link: '/', submenu: [] },
        ],
      },
      {
        id: 2,
        name: 'Підрозділи',
        link: '/',
        submenu: [
          { id: 1, name: 'Бухгалтерія', link: '/', submenu: [] },
          { id: 2, name: 'Бібліотека', link: '/', submenu: [] },
          { id: 3, name: 'Музей коледжу', link: '/', submenu: [] },
          { id: 4, name: 'Профспілкова організація', link: '/', submenu: [] },
          { id: 5, name: 'Психологічна служба', link: '/', submenu: [] },
        ],
      },
      {
        id: 3,
        name: 'Циклові комісії',
        link: '/',
        submenu: [
          { id: 1, name: 'ЦК Гуманітарних дисциплін', link: '/', submenu: [] },
          {
            id: 2,
            name: 'ЦК Загальноосвітніх дисциплін',
            link: '/',
            submenu: [],
          },
          {
            id: 3,
            name: 'ЦК Медико-біологічних дисциплін',
            link: '/',
            submenu: [],
          },
          {
            id: 4,
            name: 'ЦК Фармацевтичних дисциплін',
            link: '/',
            submenu: [],
          },
          { id: 5, name: 'ЦК Хімічних дисциплін', link: '/', submenu: [] },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Освітній процес',
    link: '/',
    submenu: [
      { id: 1, name: 'Освітньо-професійні програми', link: '/', submenu: [] },
      { id: 2, name: 'Графік навчального процесу', link: '/', submenu: [] },
      {
        id: 3,
        name: 'Ліцензування та акредитація',
        link: '/',
        submenu: [
          {
            id: 1,
            name: 'Висновки експертних комісій',
            link: '/',
            submenu: [],
          },
          {
            id: 1,
            name: 'Освітньо-професійні програми',
            link: '/',
            submenu: [],
          },
          {
            id: 1,
            name: 'Навчально-методичне забезпечення',
            link: '/',
            submenu: [],
          },
        ],
      },
      { id: 4, name: 'Моніторинг якості освіти', link: '/', submenu: [] },
      {
        id: 5,
        name: 'Науково-методична робота',
        link: '/',
        submenu: [
          { id: 1, name: 'Методична рада', link: '/', submenu: [] },
          {
            id: 2,
            name: 'Видавнича діяльність викладачів',
            link: '/',
            submenu: [],
          },
          { id: 3, name: 'Методичний кабінет', link: '/', submenu: [] },
          {
            id: 4,
            name: 'Атестація викладачів. Підвищення кваліфікації',
            link: '/',
            submenu: [],
          },
          {
            id: 5,
            name: 'Відкриті заняття. Нові технології',
            link: '/',
            submenu: [],
          },
          { id: 6, name: 'Наукові конференції. Статті', link: '/', submenu: [] },
        ],
      },
      { id: 6, name: 'Педагогічна робота', link: '/', submenu: [] },
      { id: 7, name: 'Виховна робота', link: '/', submenu: [] },
      { id: 8, name: 'Цивільний захист', link: '/', submenu: [] },
      { id: 9, name: 'Запобігання булінгу', link: '/', submenu: [] },
      { id: 10, name: 'Практична підготовка', link: '/', submenu: [] },
    ],
  },
  {
    id: 4,
    name: 'Студентам',
    link: '/',
    submenu: [
      { id: 1, name: 'Крок М', link: '/', submenu: [] },
      { id: 2, name: 'Прцевлаштування випускників', link: '/', submenu: [] },
      { id: 3, name: 'Швидка студентська допомога', link: '/', submenu: [] },
      { id: 4, name: 'Академічна доброчесність', link: '/', submenu: [] },
      {
        id: 5,
        name: 'Вибіркові дисципліни (силабуси)',
        link: '/',
        submenu: [],
      },
      {
        id: 6,
        name: 'Студентське наукове товариство ЖБФФК',
        link: '/',
        submenu: [],
      },
      { id: 7, name: 'Студентське самоврядування', link: '/', submenu: [] },
    ],
  },
  { id: 5, name: 'Вступникам', link: '/', submenu: [] },
  { id: 6, name: 'Курси підвищення кваліфікації', link: '/', submenu: [] },
  { id: 7, name: 'Новини', link: '/', submenu: [] },
  {
    id: 8,
    name: 'Розклад',
    link: '/',
    submenu: [
      {
        id: 1,
        name: 'Група',
        link: '/',
        submenu: [
          { id: 1, name: '101', link: '/', submenu: [] },
          { id: 2, name: '102', link: '/', submenu: [] },
          { id: 3, name: '103', link: '/', submenu: [] },
          { id: 4, name: '104', link: '/', submenu: [] },
          { id: 5, name: '113', link: '/', submenu: [] },
          { id: 6, name: '201', link: '/', submenu: [] },
          { id: 7, name: '202', link: '/', submenu: [] },
          { id: 8, name: '203', link: '/', submenu: [] },
          { id: 9, name: '204', link: '/', submenu: [] },
          { id: 10, name: '213', link: '/', submenu: [] },
          { id: 11, name: '101', link: '/', submenu: [] },
          { id: 12, name: '102', link: '/', submenu: [] },
          { id: 13, name: '103', link: '/', submenu: [] },
          { id: 14, name: '104', link: '/', submenu: [] },
          { id: 15, name: '113', link: '/', submenu: [] },
          { id: 16, name: '201', link: '/', submenu: [] },
          { id: 17, name: '202', link: '/', submenu: [] },
          { id: 18, name: '203', link: '/', submenu: [] },
          { id: 19, name: '204', link: '/', submenu: [] },
          { id: 20, name: '213', link: '/', submenu: [] },
        ],
      },
      {
        id: 2,
        name: 'Викладач',
        link: '/',
        submenu: [
          { id: 1, name: 'Апонюк І.Ю.', link: '/', submenu: [] },
          { id: 1, name: 'Бобкова І.А.', link: '/', submenu: [] },
          { id: 1, name: 'Бойчук І.Д.', link: '/', submenu: [] },
          { id: 1, name: 'Болух В.А.', link: '/', submenu: [] },
          { id: 1, name: 'Бояльська О.Г.', link: '/', submenu: [] },
          { id: 1, name: "Бур'янова В.В.", link: '/', submenu: [] },
        ],
      },
      { id: 3, name: 'Розклад екзаменів', link: '/', submenu: [] },
    ],
  },
]

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState(false)
  const [openSubmenuName, setOpenSubmenuName] = React.useState('')
  const [openLoverLevelMenuName, setOpenLoverLevelMenuName] = React.useState('')
  const [stickyClass, setStickyClass] = React.useState<'header--static' | 'header--sticky'>('header--static')

  const isSticky = () => {
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 82 ? 'header--sticky' : 'header--static'
    setStickyClass(stickyClass)
  }

  // const { data } = useQuery(GET_HEADER)

  React.useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const onCloseMobileMenu = () => {
    setIsOpenMobileMenu(false)
  }
  const onOpenMobileMenu = () => {
    setIsOpenMobileMenu(true)
  }

  return (
    <header className={styles['header']}>
      <div className={'container'}>
        <div className={styles['header__top']}>
          <div className={styles['header__left-col']}>
            <a className={styles['header__top-link']} href="#">
              <Image src={cloudIcon} alt="cloud icon" width={40} />
              <span className={styles['header__top-link-title']}>Вхід до хмари</span>
            </a>
            <a className={styles['header__top-link']} href="#">
              <Image src={educationIcon} alt="education icon" width={40} />
              <span className={styles['header__top-link-title']}>Дистанційне навчання</span>
            </a>
          </div>

          <a className={styles['header__top-link']} href="#">
            <span className={styles['header__eng-icon']}>ENG</span>
            <span className={styles['header__eng-title']}>Zhytomyr College of Pharmacy</span>
          </a>

          <div className={styles['social__wrapper']}>
            <p>Приєднуйтесь:</p>
            <ul className={styles['social__list']}>
              <li className={styles['social__list-item flex-center']}>
                <a href="#">
                  <Image className={styles['social__list-icon']} src={youtubeIcon} alt="youtube icon" width={20} />
                </a>
              </li>
              <li className={styles['social__list-item flex-center']}>
                <a href="#">
                  <Image className={styles['social__list-icon']} src={facebookIcon} alt="facebook icon" width={20} />
                </a>
              </li>
              <li className={styles['social__list-item flex-center']}>
                <a href="#">
                  <Image className={styles['social__list-icon']} src={instagramIcon} alt="instagram icon" width={20} />
                </a>
              </li>
              <li className={styles['social__list-item flex-center']}>
                <a href="#">
                  <Image className={styles['social__list-icon']} src={emailIcon} alt="email icon" width={20} />
                </a>
              </li>
              <li className={styles['social__list-item flex-center']}>
                <a href="#">
                  <Image className={styles['social__list-icon']} src={telegramIcon} alt="telegram icon" width={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav className={cn(styles['header__nav'], styles[stickyClass])}>
          <div className={styles['header__nav-mobile']}>
            <div className={styles['header__nav-mobile-logo']}>
              <Image src={logoIcon} alt="burger icon" width={30} height={50} />
            </div>

            <div className={styles['header__nav-mobile-burger']} onClick={onOpenMobileMenu}>
              <span>Меню</span>

              <Image src={burgerIcon} alt="burger icon" width={30} />
            </div>
          </div>

          <ul className={`${styles['header__nav-list']} ${isOpenMobileMenu ? styles['header__nav--open'] : ''}`}>
            <li className={styles['header__nav-list-main']}>
              <span> Меню </span>
              <Image onClick={onCloseMobileMenu} src={closeIcon} alt="close icon" width={30} />
            </li>

            {headerNav.map((mainEl, MainMenuIndex) => (
              <li key={mainEl.name} className={styles['header__nav-item']}>
                <Link href={mainEl.link}>{mainEl.name}</Link>

                {mainEl.submenu.length > 0 && (
                  <div className={styles['main-menu-triangle']} onClick={() => setOpenSubmenuName(mainEl.name)}>
                    <svg viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M75.8809 43.8807L0.880859 87.1819V0.579391L75.8809 43.8807Z" fill="white" />
                    </svg>
                  </div>
                )}

                {mainEl.submenu.length > 0 && (
                  <ul
                    className={cn(styles['header__nav-submenu'], {
                      [styles['header__nav-submenu--open']]: openSubmenuName === mainEl.name,
                    })}
                  >
                    <li className={styles['header__nav-list-back']} onClick={() => setOpenSubmenuName('')}>
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span> {openSubmenuName} </span>
                    </li>

                    {mainEl.submenu.map((submenuEl) => (
                      <li key={submenuEl.name} className={styles['header__nav-submenu-item']}>
                        <Link href={submenuEl.link} className={styles['header__nav-submenu-link']}>
                          {submenuEl.name}
                        </Link>

                        {submenuEl.submenu.length > 0 && (
                          <>
                            <div
                              className={styles['main-menu-triangle']}
                              onClick={() => setOpenLoverLevelMenuName(submenuEl.name)}
                            >
                              <svg viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75.8809 43.8807L0.880859 87.1819V0.579391L75.8809 43.8807Z" fill="white" />
                              </svg>
                            </div>

                            <ul
                              className={cn(styles['header__nav-submenu'], {
                                [styles['header__nav-submenu-reverse']]: MainMenuIndex + 1 === headerNav.length,
                                [styles['header__nav-submenu-lover-level--open']]:
                                  openLoverLevelMenuName === submenuEl.name,
                              })}
                            >
                              <li
                                className={styles['header__nav-list-back']}
                                onClick={() => setOpenLoverLevelMenuName('')}
                              >
                                <svg
                                  width="30px"
                                  height="30px"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                                    fill="#ffffff"
                                  />
                                </svg>
                                <span> {openLoverLevelMenuName} </span>
                              </li>

                              {submenuEl.submenu.map((el, i) => (
                                <li className={styles['header__nav-submenu-item']} key={i}>
                                  <Link className={styles['header__nav-submenu-link']} href={el.link}>
                                    {el.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export const getServerSideProps: GetServerSideProps<{
  repo: any
}> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  console.log(
    '22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'
  )
  console.log(repo)
  return { props: { repo: '' } }
}

export default Header

// export const getServerSideProps: GetServerSideProps = async () => {
// 	try {
// 		// const { data } = useQuery(GET_HEADER)

// 		const res = await fetch('https://swapi.dev/api/people/1')
// 		const data = await res.json()
// 		console.log(111)
// 		console.log('datadatadatadatadatadatadatadatadata', data)

// 		return {
// 			props: {
// 				data
// 			}
// 		}
// 	} catch (error) {
// 		return {
// 			props: {
// 				data: {}
// 			}
// 		}
// 	}
// }
