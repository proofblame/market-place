import React, { FC, useEffect } from 'react';
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
  Support,
} from '../../pages';
// Ипорт компонентов
import { ScrollToTop, Breadcrumbs, Menu, Search } from '../index';
import { useSelector } from '../../services/hooks';

export const App: FC = () => {
  const { isShow } = useSelector((store) => store.search);
  return (
    <section className={style.app}>
      <ScrollToTop />
      <Breadcrumbs />
      {isShow && <Search />}
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
          <Route path='/orderlist' element={<Orderlist />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </div>
    </section>
  );
};
