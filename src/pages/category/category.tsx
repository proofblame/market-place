import React from 'react';
import style from './category.module.scss';
import {
  Container,
  ProductCards,
  Category as CategoryComponent,
  Navigation,
  AddToCart,
  Sort,
} from '../../components';

export const Category = () => {
  return (
    <Container className={style.page}>
      <Navigation title={'Surrealism Diamondsа'} />
      <Sort />
      <CategoryComponent title={'Новинки'} />
      <ProductCards />
      <CategoryComponent title={'Скидки'} />
      <ProductCards />
      <CategoryComponent title={'Товары'} />
      <ProductCards />
      {/* <MainButton /> */}
      <AddToCart />
    </Container>
  );
};
