import React, { useState } from 'react';
import style from './brand.module.scss';
import {
  Button,
  Container,
  ProductCards,
  Category,
  Navigation,
  AddToCart,
} from '../../components';
import banner from './images/brand-banner.png';

export const Brand = () => {
  const [show, setShow] = useState({
    hide: false,
    text: 'Развернуть...',
  });
  const showDescription = () => {
    setShow({
      hide: !show.hide,
      text: show.hide ? 'Развернуть...' : 'Свернуть',
    });
  };
  return (
    <>
      <Container className={style.page}>
        <Navigation title={'Surrealism Diamondsа'} />
        <img src={banner} alt='Surrealism Diamondsа' />
        <p className={style.description}>
          Ювелирный магазин совмещение сна и реальности, абсурдное и
          противоречивое сочетание натуралистических образ...
        </p>

        <Category title={'Новинки'} />
        <ProductCards />
        <Category title={'Скидки'} />
        <ProductCards />
        <Category title={'Товары'} />
        <ProductCards />
        {/* <MainButton /> */}
        <AddToCart />
      </Container>
    </>
  );
};
