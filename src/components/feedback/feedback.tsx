import React, { useState } from "react";
import style from "./feedback.module.scss";
import starsImg from "./images/stars.png";
import ownerDefault from "./images/owner-default.svg";
import { Container, Button } from "../index";

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
    <li className={style.feedbackItem}>
      <Container>
        <div className={style.feedbackHeader}>
          <div className={style.feedbackData}>
            <img className={style.feedbackRating} src={starsImg} alt="" />
            <span className={style.feedbackDate}>6 июня 2022</span>
          </div>
          <Button type={"complaint"} />
        </div>
        <div className={style.feedbackOwner}>
          <img
            className={style.feedbackOwnerAvatar}
            src={ownerDefault}
            alt=""
          />
          <p className={style.feedbackOwnerName}>Галина О.</p>
        </div>
        <div className={style.feedbackBody}>
          <ul className={style.feedbackBodyList}>
            <li className={style.feedbackBodyItem}>
              <p className={style.feedbackBodyTitle}>Плюсы</p>
              <p className={style.feedbackBodyText}>
                Хорошее качество Классно упакован, быстрая доставка
              </p>
            </li>
            <li className={style.feedbackBodyItem}>
              <p className={style.feedbackBodyTitle}>Минусы</p>
              <p className={style.feedbackBodyText}>
                Хорошее качество Классно упакован, быстрая доставка
              </p>
            </li>
            <li className={style.feedbackBodyItem}>
              <p className={style.feedbackBodyTitle}>Комментарий</p>
              <p className={style.feedbackBodyText}>
                Хорошее качество Классно упакован, быстрая доставка
              </p>
            </li>
          </ul>
        </div>
        {/* Лайки дизлайки */}
        <section className={style.feedbackFooter}>
          <div className={style.ratingButton}>
            <Button
              onClick={handleLike}
              active={likeState.likeActive}
              type={"like"}
            />
            <span
              className={`${style.ratingCounter} ${
                likeState.likeActive && style.active
              }`}>
              {likeCount.like}
            </span>
          </div>
          <div className={style.ratingButton}>
            <Button
              onClick={handleDisLike}
              active={likeState.dislikeActive}
              type={"dislike"}
            />
            <span
              className={`${style.ratingCounter} ${
                likeState.dislikeActive && style.active
              }`}>
              {likeCount.dislike}
            </span>
          </div>
        </section>
      </Container>
    </li>
  );
};
