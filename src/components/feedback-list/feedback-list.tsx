import React from "react";
import style from "./feedback-list.module.scss";
import { Container, Feedback } from "../index";
import { Link } from "react-router-dom";
import starsImg from "./images/stars.png";

export const FeedbackList = () => {
  return (
    <>
      <section className={style.feedbacks}>
        <Container>
          <div className={style.feedbacksHeader}>
            <p className={style.feedbacksTitle}>
              <span>Отзывы</span>
              <span className={style.feedbacksCounter}>227</span>
            </p>
            <div className={style.feedbacksStars}>
              <img src={starsImg} alt="" />
              <span className={style.feedbacksStarsCounter}>4.85</span>
            </div>
          </div>
          <p className={style.feedbacksCaption}>
            Мы не нашли данный товар среди ваших покупок. Вы можете оставлять
            отзывы только к товарам,которые преобрели
          </p>
        </Container>
      </section>
      <ul className={style.reviewList}>
        <Feedback />
        <Feedback />
      </ul>
      <Container>
        <Link to={"/"} className={style.link}>
          Смотреть остальные отзывы...
        </Link>
      </Container>
    </>
  );
};
