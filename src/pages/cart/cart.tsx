import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  CategoryProducts,
  Container,
  MainButton,
  Navigation,
  ProductsHeader,
} from '../../components';
import style from './cart.module.scss';
import headPhones from './images/head-phones.svg';
import Tick from './images/Tick.svg';

export const Cart = () => {
  const [checked, setChecked] = useState(false);
  const handleChangeInput = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Navigation title={'Корзина'} button={true} />
      <section className={style.cart}>
        <div className={style.cartAddress}>
          <Container className={style.cartAddressWrapper}>
            <p className={style.cartAddressPoint}>
              Boxberry, ул. Коллонтай, 17к2
            </p>
            <button className={style.cartAddressButton}>Изменить</button>
          </Container>
        </div>
        <Container>
          <section className={style.cartSelect}>
            <input
              type='checkbox'
              id='cartSelect'
              checked={checked}
              onChange={handleChangeInput}
            />
            <span
              className={`${style.cartSelectInput} ${
                checked && style.active
              }`}></span>
            <label className={style.cartSelectLabel} htmlFor='cartSelect'>
              Iport Супер техникс
            </label>
          </section>
        </Container>

        <Container>
          <section className={style.card}>
            <header className={style.cardHeader}>
              <div className={style.cardHeaderCol}>
                <div className={style.cardSelect}>
                  <input
                    type='checkbox'
                    id='cartSelect'
                    checked={checked}
                    onChange={handleChangeInput}
                  />
                  <span
                    className={`${style.cardSelectInput} ${
                      checked && style.active
                    }`}></span>
                </div>
                <img
                  src={headPhones}
                  alt='headPhones'
                  className={style.cardImg}
                />
              </div>
              <div className={`${style.cardHeaderCol} ${style.right}`}>
                <p className={style.cardTitle}>
                  Apple AirPods Pro с шумоподавлением и так далее
                </p>
                <div className={style.cardCost}>
                  <span className={style.cardCostCurrent}>
                    499 000 &#x20bd;
                  </span>
                  <span className={style.cardCostPrevious}>1000&#x20bd;</span>
                </div>
                <span className={style.cardSale}>12%</span>
                <p className={style.cardSaller}>ООО ИЭТК</p>
              </div>
            </header>
            <footer className={style.cardFooter}>
              <section className={style.select}>
                <input
                  type='checkbox'
                  id='cartSelect'
                  checked={checked}
                  onChange={handleChangeInput}
                />
                <Button
                  type={'favoriteCard'}
                  active={checked}
                  className={style.cardFavorite}
                />
                <label className={style.selectLabel} htmlFor='cartSelect'>
                  В избранное
                </label>
              </section>
              <div className={style.cardDelete}>
                <Button type={'delete'} className={style.cardDeleteButton} />
                <span className={style.cardDeleteTitle}>Удалить</span>
              </div>
              <section className={style.counter}>
                <Button type={'decrement'} className={style.counterDecrement} />
                <p className={style.counterNum}>1</p>
                <Button type={'increment'} className={style.counterIncrement} />
              </section>
            </footer>
          </section>
          <section className={style.card}>
            <header className={style.cardHeader}>
              <div className={style.cardHeaderCol}>
                <div className={style.cardSelect}>
                  <input
                    type='checkbox'
                    id='cartSelect'
                    checked={checked}
                    onChange={handleChangeInput}
                  />
                  <span
                    className={`${style.cardSelectInput} ${
                      checked && style.active
                    }`}></span>
                </div>
                <img
                  src={headPhones}
                  alt='headPhones'
                  className={style.cardImg}
                />
              </div>
              <div className={`${style.cardHeaderCol} ${style.right}`}>
                <p className={style.cardTitle}>
                  Apple AirPods Pro с шумоподавлением и так далее
                </p>
                <div className={style.cardCost}>
                  <span className={style.cardCostCurrent}>
                    499 000 &#x20bd;
                  </span>
                  <span className={style.cardCostPrevious}>1000&#x20bd;</span>
                </div>
                <span className={style.cardSale}>12%</span>
                <p className={style.cardSaller}>ООО ИЭТК</p>
              </div>
            </header>
            <footer className={style.cardFooter}>
              <section className={style.select}>
                <input
                  type='checkbox'
                  id='cartSelect'
                  checked={checked}
                  onChange={handleChangeInput}
                />
                <Button
                  type={'favoriteCard'}
                  active={checked}
                  className={style.cardFavorite}
                />
                <label className={style.selectLabel} htmlFor='cartSelect'>
                  В избранное
                </label>
              </section>
              <div className={style.cardDelete}>
                <Button type={'delete'} className={style.cardDeleteButton} />
                <span className={style.cardDeleteTitle}>Удалить</span>
              </div>
              <section className={style.counter}>
                <Button type={'decrement'} className={style.counterDecrement} />
                <p className={style.counterNum}>1</p>
                <Button type={'increment'} className={style.counterIncrement} />
              </section>
            </footer>
          </section>
        </Container>

        {/* <section className={style.total}>
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
              className={style.footerButton}></Button>
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
              className={style.footerButton}></Button>
          </Container>
        </section> */}
      </section>
    </>
  );
};
