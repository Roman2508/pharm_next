import React from 'react'
import styles from './Stats.module.scss'

const Stats = () => {
  return (
    <div className={styles['stats']}>
      <div className={'container'}>
        <div className={styles['stats__inner']}>
          <div className={styles['stats__item']}>
            <div className={styles['stats__item-inner']}>
              <h3 className={styles['stats__number']}>30000+</h3>
              <p className={styles['stats__text']}>Випускників</p>
            </div>
          </div>
          <div className={styles['stats__item']}>
            <div className={styles['stats__item-inner']}>
              <h3 className={styles['stats__number']}>60+</h3>
              <p className={styles['stats__text']}>Педагогічних працівників</p>
            </div>
          </div>
          <div className={styles['stats__item']}>
            <div className={styles['stats__item-inner']}>
              <h3 className={styles['stats__number']}>600+</h3>
              <p className={styles['stats__text']}>Студентів</p>
            </div>
          </div>
          <div className={styles['stats__item']}>
            <div className={styles['stats__item-inner']}>
              <h3 className={styles['stats__number']}>2</h3>
              <p className={styles['stats__text']}>Освітніх програми</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
