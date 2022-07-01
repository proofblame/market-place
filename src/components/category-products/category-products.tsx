import React from "react";
import { Slider, ProductCards, Container } from "../index";
import style from "./category-products.module.scss";

export const CategoryProducts = ({
  title = "Категория",
  buttonClass,
  buttonText = "См. Все",
  buttonOnClick,
}: any) => {
  return (
    <Container>
      <section className={style.products}>
        <div className={style.productsHeader}>
          <h2 className={style.productsTitle}>{title}</h2>
          <button
            onClick={buttonOnClick}
            className={`${style.productsLink} ${buttonClass}`}>
            {buttonText}
          </button>
        </div>
        <ProductCards className={style.productsCards} />
        <Slider color={"dark"} />
      </section>
    </Container>
  );
};
