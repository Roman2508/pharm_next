'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import styles from './Breadcrumbs.module.scss'
import Link from 'next/link'

const Breadcrumbs = () => {
  const pathname = usePathname()

  let currentLink = ''

  const crumbs = pathname
    .split('/')
    .filter((el) => el !== '')
    .map((el) => {
      currentLink += `/${el}`
      return (
        <div className={styles['breadcrumbs__item']} key={el}>
          <Link href={currentLink}>{el}</Link>
        </div>
      )
    })

  return (
    <div className={styles['breadcrumbs']}>
      <div className="container">
        <div className={styles['breadcrumbs__list']}>{crumbs}</div>
      </div>
    </div>
  )
}

export default Breadcrumbs
