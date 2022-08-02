import React, { useState } from 'react';
import style from './favorites.module.scss';
import {
  Container,
  Modal,
  ProductsHeader,
  Button,
  Navigation,
  EmptyPage,
  ProductCards,
} from '../../components';

export const Favorites = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleFilter = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <section className={style.favorites}>
        <Navigation title={'Избранное'} button={false} />
        <Container>
          <EmptyPage page={'избранном'} />
        </Container>
        <Container>
          <ProductsHeader title={'История просмотров'} />
          <ProductCards />
        </Container>
      </section>
    </>
  );
};
