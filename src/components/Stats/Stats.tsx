import React from 'react'
import './stats.css'

const Stats = () => {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__inner">
          <div className="stats__item">
            <div className="stats__item-inner">
              <h3 className="stats__number">10000+</h3>
              <p className="stats__text">Випускників</p>
            </div>
          </div>
          <div className="stats__item">
            <div className="stats__item-inner">
              <h3 className="stats__number">60+</h3>
              <p className="stats__text">Педагогічних працівників</p>
            </div>
          </div>
          <div className="stats__item">
            <div className="stats__item-inner">
              <h3 className="stats__number">600+</h3>
              <p className="stats__text">Студентів</p>
            </div>
          </div>
          <div className="stats__item">
            <div className="stats__item-inner">
              <h3 className="stats__number">10</h3>
              <p className="stats__text">Освітніх програм</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
