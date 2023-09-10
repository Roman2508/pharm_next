import React from "react"
import cn from "classnames"
import Image from "next/image"

import Form from "../Form/Form"
import Modal from "../Modal/Modal"
import styles from "./Footer.module.scss"
import emailIcon from "../../../public/assets/icons/email.png"
import logoIcon from "../../../public/assets/icons/logo_white.svg"
import mapIcon from "../../../public/assets/images/footer/map.png"
import youtubeIcon from "../../../public/assets/icons/youtube.png"
import telegramIcon from "../../../public/assets/icons/telegram.png"
import facebookIcon from "../../../public/assets/icons/facebook.png"
import instagramIcon from "../../../public/assets/icons/instagram.png"

export const Footer = () => {
  const [isShow, setIsShow] = React.useState(false)
  const [isAnonimForm, setIsAnonimForm] = React.useState(false)

  const defaultFormOpen = () => {
    setIsAnonimForm(false)
    setIsShow(true)
  }
  const anonimFormOpen = () => {
    setIsAnonimForm(true)
    setIsShow(true)
  }

  return (
    <>
      <Modal
        isShow={isShow}
        setIsShow={setIsShow}
        modalTitle={isAnonimForm ? "Напишіть нам" : "Скринька довіри"}
        classNames={styles["footer-modal"]}
      >
        <Form isAnonim={isAnonimForm} />
      </Modal>

      <footer className={styles["footer"]}>
        <svg
          height="80px"
          viewBox="0 0 1440 181"
          preserveAspectRatio="none"
          className={styles["footer--decor"]}
        >
          <path
            d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"
            fill="#FFF"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
          ></path>
        </svg>

        <div className="container">
          <div className={styles["footer__wrapper"]}>
            <div className={styles["footer__left-col"]}>
              <div className={styles["footer__map"]}>
                <a href="#">
                  <Image
                    className={styles["social__list-icon"]}
                    src={mapIcon}
                    alt="logo"
                    width={150}
                  />
                </a>
              </div>

              <div className={styles["footer__address"]}>
                <h6>ЖБФФК</h6>
                <p>вул. Чуднівська, 99</p>
                <p>м. Житомир</p>
                <p>10005 Україна</p>
              </div>
            </div>

            <a className={styles["footer__logo"]} href="/">
              <Image
                className={styles["social__list-icon"]}
                src={logoIcon}
                alt="logo"
                width={140}
              />
            </a>

            <div className={styles["footer__right-col"]}>
              <div className={styles["footer__info"]}>
                <ul className={styles["social__list"]}>
                  <li className={styles["social__list-item"]}>
                    <a href="#">
                      <Image
                        className={styles["social__list-icon"]}
                        src={youtubeIcon}
                        alt="youtube icon"
                        width={20}
                      />
                    </a>
                  </li>
                  <li className={styles["social__list-item"]}>
                    <a href="#">
                      <Image
                        className={styles["social__list-icon"]}
                        src={facebookIcon}
                        alt="facebook icon"
                        width={20}
                      />
                    </a>
                  </li>
                  <li className={styles["social__list-item"]}>
                    <a href="#">
                      <Image
                        className={styles["social__list-icon"]}
                        src={instagramIcon}
                        alt="instagram icon"
                        width={20}
                      />
                    </a>
                  </li>
                  <li className={styles["social__list-item"]}>
                    <a href="#">
                      <Image
                        className={styles["social__list-icon"]}
                        src={emailIcon}
                        alt="email icon"
                        width={20}
                      />
                    </a>
                  </li>
                  <li className={styles["social__list-item"]}>
                    <a href="#">
                      <Image
                        className={styles["social__list-icon"]}
                        src={telegramIcon}
                        alt="telegram icon"
                        width={20}
                      />
                    </a>
                  </li>
                </ul>

                <div className={styles["footer__contacts"]}>
                  <a href="tel:0412242545">Тел: (0412) 24-25-45</a>
                  <a href="mailto:college@pharm.zt.ua">college@pharm.zt.ua</a>
                </div>
              </div>

              <div className={styles["footer__buttons"]}>
                <button
                  className={cn(
                    styles["footer__button"],
                    styles["footer__button-1"]
                  )}
                  onClick={anonimFormOpen}
                >
                  Задати питання
                </button>
                <button
                  className={cn(
                    styles["footer__button"],
                    styles["footer__button-2"]
                  )}
                  onClick={defaultFormOpen}
                >
                  Скринька довірии
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["footer__copyright"]}>© 1938-2023 ЖБФФК</div>
      </footer>
    </>
  )
}
