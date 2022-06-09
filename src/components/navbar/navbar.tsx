import React from "react";
import style from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import Container from "../container/container";

const Navbar = () => {
  return (
    <section className={style.navbar}>
      <Container>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}>
              <NavLink to={"/"} className={style.link}>
                Главная
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink to={"/"} className={style.link}>
                Корзина
                {/* <span className={style.cartCount}>1</span> */}
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink to={"/"} className={style.link}>
                История заказов
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink to={"/"} className={style.link}>
                Помощь
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink to={"/"} className={style.link}>
                Тёмная тема
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;
