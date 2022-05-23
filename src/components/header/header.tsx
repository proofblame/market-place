import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './header.module.css'
import { useSelector } from '../../services/hooks'

const Header = () => {
  const { email, name, phone, title } = useSelector(store => store.common)
  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <Link to='/' className={style.logo}>
          {title}
        </Link>
        <ul className={style.listInline}>
          <li className={style.itemInline}>{name}</li>
          <li className={style.itemInline}>{phone}</li>
          <li className={style.itemInline}>{email}</li>
        </ul>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink to='/' className={style.link}>
              Главная
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/cart' className={style.link}>
              Корзина
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/account' className={style.link}>
              Войти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header