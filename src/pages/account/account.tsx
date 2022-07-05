import React from "react";
import style from "./account.module.scss";
import { Container } from "../../components";
import userPhoto from "./images/account-user-photo.png";
import { Link } from "react-router-dom";

export const Account = () => {
  return (
    <Container>
      <section className={style.account}>
        <h1 className={style.accountTitle}>Аккаунт</h1>
        <div className={style.data}>
          <img className={style.dataImg} src={userPhoto} alt="userPhoto" />
          <div className={style.dataInfo}>
            <p className={style.dataName}>Slavskaya Ida</p>
            <p className={style.dataId}>Id: 12385768594</p>
          </div>
        </div>
        <ul className={style.navList}>
          <li className={`${style.navItem} ${style.adress}`}>
            <Link to={"/"} className={style.navLink}>
              Адреса
            </Link>
          </li>
          <li className={`${style.navItem} ${style.favorites}`}>
            <Link to={"/favorites"} className={style.navLink}>
              Избранное
            </Link>
          </li>
          <li className={`${style.navItem} ${style.support}`}>
            <Link to={"/"} className={style.navLink}>
              Помощь
            </Link>
          </li>
          <li className={`${style.navItem} ${style.historyView}`}>
            <Link to={"/"} className={style.navLink}>
              История просмотра
            </Link>
          </li>
          <li className={`${style.navItem} ${style.historyOrders}`}>
            <Link to={"/orderlist"} className={style.navLink}>
              История заказов
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
};
