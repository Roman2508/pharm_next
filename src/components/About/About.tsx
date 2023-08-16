import React from 'react'
import styles from './About.module.scss'

interface IAboutProps {
  titleVisible?: boolean
  buttonVisible?: boolean
}

const About: React.FC<IAboutProps> = ({ titleVisible = true, buttonVisible = true }) => {
  return (
    <div className={styles['about']}>
      <div className={'container'}>
        <div className={styles['about__wrapper']}>
          <div className={styles['about__content']}>
            {titleVisible && <h2>Про ЖБФФК</h2>}

            <p>
              Житомирський базовий фармацевтичний фаховий коледж - це сучасний навчальний заклад, що забезпечує якісну
              підготовку молоді в галузі фармації.
            </p>
            <p>
              Коледж пропонує широкий спектр фахових дисциплін, висококваліфікований викладацький склад та практичні
              заняття з використанням сучасного обладнання.
            </p>
            <p>
              Завдяки своїм освітнім програмам та інноваційному підходу, коледж допомагає студентам розвивати свій
              потенціал та готує їх до успішної кар'єри в медичній сфері.
            </p>

            {buttonVisible && (
              <a className={styles['about__button']} href="/pages/about/college-history.html">
                Дізнатися більше
              </a>
            )}
          </div>

          <div className={styles['about__image']}>
            <img src="./assets/images/about/about-bg.png" alt="college photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
