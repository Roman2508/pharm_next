import React from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

interface IInputProps {
  variant?: 'outlined' | 'standart'
  isError?: boolean
  errorMessage?: string
  label?: string
  value?: string
  width?: string
  inputType?: 'text' | 'email'
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<IInputProps> = ({
  setValue,
  label = '',
  value = '',
  isError = false,
  width = '100%',
  errorMessage = '',
  variant = 'outlined',
  inputType = 'text',
}) => {
  const [isFocus, setIsFocus] = React.useState(false)
  const [isFocusLabel, setIsFocusLabel] = React.useState(false)

  const onFocusHandler = () => {
    setIsFocus(true)
    setIsFocusLabel(true)
  }

  const onBlurHandler = () => {
    if (!value) {
      setIsFocus(false)
    }
    setIsFocusLabel(false)
  }

  return (
    <div className={styles.wrapper} style={{ width: width }}>
      <label
        className={cn(styles.label, {
          [styles.errorLabel]: isError,
          [styles.focusLabel]: isFocusLabel,
          [styles.standartLabel]: variant === 'standart',
          [styles.outlinedLabel]: variant === 'outlined',
          [styles.focusLabelLight]: isFocus,
          [styles.focusStandartLabel]: isFocus && variant === 'standart',
          [styles.focusOutlinedLabel]: isFocus && variant === 'outlined',
        })}>
        {label}
      </label>

      <div
        className={cn(styles.inputWrapper, {
          [styles.bottomLine]: isFocus && variant === 'standart',
          [styles.focusInput]: isFocusLabel,
          [styles.errorBottomLine]: isError,
        })}
        style={{ width: width }}>
        {/*  */}
        <input
          value={value}
          type={inputType}
          onBlur={onBlurHandler}
          style={{ width: width }}
          onFocus={onFocusHandler}
          className={cn(styles.input, {
            [styles.outlinedInput]: variant === 'outlined',
            [styles.standartInput]: variant === 'standart',
            [styles.lightModeInput]: true,
            [styles.errorInput]: isError,
          })}
          onChange={(e) => setValue(e.target.value)}
        />

        {errorMessage && (
          <p className={cn(styles.errorMessage)} style={{ width: width }}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  )
}

export default Input
