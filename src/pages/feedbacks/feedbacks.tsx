import React from 'react';
import style from './feedbacks.module.scss';
import { Container, FeedbackList, Navigation } from '../../components';

export const Feedbacks = () => {
  return (
    <>
      <Container className={style.page}>
        <Navigation title={'Отзывы'} />
      </Container>
      <FeedbackList />
    </>
  );
};
