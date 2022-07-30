import React from 'react';

import { Container, ProductCards, Slider } from '../index';
import style from './category-products.module.scss';

export const CategoryProducts = ({ children }: any) => {
  return (
    <Container>
      <section className={style.products}>
        {children}
        <ProductCards className={style.productsCards} />
        {/* <Slider color={'dark'} /> */}
      </section>
    </Container>
  );
};
