import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../index';
import cardImg from './images/headphones.svg';
import rating from './images/star.svg';
import style from './product-card.module.scss';

export const ProductCard = () => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const handleChangeLike = () => {
    setLike(!like);
  };
  return (
    <li className={style.card}>
      <div className={style.cardHeader}>
        <Link to={'/card'}>
          <img className={style.cardImg} src={cardImg} alt='' />
        </Link>
        <Button
          type={'favoriteCard'}
          className={style.favoriteButton}
          active={like}
          onClick={handleChangeLike}
        />
      </div>
      <div className={style.cost}>
        <span className={style.costCurrent}>499 000 &#x20bd;</span>
        <span className={style.costPrevious}>1000 &#x20bd;</span>
        <span className={style.cardDiscountPercent}>12%</span>
      </div>
      <div className={style.cardBody}>
        <p className={style.cardTitle}>
          Товар супер мега Товар супер мегаТовар супер мега Товар супер мега
        </p>

        <div className={style.feedbackContainer}>
          <div className={style.ratingImg}>
            <img src={rating} alt='рейтинг' />
          </div>
          <span className={style.ratingAmount}>4,8</span>
          <span className={style.feedback}>102 отзыва</span>
        </div>
      </div>
      <Button
        type={'mainButton'}
        className={style.addToCartButton}
        onClick={() => navigate('/cart')}
      />
      <div className={style.cardFooter}></div>
    </li>
  );
};
