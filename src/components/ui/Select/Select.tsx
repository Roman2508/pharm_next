import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './Select.module.scss'
import searchIcon from '../../../../public/assets/icons/select-arrow.svg'

interface ISelectProps {
  activeItem: string
  setActiveItem: React.Dispatch<React.SetStateAction<string>>
  items: any
  testItems?: number
  width?: string
}

const items1 = [
  { id: 1, text: '- Виберіть -' },
  { id: 1, text: 'ЦК фармацевтичних дисциплін' },
  { id: 2, text: 'ЦК соціально-економічних дисциплін' },
  { id: 3, text: 'ЦК філологічних дисциплін' },
  { id: 4, text: 'ЦК загальноосвітніх дисциплін' },
  { id: 5, text: 'ЦК хімічних дисциплін' },
]

const items2 = [
  { id: 1, text: '- Виберіть -' },
  { id: 2, text: 'Загальне питання' },
  { id: 3, text: 'Питання до адміністрації' },
  { id: 4, text: 'Питання про вступ' },
]

const Select: React.FC<ISelectProps> = ({ activeItem, setActiveItem, items, testItems = 2, width = '100%' }) => {
  const selectRef = React.useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = React.useCallback((event: MouseEvent) => {
    const _event = event as MouseEvent & { path: Node[] }

    if (selectRef.current && !(_event.path || _event.composedPath()).includes(selectRef.current)) {
      setIsOpen(false)
    }
  }, [])

  React.useEffect(() => {
    document.body.addEventListener('click', onClose)

    setActiveItem(items2[0].text)

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
        <li className={styles['select__item']} key={'- Виберіть -'} onClick={() => setActiveItem('- Виберіть -')}>
          - Виберіть -
        </li>
        {items.cycleCommissions.data.map((el) => (
          <li className={styles['select__item']} key={el.id} onClick={() => setActiveItem(el.attributes.name)}>
            {el.attributes.name}
          </li>
        ))}
      </ul>

      {/* <ul className={cn(styles['select__body'], { [styles['is-active']]: isOpen })}>
        {testItems === 1
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
      </ul> */}
    </div>
  )
}

export default Select
