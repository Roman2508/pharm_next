import React from 'react'
import cn from 'classnames'

import styles from './Textarea.module.scss'

interface IInputProps {
  isError?: boolean
  errorMessage?: string
  label?: string
  value?: string
  width?: string
  setValue: React.Dispatch<React.SetStateAction<string>> | ((val: string) => void)
}

const Textarea: React.FC<IInputProps> = ({
  setValue,
  label = '',
  value = '',
  isError = false,
  width = '100%',
  errorMessage = '',
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
          [styles.outlinedLabel]: true,
          [styles.focusLabelLight]: isFocus,
          [styles.focusOutlinedLabel]: isFocus,
        })}
      >
        {label}
      </label>

      <div
        className={cn(styles.inputWrapper, {
          [styles.focusInput]: isFocusLabel,
          [styles.errorBottomLine]: isError,
        })}
        style={{ width: width }}
      >
        {/*  */}
        <textarea
          value={value}
          onBlur={onBlurHandler}
          style={{ width: width }}
          onFocus={onFocusHandler}
          className={cn(styles.input, {
            [styles.outlinedInput]: true,
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

export { Textarea }
