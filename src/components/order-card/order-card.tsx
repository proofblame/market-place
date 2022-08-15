import React from "react";
import { Container } from "../index";
import style from "./order-card.module.scss";
import img1 from './images/boots.png';
import img2 from './images/chair.png';
import img3 from './images/soap.png';


export const OrderCard = () => {
  return (
    <Container className={style.order}>
      <header className={style.header}>
        <h2 className={style.title}>Заказ от 30 марта</h2>
        <p className={style.number}>66020459-0023</p>
      </header>
      <ul className={style.table}>
        <li className={style.row}>
          <span className={style.name}>Доставка:</span>
          <span className={style.value}>В пункт выдачи</span>
        </li>
        <li className={style.row}>
          <span className={style.name}>Дата доставки:</span>
          <span className={style.value}>1 апреля 2022 в 15:00</span>
        </li>
        <li className={style.row}>
          <span className={style.name}>Состояние:</span>
          <span className={style.value}>Получено</span>
        </li>
      </ul>
      <ul className={style.footer}>
        <li className={style.img}>
          <img src={img1} alt="img1" />
        </li>
        <li className={style.img}>
          <img src={img2} alt="img2" />
        </li>
        <li className={style.img}>
          <img src={img3} alt="img3" />
        </li>
      </ul>
    </Container>
  );
};
