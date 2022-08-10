import React, { useState } from 'react';

import { Button, Container } from '../index';
import style from './feedback.module.scss';
import ownerDefault from './images/owner-default.png';
import starsImg from './images/stars.png';

export const Feedback = () => {
  const [likeState, setLikeState] = useState({
    likeActive: false,
    dislikeActive: false,
  });
  const [likeCount, setCountLike] = useState({
    like: 300,
    dislike: 1000,
  });

  const setLike = () => {
    setLikeState({
      ...likeState,
      dislikeActive: false,
      likeActive: !likeState.likeActive,
    });
  };

  const setDisLike = () => {
    setLikeState({
      ...likeState,
      likeActive: false,
      dislikeActive: !likeState.dislikeActive,
    });
  };

  const handleLike = () => {
    if (likeState.dislikeActive) {
      setDisLike();
      setLike();
    }
    if (likeState.likeActive) {
      setCountLike({
        ...likeCount,
        like: likeCount.like - 1,
      });
    } else {
      setCountLike({
        ...likeCount,
        like: likeCount.like + 1,
      });
      if (likeState.dislikeActive) {
        setCountLike({
          dislike: likeCount.dislike - 1,
          like: likeCount.like + 1,
        });
      }
    }

    setLike();
  };
  const handleDisLike = () => {
    if (likeState.likeActive) {
      setLike();
      setDisLike();
    }
    if (likeState.dislikeActive) {
      setCountLike({
        ...likeCount,
        dislike: likeCount.dislike - 1,
      });
    } else {
      setCountLike({
        ...likeCount,
        dislike: likeCount.dislike + 1,
      });
      if (likeState.likeActive) {
        setCountLike({
          dislike: likeCount.dislike + 1,
          like: likeCount.like - 1,
        });
      }
    }
    setDisLike();
  };
  return (
    <li>
      <Container className={style.container}>
        <header className={style.header}>
          <img className={style.rating} src={starsImg} alt='' />
          <span className={style.date}>6 июня 2022</span>
        </header>
        <div className={style.owner}>
          <img className={style.avatar} src={ownerDefault} alt='' />
          <p className={style.name}>
            Пользователь предпочел скрыть свои данные
          </p>
        </div>
        <div className={style.body}>
          <ul className={style.list}>
            <li className={style.item}>
              <p className={style.subtitle}>Плюсы</p>
              <p className={style.text}>
                Хорошее качество Классно упакован, быстрая доставка
              </p>
            </li>
            <li className={style.item}>
              <p className={style.subtitle}>Минусы</p>
              <p className={style.text}>
                Хорошее качество Классно упакован, быстрая доставка
              </p>
            </li>
          </ul>
        </div>
        {/* Лайки дизлайки */}
        <section className={style.footer}>
          <div className={style.voting}>
            <span className={style.question}>Вам помог этот отзыв?</span>
            <ul className={style.buttons}>
              <li className={style.button}>
                <Button
                  onClick={handleLike}
                  active={likeState.likeActive}
                  type={'like'}
                />
                <span
                  className={`${style.counter} ${
                    likeState.likeActive && style.active
                  }`}>
                  {likeCount.like}
                </span>
              </li>
              <li className={style.button}>
                <Button
                  onClick={handleDisLike}
                  active={likeState.dislikeActive}
                  type={'dislike'}
                />
                <span
                  className={`${style.counter} ${
                    likeState.dislikeActive && style.active
                  }`}>
                  {likeCount.dislike}
                </span>
              </li>
            </ul>
          </div>
          <Button type={'complaint'} />
        </section>
      </Container>
    </li>
  );
};
