import React from 'react'
import cn from 'classnames'

import styles from './About.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { HomePageAboutEntity } from '@/graphql/__generated__'

interface IAboutProps {
  data: HomePageAboutEntity
  titleVisible?: boolean
  buttonVisible?: boolean
  isMainPage?: boolean
}

const About: React.FC<IAboutProps> = ({ data, titleVisible = true, buttonVisible = true, isMainPage = false }) => {
  return (
    <div className={cn(styles['about'], styles['about--page'])}>
      <div className={'container'}>
        <div className={cn(styles['about__wrapper'], { [styles['vertical-center']]: isMainPage })}>
          <div className={cn(styles['about__content'], styles['about--page'])}>
            {titleVisible && <h2>{data.attributes.title}</h2>}

            <div dangerouslySetInnerHTML={{ __html: data.attributes.body }} />

            {buttonVisible && (
              <Link className={styles['about__button']} href="/pro-zhbphc/istoria-col">
                {data.attributes.buttonText}
              </Link>
            )}
          </div>

          <div className={styles['about__image']}>
            <Image
              src={`${process.env.API_URL}${data.attributes.photo.data.attributes.url}`}
              width={400}
              height={400}
              layout="responsive"
              alt="college photo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
