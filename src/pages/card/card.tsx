import React, { useState } from "react";
import style from "./card.module.scss";
import cardImg from "./images/card-img.png";
import starsImg from "./images/stars.png";
import ownerDefault from "./images/owner-default.svg";
import { Link } from "react-router-dom";
import {
  Slider,
  Container,
  Button,
  ProductCards,
} from "../../components/index";

export const Card = () => {
  const [checked, setChecked] = useState("1");
  const [addToCart, setAddToCard] = useState({
    open: false,
    count: 0,
  });
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
  const decrementCount = () => {
    if (addToCart.count === 1) {
      setAddToCard({
        ...addToCart,
        open: false,
      });
    } else {
      setAddToCard({
        ...addToCart,
        count: addToCart.count - 1,
      });
    }
  };
  const incrementCount = () => {
    setAddToCard({
      ...addToCart,
      count: addToCart.count + 1,
    });
  };

  const addToCartMain = () => {
    if (addToCart.count === 0) {
      setAddToCard({
        count: addToCart.count + 1,
        open: true,
      });
    } else {
      setAddToCard({
        ...addToCart,
        open: true,
      });
    }
  };
  const changeRadioInput = (e: any) => {
    const { value } = e.target;
    setChecked(value);
  };
  return (
    <section className={style.section}>
      <nav className={style.nav}>
        <Container className={style.navWrapper}>
          <Link to={"/"}>
            <Button type={"back"} />
          </Link>
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
        <Slider color={"light"} className={style.dots} />
      </div>
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
              value="1"
              checked={checked === "1" ? true : false}
              onChange={changeRadioInput}
            />
            <label
              className={`${style.tabsLabel} ${
                checked === "1" && style.active
              }`}
              htmlFor="caption-tab">
              Описание
            </label>
            <input
              className={style.tabsInput}
              type="radio"
              name="feature"
              id="feature-tab"
              value="2"
              checked={checked === "2" ? true : false}
              onChange={changeRadioInput}
            />
            <label
              className={`${style.tabsLabel} ${
                checked === "2" && style.active
              }`}
              htmlFor="feature-tab">
              Характеристика
            </label>
          </div>
          <div className={style.tabsContent}>
            {checked === "1" && (
              <div className={style.captionContent}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quod. Necessitatibus sed ab ex voluptates saepe vitae
                officiis consequuntur possimus dolorem quos repudiandae omnis
                voluptatibus, deserunt, commodi at explicabo veniam.
              </div>
            )}
            {checked === "2" && (
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
            )}
          </div>
        </Container>
      </section>
      <section className={style.owner}>
        <Container>
          <p className={style.ownerStatus}>Магазин от RaccoonIT</p>
          <p className={style.ownerName}>TG Market</p>
        </Container>
      </section>
      <section className={style.reviews}>
        <Container>
          <div className={style.reviewsHeader}>
            <p className={style.reviewsTitle}>
              <span>Отзывы</span>
              <span className={style.reviewsCounter}>227</span>
            </p>
            <div className={style.reviewsStars}>
              <img src={starsImg} alt="" />
              <span className={style.reviewsStarsCounter}>4.85</span>
            </div>
          </div>
          <p className={style.reviewsCaption}>
            Мы не нашли данный товар среди ваших покупок. Вы можете оставлять
            отзывы только к товарам,которые преобрели
          </p>
        </Container>
      </section>
      <ul className={style.reviewList}>
        <li className={style.reviewItem}>
          <Container>
            <div className={style.reviewHeader}>
              <div className={style.reviewData}>
                <img className={style.reviewRating} src={starsImg} alt="" />
                <span className={style.reviewDate}>6 июня 2022</span>
              </div>
              <Button type={"complaint"} />
            </div>
            <div className={style.reviewOwner}>
              <img
                className={style.reviewOwnerAvatar}
                src={ownerDefault}
                alt=""
              />
              <p className={style.reviewOwnerName}>Галина О.</p>
            </div>
            <div className={style.reviewBody}>
              <ul className={style.reviewBodyList}>
                <li className={style.reviewBodyItem}>
                  <p className={style.reviewBodyTitle}>Плюсы</p>
                  <p className={style.reviewBodyText}>
                    Хорошее качество Классно упакован, быстрая доставка
                  </p>
                </li>
                <li className={style.reviewBodyItem}>
                  <p className={style.reviewBodyTitle}>Минусы</p>
                  <p className={style.reviewBodyText}>
                    Хорошее качество Классно упакован, быстрая доставка
                  </p>
                </li>
                <li className={style.reviewBodyItem}>
                  <p className={style.reviewBodyTitle}>Комментарий</p>
                  <p className={style.reviewBodyText}>
                    Хорошее качество Классно упакован, быстрая доставка
                  </p>
                </li>
              </ul>
            </div>
            {/* Лайки дизлайки */}
            <section className={style.reviewFooter}>
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
      </ul>
      <Container>
        <Link to={"/"} className={style.link}>
          Смотреть остальные отзывы...
        </Link>
        <p className={style.promo}>Промо товары</p>
        <ProductCards className={style.productsCards} />
        <div className={style.footer}>
          <Container>
            <div className={style.addToCartWrapper}>
              <Button
                type={"addToCart"}
                text={addToCart.open && "Перейти в корзину"}
                className={style.addToCartButton}
                onClick={addToCartMain}
              />
              {addToCart.open && (
                <div className={style.addToCartCounter}>
                  <Button
                    type={"decrement"}
                    className={style.addToCartButtonDecrement}
                    onClick={decrementCount}
                  />
                  <p className={style.addToCartSum}>{addToCart.count}</p>
                  <Button
                    type={"increment"}
                    className={style.addToCartButtonIncrement}
                    onClick={incrementCount}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
};
