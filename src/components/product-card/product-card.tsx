import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../index";
import cardImg from "./images/headphones.svg";
import rating from "./images/star.svg";
import style from "./product-card.module.scss";

export const ProductCard = () => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const handleChangeLike = () => {
    setLike(!like);
  };
  return (
    <li className={style.card}>
      <header className={style.header}>
        <Link to={"/card"}>
          <img className={style.img} src={cardImg} alt="" />
        </Link>
        <Button
          type={"favoriteCard"}
          className={style.button}
          active={like}
          onClick={handleChangeLike}
        />
      </header>
      <div className={style.body}>
        <span className={style.price}>499 000 &#x20bd;</span>
        <div className={style.flex}>
          <span className={style.cardPrevious}>1000 &#x20bd;</span>
          <span className={style.cardPercent}>12%</span>
        </div>
        <p className={style.title}>
          Товар супер мега Товар супер мегаТовар супер мега Товар супер мега
        </p>
      </div>
      <div className={style.feedback}>
        <div className={style.img}>
          <img src={rating} alt="рейтинг" />
        </div>
        <span className={style.amount}>4,8</span>
        <span className={style.count}>102 отзыва</span>
      </div>
      <Button
        type={"mainButton"}
        className={style.button}
        onClick={() => navigate("/cart")}
      />
    </li>
  );
};
