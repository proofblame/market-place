import React from "react";
import style from "./account.module.scss";
import { Container, Navigation } from "../../components";
import userPhoto from "./images/account-user-photo.png";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const Account = () => {
  const favorite = classNames(style.withArrow, style.favorite);
  const address = classNames(style.withArrow, style.address);
  const support = classNames(style.withArrow, style.support);
  const orders = classNames(style.withArrow, style.orders);
  const gray = classNames(style.row, style.grayBg);

  return (
    <section className={style.page}>
      <Container>
        <Navigation title={"Аккаунт"} />
      </Container>
      <div className={style.list}>
        <Container className={style.header}>
          <div className={style.img}>
            <img src={userPhoto} alt="userPhoto" />
          </div>
          <div className={style.info}>
            <h2 className={style.name}>Slavskaya Ida</h2>
            <p className={style.id}>Id: 12385768594</p>
          </div>
        </Container>
        <ul className={style.body}>
          <li className={gray}>
            <Container>
              <p className={favorite}>Избранное: 39</p>
            </Container>
          </li>
          <li className={style.row}>
            <Container className={style.flex}>
              <span>Мои финансы</span>
              <Link to={"/"} className={style.link}>
                Все
              </Link>
            </Container>
          </li>
          <li className={gray}>
            <Container>
              <p className={style.withArrow}>Стоимость доставки</p>
            </Container>
          </li>
          <li className={style.row}>
            <Container className={style.flex}>
              <span>Адреса</span>
              <Link to={"/"} className={style.link}>
                Все
              </Link>
            </Container>
          </li>
          <li className={gray}>
            <Container>
              <p className={address}>Москва ул. Горбачёва д.32 кв.43 </p>
            </Container>
          </li>
        </ul>
        <ul className={style.footer}>
          <li className={gray}>
            <Container>
              <p className={support}>Помощь</p>
            </Container>
          </li>
          <li className={gray}>
            <Container>
              <p className={orders}>Заказы</p>
            </Container>
          </li>
        </ul>
      </div>
    </section>
  );
};
