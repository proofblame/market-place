import React, { ChangeEvent, FormEvent, useState } from 'react'
import style from './account.module.css'
import { useDispatch, useSelector } from '../../services/hooks'
import { updateCard } from '../../services/actions/card'
import { updateCategory } from '../../services/actions/category'
import { updateUser } from '../../services/actions/common'

const Account = () => {
  const dispatch = useDispatch()
  const { card, category, common } = useSelector(store => store)
  const [dataUser, setDataUser] = useState(common)
  const [dataCategory, setDataCategory] = useState(category)
  const [dataCard, setDataCard] = useState(card)

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDataUser({
      ...dataUser,
      [name]: value
    })
  }
  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDataCategory({
      ...dataCategory,
      [name]: value
    })
  }
  const onChangeCard = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDataCard({
      ...dataCard,
      [name]: value
    })
  }
  const submitUpdateUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateUser(dataUser))
  }
  const submitUpdateCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateCategory(dataCategory))
  }
  const submitUpdateCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateCard(dataCard))
  }

  return (
    <section className={style.section}>
      <h2 className={style.title}>Личный Кабинет</h2>
      <form className={style.form} onSubmit={submitUpdateUser}>
        <h5>Общая информация</h5>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Ф.И.О.</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={dataUser.name} onChange={onChangeUser} />
          <div className={style.caption} id="emailHelp">Ваши данные</div>
        </fieldset>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Название магазина</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='title' value={dataUser.title} onChange={onChangeUser} />
          <div className={style.caption} id="emailHelp">Название в шапке</div>
        </fieldset>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Адрес электронной почты</label>
          <input className={style.input} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={dataUser.email} onChange={onChangeUser} />
          <div className={style.caption} id="emailHelp">Мы никогда никому не передадим вашу электронную почту.</div>
        </fieldset>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Телефон</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='phone' value={dataUser.phone} onChange={onChangeUser} />
          <div className={style.caption} id="emailHelp">Мы никогда никому не передадим ваш номер телефона.</div>
        </fieldset>
        <button className={style.button} type="submit">Отправить</button>
      </form>
      <form className={style.form} onSubmit={submitUpdateCategory}>
        <h5>Категории</h5>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Название категории</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={dataCategory.name} onChange={onChangeCategory} />
          <div className={style.caption} id="emailHelp">Название в шапке</div>
        </fieldset>
        <button className={style.button} type="submit">Отправить</button>
      </form>
      <form className={style.form} onSubmit={submitUpdateCard}>
        <h5>Название карточки</h5>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Название карточки</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='title' value={dataCard.title} onChange={onChangeCard} />
          <div className={style.caption} id="emailHelp">Название карточки</div>
        </fieldset>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Описание карточки</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='subtitle' value={dataCard.subtitle} onChange={onChangeCard} />
          <div className={style.caption} id="emailHelp">Описание карточки</div>
        </fieldset>
        <fieldset className={style.fieldset}>
          <label className={style.label} htmlFor="exampleInputEmail1">Цена карточки</label>
          <input className={style.input} type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name='price' value={dataCard.price} onChange={onChangeCard} />
          <div className={style.caption} id="emailHelp">Цена карточки</div>
        </fieldset>
        <button className={style.button} type="submit">Отправить</button>
      </form>
    </section >
  )
}

export default Account