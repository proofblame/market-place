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
            <p className={style.id}>{window.screen.width}</p>
            <p className={style.id}>{window.outerWidth}</p>
          </div>

        </Container>
        <ul className={style.body}>
          <li className={gray}>
            <Container>
            <Link to={"/favorites"} >
              <p className={favorite}>Избранное: 39</p>
              </Link>
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
              <Link to={"/support"} >
                <p className={support}>Помощь</p>
              </Link>
            </Container>
          </li>
          <li className={gray}>
            <Container>
            <Link to={"/orderlist"} >
              <p className={orders}>Заказы</p>
              </Link>
            </Container>
          </li>
        </ul>
      </div>
      <Container className={style.header}>
            <p className={style.id}>Размер экрана</p>
            <p className={style.id}>{window.screen.width} х {window.screen.height}</p>
        </Container>
        <Container className={style.header}>
            <p className={style.id}>Доступный размер экрана</p>
            <p className={style.id}>{window.outerWidth} x {window.screen.availHeight}</p>
        </Container>
        <Container className={style.header}>
            <p className={style.id}>Внешний размер окна</p>
            <p className={style.id}>{window.outerWidth} x {window.outerHeight}</p>
        </Container>
        <Container className={style.header}>
            <p className={style.id}>Внутренний размер окна</p>
            <p className={style.id}>{window.innerWidth} x {window.innerHeight}</p>
        </Container>
        <Container className={style.header}>
            <p className={style.id}>Внутренний размер окна без полос прокрутки</p>
            <p className={style.id}>{document.documentElement.clientWidth} x {document.documentElement.clientHeight}</p>
        </Container>
        <Container className={style.header}>
            <p className={style.id}> Размер веб-страницы</p>
            <p className={style.id}>{document.documentElement.scrollWidth} x {document.documentElement.scrollHeight}</p>
        </Container>
    </section>
  );
};
