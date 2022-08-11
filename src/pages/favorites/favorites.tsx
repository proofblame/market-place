import React from 'react';
import style from './favorites.module.scss';
import {
  Container,
  ProductCards,
  Navigation,
  AddToCart,
  Sort,
  EmptyPage,
} from '../../components';

export const Favorites = () => {
  return (
    <Container className={style.page}>
      <Navigation title={'Избранное'} />
      <Sort />
      <ProductCards />
      <ProductCards />
      <ProductCards />
      {/* <MainButton /> */}
      <EmptyPage page={'избранном'} />
      <AddToCart />
    </Container>
  );
};
