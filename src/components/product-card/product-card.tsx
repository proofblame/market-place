import React from "react";
import style from "./product-card.module.scss";
import cardImg from "./images/card-img.jpg";
import { Button } from "../index";

export const ProductCard = () => {
  return (
    <li className={style.card}>
      <div className={style.cardHeader}>
        <img className={style.cardImg} src={cardImg} alt="" />
        <Button type={"favoriteCard"} className={style.favoriteButton} />
        <span className={style.cardDiscountPercent}>12%</span>
      </div>
      <div className={style.cardBody}>
        <p className={style.cardTitle}>
          Товар супер мега Товар супер мегаТовар супер мега Товар супер мега{" "}
        </p>
        <div className={style.cost}>
          <span className={style.costCurrent}>499 &#x20bd;</span>
          <span className={style.costPrevious}>1000 &#x20bd;</span>
        </div>
        <Button type={"addToCart"} className={style.addToCartButton} />
      </div>
    </li>
  );
};
