import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Feedback } from '../index';
import style from './feedback-list.module.scss';
import starsImg from './images/stars.png';

export const FeedbackList = () => {
  return (
    <>
      <section className={style.feedbackList}>
        <Container>
          <div className={style.feedbackListHeader}>
            <p className={style.feedbackListTitle}>
              <span>Отзывы</span>
              <span className={style.feedbackListCounter}>999 тыс.</span>
            </p>
          </div>
          <p className={style.feedbackListCaption}>
            Мы не нашли данный товар среди ваших покупок. Вы можете оставлять
            отзывы только к товарам,которые приобрели
          </p>
          <div className={style.feedbackListStars}>
            <img
              className={style.feedbackListStarsImage}
              src={starsImg}
              alt=''
            />
            <span className={style.feedbackListStarsCounter}>4.85 / 5</span>
          </div>
        </Container>
      </section>
      <section className={style.feedbackList}>
        <Container>
          <div className={style.feedbackListHeader}>
            <p className={style.feedbackListTitle}>
              <span>Отзывы</span>
              <span className={style.feedbackListCounter}>999 тыс.</span>
            </p>
          </div>
          <Link to={'/feedbacks'}>
            <Button
              type={'mainButton'}
              text={'Написать отзыв'}
              className={style.mainButton}
            />
          </Link>
          <div className={style.feedbackListStars}>
            <img
              className={style.feedbackListStarsImage}
              src={starsImg}
              alt=''
            />
            <span className={style.feedbackListStarsCounter}>4.85 / 5</span>
          </div>
        </Container>
      </section>
      <ul className={style.feedbackListList}>
        <Feedback />
        <Feedback />
      </ul>
    </>
  );
};
