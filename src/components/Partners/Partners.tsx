import React from 'react'

import './partners.css'

export const Partners = () => {
  return (
    <div className="partners">
      <h2 className="partners__title section-title">Наші партнери</h2>
      <p className="partners__descr">
        Ми співпрацюємо з багатьма закладами освіти та роботодавцями. Завжди відкриті для нових пропозицій
      </p>
      <div className="partners__items-wrap">
        <div className="partners__items marquee">
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-1.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-2.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-3.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-4.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-5.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-6.jpg" alt="partner logo" />
          </a>
        </div>
        <div className="partners__items marquee">
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-7.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-8.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-9.jpeg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-10.png" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-11.png" alt="partner logo" />
          </a>
        </div>
      </div>

      <div className="partners__items-wrap">
        <div className="partners__items marquee reverce">
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-12.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-15.png" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-16.png" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-17.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-18.jpg" alt="partner logo" />
          </a>
        </div>
        <div className="partners__items marquee reverce">
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-19.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-20.jpg" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-21.png" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-13.png" alt="partner logo" />
          </a>
          <a href="#" className="item">
            <img className="partners__item-img" src="./assets/images/partners/partners-14.png" alt="partner logo" />
          </a>
        </div>
      </div>
    </div>
  )
}
