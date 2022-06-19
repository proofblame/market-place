import Button from "../../components/button/button";
import Container from "../../components/container/container";
import Slider from "../../components/slider/slider";
import style from "./card.module.scss";
import cardImg from "./images/card-img.png";
import ratingStars from "./images/rating-stars.png";

export const Card = () => {
  return (
    <Container>
      <section className={style.section}>
        <Button type={"back"} />
        <div className={style.card}>
          <img className={style.img} src={cardImg} alt="" />
          <Slider className={style.slider} />
          <h1 className={style.title}>Бабушкино лечо</h1>
          <p className={style.caption}>Зимняя сказка для Димы</p>
          <div className={style.rating}>
            <div className={style.ratingReview}>
              <div className={style.stars}>
                <img src={ratingStars} alt="" />
              </div>
              <p className={style.review}>22 отзыва</p>
            </div>
            <Button type={"favorite"} />
          </div>
          <div className={style.prices}>
            <span className={style.cost}>499 &#x20bd;</span>
            <span className={style.discount}>699 &#x20bd;</span>
          </div>
          <Button type={"favorite"} />
        </div>
        <section className={style.ownerWrapper}>
          <p className={style.vendor}>Продавец</p>
          <h2 className={style.vendorTitle}>TG Market</h2>
        </section>
        <section className={style.tabs}>
          <article className={style.tab}>
            <input type="radio" id="description" name="tab-group" checked />
            <label htmlFor="description" className={style.tabTitle}>
              Описание
            </label>
            <section className={style.tabContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ipsam veniam vero architecto consequatur neque error,
              perspiciatis tenetur laboriosam? Similique iusto minima at
              molestias officiis deserunt pariatur debitis eveniet assumenda!
            </section>
          </article>
          <article className={style.tab}>
            <input type="radio" id="feature" name="tab-group" checked />
            <label htmlFor="feature" className={style.tabTitle}>
              Описание
            </label>
            <section className={style.tabContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ipsam veniam vero architecto consequatur neque error,
              perspiciatis tenetur laboriosam? Similique iusto minima at
              molestias officiis deserunt pariatur debitis eveniet assumenda!
            </section>
          </article>
        </section>
      </section>
    </Container>
  );
};
