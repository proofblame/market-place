import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  EmptyPage,
  HorizontalCard,
  Navigation,
  ProductCards,
  ProductsHeader,
} from '../../components';
import style from './cart.module.scss';

export const Cart = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
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
              className={`${style.cartSelectInput} ${checked && style.active}`}
              onClick={handleChangeInput}></span>
            <label className={style.cartSelectLabel} htmlFor='cartSelect'>
              Iport Супер техникс
            </label>
          </section>
        </Container>
        <Container>
          <HorizontalCard />
          <HorizontalCard />
        </Container>
        <section className={style.total}>
          <Container>
            <p className={style.totalTitle}>Ваша корзина</p>
            <div className={style.totalTable}>
              <div className={style.totalTableRow}>
                <p className={style.totalTableRowName}>Товары (521)</p>
                <p className={style.totalGross}>977 126 &#x20bd;</p>
              </div>
              <div className={style.totalTableRow}>
                <p className={style.totalTableRowName}>Скидка</p>
                <p className={style.totalSale}>- 437 043 &#x20bd;</p>
              </div>
              <div className={`${style.totalTableRow} ${style.hr}`}>
                <p className={style.totalNetName}>Общая стоимость</p>
                <p className={style.totalNet}>540 083 &#x20bd;</p>
              </div>
            </div>
            <Button
              type={'mainButton'}
              text={'Перейти к оформлению'}
              className={style.totalButton}
            />
            <p className={style.totalSubtitle}>
              Способ доставки можно выбрать при оформлении заказа
            </p>
          </Container>
        </section>

        <Container>
          <EmptyPage page={'корзине'} />
        </Container>
        <Container>
          <ProductsHeader title={'История просмотров'} />
          <ProductCards />
        </Container>
      </section>
    </>
  );
};
