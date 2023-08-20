import React from 'react'
import cn from 'classnames'

import styles from './About.module.scss'
import Link from 'next/link'

interface IAboutProps {
  titleVisible?: boolean
  buttonVisible?: boolean
  isMainPage?: boolean
}

const About: React.FC<IAboutProps> = ({ titleVisible = true, buttonVisible = true, isMainPage = false }) => {
  return (
    <div className={cn(styles['about'], styles['about--page'])}>
      <div className={'container'}>
        <div className={cn(styles['about__wrapper'], { [styles['vertical-center']]: isMainPage })}>
          <div className={cn(styles['about__content'], styles['about--page'])}>
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
              <Link className={styles['about__button']} href="/pro-zhbphc/istoria-col">
                Дізнатися більше
              </Link>
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
