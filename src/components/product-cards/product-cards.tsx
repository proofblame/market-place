import React from "react";
import style from "./product-cards.module.scss";
import { ProductCard } from "../index";
import classnames from "classnames";

export const ProductCards = ({ className }: any) => {
  let classNames = classnames(className, style.productCards);
  return (
    <ul className={classNames}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ul>
  );
};
