import React from 'react'
import laptop from '../../images/laptop.webp'
import style from './card.module.css'
import { useSelector } from '../../services/hooks'

const Card = () => {
  const { title, subtitle, price } = useSelector(store => store.card)
  return (
    <div className={style.card}>
      <img className={style.img} src={laptop} alt="Laptop" />
      <div className={style.body}>
        <h5 className={style.title}>{title}</h5>
        <p className={style.subtitle}>{subtitle}</p>
        <p className={style.price}>{price} &#x20BD;</p>
        <button className={style.button}>В корзину</button>
      </div>
    </div>
  )
}

export default Card