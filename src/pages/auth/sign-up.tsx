import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './sign-up.module.css'
const errorDataState = {
  email: {
    default: 'Мы никогда никому не передадим вашу электронную почту.',
    fillOut: 'Укажите email.',
    shortLong: 'Email должен содержать от 6 до 30 символов.',
    at: 'Пропущен символ @.',
    incorrect: 'Email некорректен.',
  },
  password: {
    default: '',
    fillOut: 'Введите пароль.',
    short: 'Пароль не может быть короче 8 символов.',
    incorrect: 'Разрешены только латинские буквы, цифры и общие символы пунктуации.',
  },
  confirmPassword: {
    default: '',
    fillOut: 'Подтвердите пароль',
    noMatches: 'Пароли не совпадают. Повторите попытку.',
  },
  checkbox: {
    default: '',
    incorrect: 'Чтобы создать аккаунт, вам необходимо принять Политику конфиденциальности.'
  },
}

export const SignUp = () => {
  const focusInput = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
    errorEmail: false,
    errorPassword: false,
    errorConfirmPassword: false,
    errorCheckbox: false,
    validEmail: false,
    validPassword: false,
    validConfirmPassword: false,
  })
  const [errorData, setErrorData] = useState({
    email: errorDataState.email.default,
    password: errorDataState.password.default,
    confirmPassword: errorDataState.confirmPassword.default,
    checkbox: errorDataState.checkbox.default,
  })


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const checkEmailInput = () => {
    const { email } = formData
    let errorMessage = errorDataState.email.default
    let errorStatus = true
    let validStatus = false
    const mailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!email) {
      errorMessage = errorDataState.email.fillOut
    } else if (email && (email.length < 6 || email.length > 30)) {
      errorMessage = errorDataState.email.shortLong
    } else if (!email.includes('@')) {
      errorMessage = errorDataState.email.at
    } else if (!mailReg.test(email)) {
      errorMessage = errorDataState.email.incorrect
    } else {
      errorMessage = errorDataState.email.default
      errorStatus = false
      validStatus = true
    }
    return { errorMessage, errorStatus, validStatus }
  }
  const checkPasswordInput = () => {
    // Строгая регулярка https://ru.stackoverflow.com/questions/533675/Регулярное-выражение-для-пароля-от-6-символов-с-использованием-цифр-спец-симво
    // const passwordReg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
    const { password } = formData
    const passwordReg = /[0-9a-zA-Z!@#$%^&*]{8,}/g;
    let errorMessage
    let errorStatus = true
    let validStatus = false
    if (!password) {
      errorMessage = errorDataState.password.fillOut
    } else if (password && password.length < 8) {
      errorMessage = errorDataState.password.short
    } else if (!passwordReg.test(password)) {
      errorMessage = errorDataState.password.incorrect
    } else {
      errorMessage = errorDataState.password.default
      errorStatus = false
      validStatus = true
    }
    return { errorMessage, errorStatus, validStatus }
  }
  const checkConfirmPasswordInput = () => {
    const { confirmPassword } = formData
    let errorMessage
    let errorStatus = true
    let validStatus = false
    if (!confirmPassword) {
      errorMessage = errorDataState.confirmPassword.fillOut
    } else if (confirmPassword !== formData.password) {
      errorMessage = errorDataState.confirmPassword.noMatches
    } else {
      errorMessage = errorDataState.confirmPassword.default
      errorStatus = false
      validStatus = true
    }
    return { errorMessage, errorStatus, validStatus }
  }
  const checkCheckboxInput = () => {
    const { checkbox } = formData
    let errorMessage
    let errorStatus = true
    if (!checkbox) {
      errorMessage = errorDataState.checkbox.incorrect
    } else {
      errorMessage = errorDataState.checkbox.default
      errorStatus = false
    }
    return { errorMessage, errorStatus }
  }
  const handleValidityState = () => {
    const { errorMessage: email, errorStatus: errorEmail, validStatus: validEmail } = checkEmailInput();
    const { errorMessage: password, errorStatus: errorPassword, validStatus: validPassword } = checkPasswordInput();
    const { errorMessage: confirmPassword, errorStatus: errorConfirmPassword, validStatus: validConfirmPassword } = checkConfirmPasswordInput();
    const { errorMessage: checkbox, errorStatus: errorCheckbox } = checkCheckboxInput();
    setErrorData({
      email,
      password,
      confirmPassword,
      checkbox,
    })
    setFormData({
      ...formData,
      errorEmail,
      errorPassword,
      errorConfirmPassword,
      errorCheckbox,
      validEmail,
      validPassword,
      validConfirmPassword,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleValidityState()
    console.log(formData)
    console.log(errorData)
  }



  useEffect(
    () => {
      if (focusInput && focusInput.current) {
        focusInput.current.focus()
      }
    }, [focusInput]
  )

  return (
    <section className={style.signup}>
      <div className={style.container}>
        <h2 className={style.title}>Регистрация</h2>
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
          <fieldset className={style.fieldset}>
            <label className={style.label} htmlFor="email">Ваш email</label>
            <input className={formData.errorEmail ? style.inputError : formData.validEmail ? style.inputValid : style.input} value={formData.email} onChange={handleChange} name={'email'} ref={focusInput} id="email" type="text" autoComplete="off" />
            <span className={formData.errorEmail ? style.captionError : style.caption}>{errorData.email}</span>
          </fieldset>
          <fieldset className={style.fieldset}>
            <label className={style.label} htmlFor="password">Ваш пароль</label>
            <input className={formData.errorPassword ? style.inputError : formData.validPassword ? style.inputValid : style.input} value={formData.password} onChange={handleChange} name={'password'} id="password" type="password" />
            <span className={formData.errorPassword ? style.captionError : style.caption}>{errorData.password}</span>
          </fieldset>
          <fieldset className={style.fieldset}>
            <label className={style.label} htmlFor="confirm-password">Повторите пароль</label>
            <input className={formData.errorConfirmPassword ? style.inputError : formData.validConfirmPassword ? style.inputValid : style.input} value={formData.confirmPassword} onChange={handleChange} name={'confirmPassword'} id="confirm-password"
              type="password" />
            <span className={formData.errorConfirmPassword ? style.captionError : style.caption}>{errorData.confirmPassword}</span>
          </fieldset>
          <fieldset className={style.checkboxGroup}>
            <input className={formData.errorCheckbox ? style.checkboxError : style.checkbox} checked={formData.checkbox} onChange={handleChange} name={'checkbox'} id="checkbox" type="checkbox" />
            <label className={style.checkboxLabel} htmlFor="checkbox">
              <span>Даю согласие на обработку данных</span>
              <Link className={style.politics} to={'#'}>Политика конфиденциальности</Link>
              <span className={formData.errorCheckbox ? style.captionError : style.caption}>{errorData.checkbox}</span>
            </label>
          </fieldset>
          <button className={style.button} type="submit">Регистрация</button>
        </form>
      </div>
    </section>
  )
}
