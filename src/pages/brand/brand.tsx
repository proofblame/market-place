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
import { Link } from 'react-router-dom';

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

        <Category title={'Новинки'} to={'/category'} />
        <ProductCards />

        <Category title={'Скидки'} to={'/category'} />
        <ProductCards />

        <Category title={'Товары'} to={'/category'} />
        <ProductCards />

        {/* <MainButton /> */}
        <AddToCart />
      </Container>
    </>
  );
};
