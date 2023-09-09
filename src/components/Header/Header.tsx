import React from "react"
import Link from "next/link"
import Image from "next/image"
import cn from "classnames"

import styles from "./Header.module.scss"
import closeIcon from "../../../public/assets/icons/close.svg"
import burgerIcon from "../../../public/assets/icons/burger.svg"
import logoIcon from "../../../public/assets/icons/logo.png"
import { GetHeaderQuery } from "@/graphql/__generated__"

// GET header data
// http://localhost:1337/api/header?populate%5B0%5D=Header&populate%5B1%5D=Header.navigation&populate%5B2%5D=Header.navigation.submenu&populate%5B3%5D=Header.navigation.submenu.submenu&populate%5B4%5D=Header.logo&populate%5B5%5D=Header.background&populate%5B6%5D=Header.videoPoster&populate%5B7%5D=Header.social&populate%5B8%5D=Header.social.icons&populate%5B9%5D=Header.social.icons.icon&populate%5B10%5D=Header.headerIcons&populate%5B11%5D=Header.headerIcons.icon

interface IHeaderProps {
  headerData: GetHeaderQuery
}

const Header: React.FC<IHeaderProps> = ({ headerData }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState(false)
  const [openSubmenuName, setOpenSubmenuName] = React.useState("")
  const [openLoverLevelMenuName, setOpenLoverLevelMenuName] = React.useState("")
  const [stickyClass, setStickyClass] = React.useState<
    "header--static" | "header--sticky"
  >("header--static")

  const isSticky = () => {
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 82 ? "header--sticky" : "header--static"
    setStickyClass(stickyClass)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", isSticky)
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  const onCloseMobileMenu = () => {
    setIsOpenMobileMenu(false)
  }
  const onOpenMobileMenu = () => {
    setIsOpenMobileMenu(true)
  }

  if (!headerData?.header?.data?.attributes?.Header?.headerIcons.length) {
    return null
  }

  if (!headerData?.header?.data?.attributes?.Header?.social.icons) {
    return null
  }

  if (!headerData?.header?.data?.attributes?.Header?.navigation) {
    return null
  }

  return (
    <header className={styles["header"]}>
      <div className={"container"}>
        <div className={styles["header__top"]}>
          {/* HEADER ICONS */}

          <div className={styles["header__left-col"]}>
            {headerData.header?.data?.attributes?.Header?.headerIcons
              .slice(0, 2)
              .map((icon) => (
                <Link
                  className={styles["header__top-link"]}
                  href={icon.link}
                  key={icon.id}
                  target="_blank"
                >
                  <Image
                    src={`${process.env.API_URL}${icon.icon.data.attributes.url}`}
                    alt="icon"
                    width={40}
                    height={40}
                  />
                  <span className={styles["header__top-link-title"]}>
                    {icon.text}
                  </span>
                </Link>
              ))}
          </div>

          <Link
            className={styles["header__top-link"]}
            href={
              headerData.header?.data?.attributes?.Header?.headerIcons[2].link
            }
            target="_blank"
          >
            <Image
              src={`${process.env.API_URL}${headerData.header?.data?.attributes?.Header?.headerIcons[2].icon.data.attributes.url}`}
              alt="ENG icon"
              width={35}
              height={26}
            />
            <span className={styles["header__eng-title"]}>
              {headerData.header?.data?.attributes?.Header?.headerIcons[2].text}
            </span>
          </Link>

          {/* HEADER SOCIAL */}

          <div className={styles["social__wrapper"]}>
            <p>{headerData.header?.data?.attributes?.Header?.social.text}</p>
            <ul className={styles["social__list"]}>
              {headerData.header?.data?.attributes?.Header?.social.icons.map(
                (el) => (
                  <li className={styles["social__list-item"]} key={el.id}>
                    <Link href={el.link} target="_blank">
                      <Image
                        className={styles["social__list-icon"]}
                        src={`${process.env.API_URL}${el.icon.data.attributes.url}`}
                        alt="social icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* HEADER NAVIGATION */}

        <nav className={cn(styles["header__nav"], styles[stickyClass])}>
          <div className={styles["header__nav-mobile"]}>
            <Link className={styles["header__nav-mobile-logo"]} href={"/"}>
              <Image
                src={logoIcon}
                alt="mobile logo icon"
                width={150}
                height={150}
              />
            </Link>

            <div
              className={styles["header__nav-mobile-burger"]}
              onClick={onOpenMobileMenu}
            >
              <span>Меню</span>

              <Image src={burgerIcon} alt="burger icon" width={30} />
            </div>
          </div>

          <ul
            className={`${styles["header__nav-list"]} ${
              isOpenMobileMenu ? styles["header__nav--open"] : ""
            }`}
          >
            <li className={styles["header__nav-list-main"]}>
              <span> Меню </span>
              <Image
                onClick={onCloseMobileMenu}
                src={closeIcon}
                alt="close icon"
                width={30}
              />
            </li>

            {headerData.header?.data?.attributes?.Header?.navigation.map(
              (mainEl, MainMenuIndex) => (
                <li key={mainEl.text} className={styles["header__nav-item"]}>
                  <Link href={mainEl.link}>{mainEl.text}</Link>

                  {mainEl.submenu.length > 0 && (
                    <div
                      className={styles["main-menu-triangle"]}
                      onClick={() => setOpenSubmenuName(mainEl.text)}
                    >
                      <svg
                        viewBox="0 0 76 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M75.8809 43.8807L0.880859 87.1819V0.579391L75.8809 43.8807Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}

                  {mainEl.submenu.length > 0 && (
                    <ul
                      className={cn(styles["header__nav-submenu"], {
                        [styles["header__nav-submenu--open"]]:
                          openSubmenuName === mainEl.text,
                      })}
                    >
                      <li
                        className={styles["header__nav-list-back"]}
                        onClick={() => setOpenSubmenuName("")}
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
                        <span> {openSubmenuName} </span>
                      </li>

                      {mainEl.submenu.map((submenuEl) => (
                        <li
                          key={submenuEl.text}
                          className={styles["header__nav-submenu-item"]}
                        >
                          <Link
                            href={submenuEl.link}
                            className={styles["header__nav-submenu-link"]}
                          >
                            {submenuEl.text}
                          </Link>

                          {submenuEl.submenu.length > 0 && (
                            <>
                              <div
                                className={styles["main-menu-triangle"]}
                                onClick={() =>
                                  setOpenLoverLevelMenuName(submenuEl.text)
                                }
                              >
                                <svg
                                  viewBox="0 0 76 88"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M75.8809 43.8807L0.880859 87.1819V0.579391L75.8809 43.8807Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>

                              <ul
                                className={cn(styles["header__nav-submenu"], {
                                  [styles["header__nav-submenu-reverse"]]:
                                    MainMenuIndex + 1 ===
                                    headerData.header?.data?.attributes?.Header
                                      ?.navigation.length,
                                  [styles[
                                    "header__nav-submenu-lover-level--open"
                                  ]]: openLoverLevelMenuName === submenuEl.text,
                                })}
                              >
                                <li
                                  className={styles["header__nav-list-back"]}
                                  onClick={() => setOpenLoverLevelMenuName("")}
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
                                  <li
                                    className={
                                      styles["header__nav-submenu-item"]
                                    }
                                    key={i}
                                  >
                                    <Link
                                      className={
                                        styles["header__nav-submenu-link"]
                                      }
                                      href={el.link}
                                    >
                                      {el.text}
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
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
