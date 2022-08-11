import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  EmptyPage,
  HorizontalCard,
  Navigation,
  ProductCards,
  Category,
} from '../../components';
import style from './cart.module.scss';

export const Cart = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleChangeInput = () => {
    setChecked(!checked);
  };
  return (
    <section className={style.page}>
      <Navigation title={'Корзина'}>
        <Button type={'delete'} className={style.delete} />
      </Navigation>
      <Container className={style.address}>
        <p className={style.point}>Boxberry, ул. Коллонтай, 17к2</p>
        <button className={style.button}>Изменить</button>
      </Container>
      <Container className={style.brand}>
        <section className={style.select}>
          <input
            type='checkbox'
            id='cartSelect'
            checked={checked}
            onChange={handleChangeInput}
          />
          <span
            className={`${style.pseudo} ${checked && style.active}`}
            onClick={handleChangeInput}></span>
          <label className={style.label} htmlFor='cartSelect'>
            Iport Супер техникс
          </label>
        </section>
        <HorizontalCard />
        <HorizontalCard />
      </Container>
      <section className={style.total}>
        <Container className={style.wrapper}>
          <p className={style.title}>Ваша корзина</p>
          <div className={style.table}>
            <div className={style.row}>
              <p className={style.name}>Товары (521)</p>
              <p className={style.gross}>977 126 &#x20bd;</p>
            </div>
            <div className={style.row}>
              <p className={style.name}>Скидка</p>
              <p className={style.sale}>- 437 043 &#x20bd;</p>
            </div>
          </div>
          <div className={style.net}>
            <div className={style.row}>
              <p className={style.title}>Общая стоимость</p>
              <p className={style.value}>540 083 &#x20bd;</p>
            </div>
            <div className={style.col}>
              <Button
                type={'mainButton'}
                text={'Перейти к оформлению'}
                className={style.button}
              />
              <p className={style.subtitle}>
                Способ доставки можно выбрать при оформлении заказа
              </p>
            </div>
          </div>
        </Container>
      </section>
      <EmptyPage page={'корзине'} />
      <Container>
        <Category title={'История просмотров'} />
        <ProductCards />
      </Container>
      <Container className={style.footer}>
        <div className={style.flex}>
          <section className={style.select}>
            <input
              type='checkbox'
              id='cartSelect'
              checked={checked}
              onChange={handleChangeInput}
            />
            <span
              className={`${style.pseudo} ${checked && style.active}`}
              onClick={handleChangeInput}></span>
            <label className={style.label} htmlFor='cartSelect'>
              Выделить всё
            </label>
          </section>
          <p className={style.price}>540 083 &#x20bd;</p>
        </div>
        <Button
          type={'mainButton'}
          className={style.button}
          text={'Перейти к оформлению'}
        />
      </Container>
    </section>
  );
};
