'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import './breadcrumbs.css'
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
        <div className="breadcrumbs__item" key={el}>
          <Link href={currentLink}>{el}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__list">{crumbs}</div>
      </div>
    </div>
  )
}

export default Breadcrumbs
