import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './Select.module.scss'
import searchIcon from '../../../../public/assets/icons/select-arrow.svg'

interface ISelectProps {
  items?: number
  width?: string
}

const items1 = [
  { id: 1, text: '- Виберіть -' },
  { id: 1, text: 'ЦМК фармацевтичних дисциплін' },
  { id: 2, text: 'ЦМК соціально-економічних дисциплін' },
  { id: 3, text: 'ЦМК філологічних дисциплін' },
  { id: 4, text: 'ЦМК загальноосвітніх дисциплін' },
  { id: 5, text: 'ЦМК хімічних дисциплін' },
]

const items2 = [
  { id: 1, text: '- Виберіть -' },
  { id: 2, text: 'Загальне питання' },
  { id: 3, text: 'Питання до адміністрації' },
  { id: 4, text: 'Питання про вступ' },
]

const Select: React.FC<ISelectProps> = ({ items = 2, width = '100%' }) => {
  const selectRef = React.useRef<HTMLDivElement | null>(null)

  const [activeItem, setActiveItem] = React.useState(items2[0].text)
  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = React.useCallback((event: MouseEvent) => {
    const _event = event as MouseEvent & { path: Node[] }

    if (selectRef.current && !(_event.path || _event.composedPath()).includes(selectRef.current)) {
      setIsOpen(false)
    }
  }, [])

  React.useEffect(() => {
    document.body.addEventListener('click', onClose)

    return () => {
      document.body.removeEventListener('click', onClose)
    }
  }, [])

  return (
    <div className={cn(styles['select'], { [styles['is-active']]: isOpen })} style={{ width }}>
      <div className={styles['select__head']} onClick={() => setIsOpen(!isOpen)} ref={selectRef}>
        <span className={styles['select__current']}>{activeItem}</span>
        <div className={styles['select__icon']}>
          <Image src={searchIcon} width={20} height={20} alt="arrow icon" />
        </div>
      </div>

      <ul className={cn(styles['select__body'], { [styles['is-active']]: isOpen })}>
        {items === 1
          ? items1.map((el) => (
              <li className={styles['select__item']} key={el.id} onClick={() => setActiveItem(el.text)}>
                {el.text}
              </li>
            ))
          : items2.map((el) => (
              <li className={styles['select__item']} key={el.id} onClick={() => setActiveItem(el.text)}>
                {el.text}
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Select
