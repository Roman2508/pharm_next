import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Input from '../ui/Input/Input'
import styles from './Form.module.scss'
import Select from '../ui/Select/Select'
import Button from '../ui/Button/Button'
import { validEmail } from '@/utils/validMali'
import SelectItem from '../ui/Select/SelectItem'
import { Textarea } from '../ui/Textarea/Textarea'
import { sendNodemailer } from '@/pages/api/nodemailer'
// import { sendNodemailer } from '@/utils/email'

interface IFormProps {
  isAnonim?: boolean
}

export interface IFormFields {
  name: string
  email: string
  body: string
  topic: string
}

const topicList = [
  { id: 1, text: '- Тема повідомлення -' },
  { id: 2, text: 'Загальне питання' },
  { id: 3, text: 'Питання до адміністрації' },
  { id: 4, text: 'Питання про вступ' },
]

const Form: React.FC<IFormProps> = ({ isAnonim = false }) => {
  const {
    control,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
    handleSubmit,
    getValues,
  } = useForm<IFormFields>()

  const onSubmit: SubmitHandler<IFormFields> = async (data) => {
    try {
      // const res = await sendNodemailer('/api/nodemailer', {
      //   subject: data.topic,
      //   email: data.email,
      //   fullname: data.name,
      //   body: data.body,
      // })
      // await sendMailClient()
      // alert('ok')
      const res = await fetch('/api/nodemailer', {
        body: JSON.stringify({
          email: data.email,
          fullname: data.name,
          subject: data.topic,
          body: data.body,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()

      if (error) {
        alert('Помилка при відправці повідомлення1!')
      } else {
        alert('Повідомлення відправлено!')
      }
    } catch (e) {
      alert('Помилка при відправленні повідомлення!')
    }

    // const res = await fetch('/api/sendgrid', {
    //   body: JSON.stringify({
    //     email: data.email,
    //     fullname: data.name,
    //     subject: data.topic,
    //     message: data.body,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // })

    // const { error } = await res.json()

    // if (error) {
    //   alert('Помилка при відправці повідомлення!')
    // } else {
    //   alert('Повідомлення відправлено!')
    // }
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
      {isAnonim && (
        <>
          <Input
            {...register('name', {
              required: "Ім'я обов'язкове",
            })}
            width="100%"
            label="Ваше ім`я"
            value={getValues().name}
            error={errors.name}
          />

          <Input
            {...register('email', {
              required: "E-mail обов'язковий",
              pattern: {
                value: validEmail,
                message: 'Не вірний формат пошти',
              },
            })}
            width="100%"
            label="Ваш E-mail"
            value={getValues().email}
            error={errors.email}
          />

          <Controller
            control={control}
            name="topic"
            defaultValue={topicList[0].text}
            rules={{
              validate: (value: string) => value !== '- Тема повідомлення -',
            }}
            render={({
              field: { onChange, value, ref /* , name, onBlur */ },
              fieldState: { error /* , invalid, isTouched, isDirty */ },
              // formState,
            }) => {
              return (
                <Select
                  inputRef={ref}
                  error={!!error}
                  activeItem={value}
                  isSubmitting={isSubmitting}
                  label={'- Тема повідомлення -'}
                >
                  {topicList.map((el) => (
                    <SelectItem value={el.text} key={el.id} onClick={() => onChange(el.text)} />
                  ))}
                </Select>
              )
            }}
          />
        </>
      )}

      {!isAnonim && <p className={styles['anon-desc']}>Ви можете відправити будь-яке повідомлення анонімно.</p>}

      <Textarea
        {...register('body', {
          required: "Текст повідомлення обов'язковий",
        })}
        width="100%"
        label="Текст повідомлення"
        value={getValues().body}
        error={errors.body}
      />
      <Button disabled={!isDirty || !isValid || isSubmitting}>Відправити повідомлення</Button>
    </form>
  )
}

export default Form
