import React from 'react'
import styles from './Stats.module.scss'
import { HomePageStatEntity } from '@/graphql/__generated__'

interface IStatsProps {
  data: HomePageStatEntity
}

const Stats: React.FC<IStatsProps> = ({ data }) => {
  return (
    <div className={styles['stats']}>
      <div className={'container'}>
        <div className={styles['stats__inner']}>
          {data.attributes.stats.map((el) => (
            <div className={styles['stats__item']} key={el.id}>
              <div className={styles['stats__item-inner']}>
                <h3 className={styles['stats__number']}>{el.num}</h3>
                <p className={styles['stats__text']}>{el.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
