import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../index';
import cardImg from './images/card-img.jpg';
import style from './product-card.module.scss';

export const ProductCard = () => {
  return (
    <Link to={'/card'}>
      <li className={style.card}>
        <div className={style.cardHeader}>
          <img className={style.cardImg} src={cardImg} alt='' />
          <Button type={'favoriteCard'} className={style.favoriteButton} />
          <span className={style.cardDiscountPercent}>12%</span>
        </div>
        <div className={style.cardBody}>
          <p className={style.cardTitle}>
            Товар супер мега Товар супер мегаТовар супер мега Товар супер мега{' '}
          </p>
          <div className={style.cost}>
            <span className={style.costCurrent}>499 &#x20bd;</span>
            <span className={style.costPrevious}>1000 &#x20bd;</span>
          </div>
          <Button type={'mainButton'} className={style.addToCartButton} />
        </div>
        <div className={style.cardFooter}></div>
      </li>
    </Link>
  );
};
