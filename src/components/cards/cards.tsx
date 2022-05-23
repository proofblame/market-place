import React from 'react'
import Card from '../card/card'
import style from './cards.module.css'
import { useSelector } from '../../services/hooks'

const Cards = () => {
  const { name } = useSelector(store => store.category)
  return (
    <section className={style.cards}>
      <div className={style.wrapper}>
        <h2 className={style.title}>{name}</h2>
        <ul className={style.list}>
          <li className={style.item}><Card /></li>
          <li className={style.item}><Card /></li>
          <li className={style.item}><Card /></li>
          <li className={style.item}><Card /></li>
          <li className={style.item}><Card /></li>
          <li className={style.item}><Card /></li>
        </ul>
      </div>
    </section>
  )
}

export default Cards