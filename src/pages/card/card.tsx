import React from "react";
import Button from "../../components/button/button";
import Container from "../../components/container/container";
import style from "./card.module.scss";
import cardImg from "./images/card-img.png";
import starsImg from "./images/stars.png";

export const Card = () => {
  return (
    <section className={style.section}>
      <nav className={style.nav}>
        <Container className={style.navWrapper}>
          <Button type={"back"} />
          <div className={style.navRightColumn}>
            <Button type={"favorite"} />
            <Button type={"share"} />
          </div>
        </Container>
      </nav>
      <div className={style.imageGroup}>
        <ul className={style.imageList}>
          <li className={style.imageItem}>
            <img src={cardImg} alt="" className={style.image} />
          </li>
        </ul>
        <ul className={style.dots}>
          <li className={style.dot}></li>
          <li className={`${style.dot} ${style.active}`}></li>
          <li className={style.dot}></li>
        </ul>
      </div>
      <div className={style.cardBody}>
        <Container>
          <h1 className={style.title}>
            Сувенир банка "Мужчине, у которого есть всё" внутри: подтяжки
            10х7,5х7,5 см. Вид: Оригинальные, Сувенирная банка.{" "}
          </h1>
          <div className={style.priceBlock}>
            <div className={style.priceWrapper}>
              <div className={style.pricePrevious}>1000 &#x20bd;</div>
              <div className={style.stars}>
                <div className={style.starsNumber}>
                  <img src={starsImg} alt="" />
                </div>
                <div className={style.starsCount}>22 отзыва</div>
              </div>
            </div>

            <p className={style.priceCurrent}>499 &#x20bd;</p>
          </div>
        </Container>
        <section className={style.tabs}>
          <Container>
            <div className={style.tabsHeader}>
              <input
                className={style.tabsInput}
                type="radio"
                name="caption"
                id="caption-tab"
                value=""
                checked
              />
              <label className={style.tabsLabel} htmlFor="caption-tab">
                Описание
              </label>
              <input
                className={style.tabsInput}
                type="radio"
                name="feature"
                id="feature-tab"
                value=""
              />
              <label className={style.tabsLabel} htmlFor="feature-tab">
                Характеристика
              </label>
            </div>
            <div className={style.tabsContent}>
              <div className={style.captionContent}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quod. Necessitatibus sed ab ex voluptates saepe vitae
                officiis consequuntur possimus dolorem quos repudiandae omnis
                voluptatibus, deserunt, commodi at explicabo veniam.
              </div>
              <div className={style.featureContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                minus illum sapiente nostrum ut? Maxime, corporis. Nesciunt
                aliquam id impedit rem odio dolorem soluta repellendus quisquam
                non, saepe, vero sit! Necessitatibus eos iste dolore commodi
                aliquid voluptate itaque! Ratione dolorum natus explicabo
                tempora veritatis, error laborum aspernatur nihil? Aspernatur
                corporis soluta autem. Autem explicabo ex numquam quasi repellat
                fugit ipsum!
              </div>
            </div>
          </Container>
        </section>
        <section className={style.ownerData}>
          <p className={style.ownerStatus}>Магазин от RaccoonIT</p>
          <p className={style.ownerName}>TG Market</p>
        </section>
      </div>
    </section>
  );
};
