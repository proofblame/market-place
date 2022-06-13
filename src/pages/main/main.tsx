import React from "react";
import style from "./main.module.scss";
import Container from "../../components/container/container";
import banner from "../../images/banner.png";
import cardImg from "../../images/card-image.jpg";

const Main = () => {
  return (
    <section className={style.main}>
      <Container>
        <div className={style.mainWrapper}>
          <section className={style.banner}>
            <h1 className={style.bannerTitle}>TG Market</h1>
            <p className={style.bannerSubtitle}>Магазин от RaccoonIT</p>
          </section>
          <p className={style.description}>
            Ле́чо — классическое блюдо венгерской кухни, весьма распространённое
            в странах Европы. Как и любое популярное блюдо, не имеет точной
            рецептуры, так как все готовят его по-своему. Неизменным и
            обязательным является наличие трёх видов овощей: сладкий перец,
            помидоры и репчатый лук.
          </p>
          <section className={style.category}>
            <h2 className={style.categoryTitle}>Категория</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзину</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <button className={style.moreButton}>
                  Смотреть все &#8594;
                </button>
              </li>
            </ul>
            <section className={style.slider}>
              <ul className={style.sliderList}>
                <li className={style.sliderItem}></li>
                <li className={style.sliderItem}></li>
                <li className={style.sliderItem}></li>
              </ul>
            </section>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Main;
