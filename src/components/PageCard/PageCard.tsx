import React from "react"
import Link from "next/link"
import cn from "classnames"

import styles from "./PageCard.module.scss"

interface IPageCardProps {
  id: string
  slug: string
  name: string
  photo: string
  department?: string
}

const PageCard: React.FC<IPageCardProps> = ({
  id,
  slug,
  photo,
  name,
  department,
}) => {
  const link = department ? `${department}/${slug}` : `${slug}`

  return (
    <Link key={id} className={styles["item"]} href={link}>
      <div className={cn(styles["photo"], "scale-photo-hover", "hand-pointer")}>
        <img src={`${process.env.API_URL}${photo}`} alt="subdivisions" />
      </div>
      <div className={styles["text-box"]}>
        <p className={styles["text"]}>{name}</p>
      </div>
    </Link>
  )
}

export default PageCard
