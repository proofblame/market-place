import React from "react";
import style from "./main.module.scss";
import categoryImg from "./images/category-box-icon.svg";
import promo from "./images/promo.png";
import {
  Container,
  Slider,
  CategoryProducts,
  ProductsHeader,
} from "../../components";

export const Main = () => {
  return (
    <>
      <section className={style.main}>
        <div className={style.mainWrapper}>
          <section className={style.banner}>
            <Container>
              <h1 className={style.bannerTitle}>Main Promo</h1>
              <p className={style.bannerSubTitle}>Магазин от RaccoonIT</p>
            </Container>
          </section>
          <section className={style.category}>
            <Container>
              <h2 className={style.categoryTitle}>Категории</h2>
              <ul className={style.categoryList}>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
              </ul>
              <ul className={style.categoryList}>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
                <li className={style.categoryItem}>
                  <img
                    className={style.categoryImg}
                    src={categoryImg}
                    alt="Категория"
                  />
                  <p className={style.categoryCaption}>Каталог</p>
                </li>
              </ul>
              <Slider color={"dark"} />
            </Container>
          </section>
          <section className={style.promo}>
            <Container>
              <img src={promo} alt="Promo" />
            </Container>
          </section>
          <CategoryProducts>
            <ProductsHeader title={"Новинки"} />
          </CategoryProducts>
          <CategoryProducts>
            <ProductsHeader title={"Скидки"} />
          </CategoryProducts>
          <CategoryProducts>
            <ProductsHeader title={"Товары"} />
          </CategoryProducts>
        </div>
      </section>
    </>
  );
};
