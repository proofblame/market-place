import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Feedback } from '../index';
import style from './feedback-list.module.scss';
import starsImg from './images/stars.png';

export const FeedbackList = () => {
  return (
    <>
      <Container className={style.container}>
        <header className={style.header}>
          <p className={style.title}>Отзывы</p>
          <p className={style.counter}>999 тыс.</p>
        </header>
        <p className={style.caption}>
          Мы не нашли данный товар среди ваших покупок. Вы можете оставлять
          отзывы только к товарам,которые приобрели
        </p>
        <div className={style.stars}>
          <img className={style.img} src={starsImg} alt='' />
          <span className={style.counter}>4.85 / 5</span>
        </div>
      </Container>

      <Container className={style.container}>
        <header className={style.header}>
          <p className={style.title}>Отзывы</p>
          <p className={style.counter}>999 тыс.</p>
        </header>
        <Link to={'/feedbacks'}>
          <Button
            type={'mainButton'}
            text={'Написать отзыв'}
            className={style.button}
          />
        </Link>
        <div className={style.stars}>
          <img className={style.img} src={starsImg} alt='' />
          <span className={style.counter}>4.85 / 5</span>
        </div>
      </Container>

      <ul className={style.list}>
        <Feedback />
        <Feedback />
      </ul>
    </>
  );
};
