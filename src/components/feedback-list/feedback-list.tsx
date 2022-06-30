import React from "react";
import style from "./feedback-list.module.scss";
import { Container, Feedback } from "../index";
import { Link } from "react-router-dom";
import starsImg from "./images/stars.png";

export const FeedbackList = () => {
  return (
    <>
      <section className={style.feedbackList}>
        <Container>
          <div className={style.feedbackListHeader}>
            <p className={style.feedbackListTitle}>
              <span>Отзывы</span>
              <span className={style.feedbackListCounter}>227</span>
            </p>
            <div className={style.feedbackListStars}>
              <img src={starsImg} alt="" />
              <span className={style.feedbackListStarsCounter}>4.85</span>
            </div>
          </div>
          <p className={style.feedbackListCaption}>
            Мы не нашли данный товар среди ваших покупок. Вы можете оставлять
            отзывы только к товарам,которые преобрели
          </p>
        </Container>
      </section>
      <ul className={style.feedbackListList}>
        <Feedback />
        <Feedback />
      </ul>
      <Container>
        <Link to={"/feedbacks"} className={style.link}>
          Смотреть остальные отзывы...
        </Link>
      </Container>
    </>
  );
};
