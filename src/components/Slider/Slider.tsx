import React from 'react'
import cn from 'classnames'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import styles from './Slider.module.scss'

interface ISliderProps {
  children: JSX.Element | JSX.Element[]
}

interface ISliderArrowProps {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}

export const SliderWrapper: React.FC<React.PropsWithChildren<ISliderProps>> = ({ children }) => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 2,
        spacing: 105,
        origin: 'center',
      },
      slideChanged(slider) {
        console.log(slider.slides[slider.track.details.rel].classList.add(styles['active-slide']))
        setActiveSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      defaultAnimation: {
        duration: 1200,
      },
    },
    [
      // add plugins here
    ],
  )

  React.useEffect(() => {
    if (instanceRef.current) {
      console.log(instanceRef.current.track.details.slides)

      instanceRef.current.slides.map((el, index) => {
        if (index === activeSlide) {
          console.log(el.children)
        } else {
          el.style.transform = 'scale(1) !important'
        }
      })
    }
  }, [activeSlide])

  return (
    <>
      <div ref={sliderRef} className={cn(styles['slider__wrapper'], 'keen-slider')}>
        {children}
      </div>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={activeSlide === 0}
          />

          <Arrow
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={activeSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )}
    </>
  )
}

function Arrow(props: ISliderArrowProps) {
  const disabeld = props.disabled ? styles['arrow--disabled'] : ''
  return (
    <div
      onClick={props.onClick}
      className={`${props.left ? styles['arrow--left'] : styles['arrow--right']} ${disabeld}`}>
      <svg viewBox="0 0 24 24">
        {props.left && <path fill="#ffffff" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
        {!props.left && <path fill="#ffffff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    </div>
  )
}
