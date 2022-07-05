import React from "react";
import style from "./cart.module.scss";
import {
  Button,
  Container,
  MainButton,
  ProductsHeader,
} from "../../components";
import cardImg from "./images/card-img.jpg";

export const Cart = () => {
  return (
    <>
      <section className={style.cart}>
        <Container>
          <ProductsHeader title={"Корзина"} button={false} />
          <p className={style.cartText}>В корзине пока ничего нет</p>
          <p className={style.cartSubtext}>
            Вы можете начать покупки с главной страницы
          </p>
          <Button
            type={"mainButton"}
            text={"Перейти"}
            className={style.cartButton}
          />
        </Container>
      </section>
      <section className={style.cart}>
        <Container>
          <ProductsHeader title={"Корзина"} button={"Кол-во: 200"} />
        </Container>
        <div className={style.cartAdress}>
          <Container className={style.cartAdressWrapper}>
            <p className={style.cartAdressPoint}>Молдовка</p>
            <button className={style.cartAdressButton}>Уточнить адрес</button>
          </Container>
        </div>
        <div className={style.cartSelect}>
          <Container className={style.cartSelectWrapper}>
            <p className={style.cartSelectPoint}>Выделить всё</p>
            <button className={style.cartSelectButton}>
              Удалить выбранное
            </button>
          </Container>
        </div>
        <Container>
          <p className={style.cartDelivery}>Доставка курьером</p>
          <section className={style.card}>
            <div className={style.cardImgGroup}>
              <img className={style.cardImg} src={cardImg} alt="" />
              <Button type={"select"} />
              <span className={style.cardDiscountPercent}>12%</span>
            </div>
            <div className={style.cardContentGroup}>
              <div className={style.cardContentHeader}>
                <div className={style.cardContentText}>
                  <p className={style.cardTitle}>
                    Товар супер мега поможет вам что-то{" "}
                  </p>
                  <div className={style.cardCost}>
                    <span className={style.cardCostCurrent}>499 &#x20bd;</span>
                    <span className={style.cardCostPrevious}>
                      1000 &#x20bd;
                    </span>
                  </div>
                </div>
                <div className={style.cardContentButtons}>
                  <Button
                    type={"favoriteCard"}
                    className={style.cardContentButton}
                  />
                  <Button type={"delete"} />
                </div>
              </div>
              <div className={style.cardContentFooter}>
                <p className={style.cardContentSeller}>ООО ИЭТК</p>
                <div className={style.cardContentCounter}>
                  <Button
                    type={"decrement"}
                    className={style.cardContentButtonDecrement}
                  />
                  <p className={style.cardContentSum}>99+</p>
                  <Button
                    type={"increment"}
                    className={style.cardContentButtonIncrement}
                  />
                </div>
              </div>
            </div>
          </section>
        </Container>
        <section className={style.total}>
          <Container>
            <p className={style.totalTitle}>Ваша корзина</p>
            <ul className={style.totalList}>
              <li className={style.totalItem}>
                <p className={style.totalCount}>Товаров (99)</p>
                <p className={style.totalCountCost}>999 999 млн &#x20bd;</p>
              </li>
              <li className={style.totalItem}>
                <p className={style.totalSale}>Скидка</p>
                <p className={style.totalSaleCost}>- 499 &#x20bd;</p>
              </li>
              <li className={`${style.totalItem} ${style.border}`}>
                <p className={style.totalPrice}>Общая стоимость</p>
                <p className={style.totalPriceCost}>2299 &#x20bd;</p>
              </li>
            </ul>
          </Container>
        </section>
        <section className={style.footer}>
          <Container>
            <Button
              text={"Перейти к оформлению"}
              type={"mainButton"}
              className={style.footerButton}></Button>
          </Container>
        </section>
      </section>
    </>
  );
};
