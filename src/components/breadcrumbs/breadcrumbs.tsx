import React from 'react';
import { Container } from '../index';
import style from './breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/', breadcrumb: 'TG Market' },
  { path: '/cart', breadcrumb: 'Корзина' },
  {
    path: '/account',
    breadcrumb: 'Профиль',
  },
  {
    path: '/cart',
    breadcrumb: 'Карточка',
  },
  {
    path: '/brand',
    breadcrumb: 'Магазин',
  },
  {
    path: '/feedbacks',
    breadcrumb: 'Отзывы',
  },
  {
    path: '/favorites',
    breadcrumb: 'Избранное',
  },
  {
    path: '/orderlist',
    breadcrumb: 'История заказов',
  },
];

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });
  return (
    <section className={style.breadcrumbs}>
      <Container>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <span key={match.pathname}>
            <NavLink className={style.breadcrumb} to={match.pathname}>
              {breadcrumb}
              {breadcrumbs.length - 1 !== index && ' / '}
            </NavLink>
          </span>
        ))}
      </Container>
    </section>
  );
};
