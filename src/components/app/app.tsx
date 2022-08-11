import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
// Импорт стилей
import style from './app.module.scss';
// Импорт страниц
import {
  Card,
  Main,
  Brand,
  Feedbacks,
  Favorites,
  Account,
  Cart,
  Orderlist,
  Category,
  Categories,
} from '../../pages';
// Ипорт компонентов
import { ScrollToTop, Breadcrumbs, Menu } from '../index';

export const App: FC = () => {
  return (
    <section className={style.app}>
      <ScrollToTop />
      <Breadcrumbs />
      <div className={style.wrapper}>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/card' element={<Card />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/feedbacks' element={<Feedbacks />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orderlist' element={<Orderlist />} />
          <Route path='/category' element={<Category />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </div>
    </section>
  );
};
