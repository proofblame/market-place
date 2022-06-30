import React from "react";
import { Slider, ProductCards, Container } from "../index";
import style from "./category-products.module.scss";

export const CategoryProducts = ({ title = "Категория" }: any) => {
  return (
    <Container>
      <section className={style.products}>
        <div className={style.productsHeader}>
          <h2 className={style.productsTitle}>{title}</h2>
          <span className={style.productsLink}>Cм. Все</span>
        </div>
        <ProductCards className={style.productsCards} />
        <Slider color={"dark"} />
      </section>
    </Container>
  );
};
