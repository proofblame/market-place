import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button, CategoryProducts, Container, MainButton, Navigation, ProductsHeader
} from '../../components';
import style from './cart.module.scss';
import HeadPhones from './images/headphones.svg';
import Tick from './images/Tick.svg';

export const Cart = () => {
  return (
    <>
      <Navigation title={'Корзина'} />
      {/* <section className={style.cart}>
        <Container className={style.cartWrapper}>
          <p className={style.cartText}>В корзине пока ничего нет</p>
          <Link to={'/'}>
            <Button
              type={'mainButton'}
              text={'На главную'}
              className={style.cartButton}
            />
          </Link>
        </Container>
      </section> */}
      <section className={style.cart}>
        <div className={style.cartAdress}>
          <Container className={style.cartAdress}>
            <p className={style.cartAdressPoint}>
              Boxberry, ул. Коллонтай, 17к2
            </p>
            <button className={style.cartAdressButton}>Изменить</button>
          </Container>
        </div>
        <br />
        <div className={style.cartSelect}>
          <Container className={style.cartSelectWrapper}>
            <label
              htmlFor='Iport'
              className={`${style.selectAll} ${style.cartSelectPoint}`}
            >
              <input
                type='checkbox'
                className={style.selectCheckbox}
                id='Iport'
              />
              <span className={style.visibleCheckbox}></span>
              <span className={style.checkboxText}>Iport Супер техникс</span>
            </label>
          </Container>
        </div>
        <Container>
          <section className={style.card}>
            <div className={style.cardImgGroup}>
              <img className={style.cardImg} src={HeadPhones} alt='' />
            </div>
            <div className={style.cardContentGroup}>
              <div className={style.cardContentHeader}>
                <div className={style.cardContentText}>
                  <p className={style.cardTitle}>
                    Товар супер мега поможет вам что-то{' '}
                  </p>
                  <div className={style.cardCost}>
                    <span className={style.cardCostCurrent}>499 &#x20bd;</span>
                    <span className={style.cardCostPrevious}>
                      1000 &#x20bd;
                    </span>
                  </div>
                </div>
              </div>
              <span className={style.cardDiscountPercent}>12%</span>
              <p className={style.cardContentSeller}>ООО ИЭТК</p>
            </div>
            <div className={style.cardContentFooter}>
              <div className={style.buttonContainer}>
                <div className={style.button}>
                  <Button
                    type={'favoriteCard'}
                    className={style.favoriteCard}
                  ></Button>
                  <span className={style.buttonText}>В избранное</span>
                </div>
                <div className={style.button}>
                  <Button type={'delete'} className={style.deleteCard}></Button>
                  <span className={style.buttonText}>Удалить</span>
                </div>
              </div>
              <div className={style.cardContentCounter}>
                <Button
                  type={'decrement'}
                  className={style.cardContentButtonDecrement}
                />
                <p className={style.cardContentSum}>99+</p>
                <Button
                  type={'increment'}
                  className={style.cardContentButtonIncrement}
                />
              </div>
            </div>
          </section>
          <section className={style.card}>
            <div className={style.cardImgGroup}>
              <img className={style.cardImg} src={HeadPhones} alt='' />
            </div>
            <div className={style.cardContentGroup}>
              <div className={style.cardContentHeader}>
                <div className={style.cardContentText}>
                  <p className={style.cardTitle}>
                    Товар супер мега поможет вам что-то{' '}
                  </p>
                  <div className={style.cardCost}>
                    <span className={style.cardCostCurrent}>499 &#x20bd;</span>
                    <span className={style.cardCostPrevious}>
                      1000 &#x20bd;
                    </span>
                  </div>
                </div>
              </div>
              <span className={style.cardDiscountPercent}>12%</span>
              <p className={style.cardContentSeller}>ООО ИЭТК</p>
            </div>
            <div className={style.cardContentFooter}>
              <div className={style.buttonContainer}>
                <div className={style.button}>
                  <Button
                    type={'favoriteCard'}
                    className={style.favoriteCard}
                  ></Button>
                  <span className={style.buttonText}>В избранное</span>
                </div>
                <div className={style.button}>
                  <Button type={'delete'} className={style.deleteCard}></Button>
                  <span className={style.buttonText}>Удалить</span>
                </div>
              </div>
              <div className={style.cardContentCounter}>
                <Button
                  type={'decrement'}
                  className={style.cardContentButtonDecrement}
                />
                <p className={style.cardContentSum}>99+</p>
                <Button
                  type={'increment'}
                  className={style.cardContentButtonIncrement}
                />
              </div>
            </div>
          </section>
        </Container>
        <div className={style.cartSelect}>
          <Container className={style.cartSelectWrapper}>
            <p className={style.cartSelectPoint}>Iport Супер техникс</p>
          </Container>
        </div>
        <Container>
          <section className={style.card}>
            <div className={style.cardImgGroup}>
              <img className={style.cardImg} src={HeadPhones} alt='' />
            </div>
            <div className={style.cardContentGroup}>
              <div className={style.cardContentHeader}>
                <div className={style.cardContentText}>
                  <p className={style.cardTitle}>
                    Товар супер мега поможет вам что-то{' '}
                  </p>
                  <div className={style.cardCost}>
                    <span className={style.cardCostCurrent}>499 &#x20bd;</span>
                    <span className={style.cardCostPrevious}>
                      1000 &#x20bd;
                    </span>
                  </div>
                </div>
              </div>
              <span className={style.cardDiscountPercent}>12%</span>
              <p className={style.cardContentSeller}>ООО ИЭТК</p>
            </div>
            <div className={style.cardContentFooter}>
              <div className={style.buttonContainer}>
                <div className={style.button}>
                  <Button
                    type={'favoriteCard'}
                    className={style.favoriteCard}
                  ></Button>
                  <span className={style.buttonText}>В избранное</span>
                </div>
                <div className={style.button}>
                  <Button type={'delete'} className={style.deleteCard}></Button>
                  <span className={style.buttonText}>Удалить</span>
                </div>
              </div>
              <div className={style.cardContentCounter}>
                <Button
                  type={'decrement'}
                  className={style.cardContentButtonDecrement}
                />
                <p className={style.cardContentSum}>99+</p>
                <Button
                  type={'increment'}
                  className={style.cardContentButtonIncrement}
                />
              </div>
            </div>
          </section>
          <section className={style.card}>
            <div className={style.cardImgGroup}>
              <img className={style.cardImg} src={HeadPhones} alt='' />
            </div>
            <div className={style.cardContentGroup}>
              <div className={style.cardContentHeader}>
                <div className={style.cardContentText}>
                  <p className={style.cardTitle}>
                    Товар супер мега поможет вам что-то{' '}
                  </p>
                  <div className={style.cardCost}>
                    <span className={style.cardCostCurrent}>499 &#x20bd;</span>
                    <span className={style.cardCostPrevious}>
                      1000 &#x20bd;
                    </span>
                  </div>
                </div>
              </div>
              <span className={style.cardDiscountPercent}>12%</span>
              <p className={style.cardContentSeller}>ООО ИЭТК</p>
            </div>
            <div className={style.cardContentFooter}>
              <div className={style.buttonContainer}>
                <div className={style.button}>
                  <Button
                    type={'favoriteCard'}
                    className={style.favoriteCard}
                  ></Button>
                  <span className={style.buttonText}>В избранное</span>
                </div>
                <div className={style.button}>
                  <Button type={'delete'} className={style.deleteCard}></Button>
                  <span className={style.buttonText}>Удалить</span>
                </div>
              </div>
              <div className={style.cardContentCounter}>
                <Button
                  type={'decrement'}
                  className={style.cardContentButtonDecrement}
                />
                <p className={style.cardContentSum}>99+</p>
                <Button
                  type={'increment'}
                  className={style.cardContentButtonIncrement}
                />
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
            <Button
              text={'Перейти к оформлению'}
              type={'mainButton'}
              className={style.footerButton}
            ></Button>
            <p className={style.footerText}>
              Способ доставки можно выбрать при оформлении заказа
            </p>
          </Container>
        </section>
        <section className={style.history}>
          <CategoryProducts>
            <ProductsHeader title={'История просмотра'} button={false} />
          </CategoryProducts>
        </section>
        <section className={style.footer}>
          <Container>
            <div className={style.select}>
              <label htmlFor='selectAll' className={style.selectAll}>
                <input
                  type='checkbox'
                  className={style.selectCheckbox}
                  id='selectAll'
                />
                <span className={style.visibleCheckbox}></span>
                <span className={style.checkboxText}>Выделить всё</span>
              </label>
              <p className={style.totalPriceCost}>2299 &#x20bd;</p>
            </div>
            <Button
              text={'Перейти к оформлению'}
              type={'mainButton'}
              className={style.footerButton}
            ></Button>
          </Container>
        </section>
      </section>
    </>
  );
};
