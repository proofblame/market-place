import React, { useState } from "react";
import style from "./favorites.module.scss";
import {
  CategoryProducts,
  Container,
  Modal,
  ProductsHeader,
  Button,
} from "../../components";

export const Favorites = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleFilter = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <section className={style.favorites}>
        <Container>
          <ProductsHeader title={"Избранное"} button={false} />
          <p className={style.favoritesText}>В избранном пока ничего нет</p>
          <p className={style.favoritesSubtext}>
            Вы можете начать покупки с главной страницы
          </p>
          <Button
            type={"addToCart"}
            text={"Перейти"}
            className={style.favoritesButton}
          />
        </Container>
      </section>
      <section className={style.favorites}>
        <CategoryProducts>
          <ProductsHeader
            title={"Избранное"}
            button={"Сначала новые"}
            buttonOnClick={toggleFilter}
            buttonClass={style.favoritesFilter}
          />
        </CategoryProducts>
        <div className={style.overlay}>
          <section className={style.modal}></section>
        </div>
        <Modal toggleModal={toggleFilter} modal={openModal}>
          <ul className={style.filterList}>
            <li className={style.filterItem}>
              <button type="button" className={style.filterButton}>
                Сначала новые
              </button>
            </li>
            <li className={style.filterItem}>
              <button type="button" className={style.filterButton}>
                Сначала старые
              </button>
            </li>
            <li className={style.filterItem}>
              <button type="button" className={style.filterButton}>
                Сначала дешёвые
              </button>
            </li>
            <li className={style.filterItem}>
              <button type="button" className={style.filterButton}>
                Сначала дорогие
              </button>
            </li>
            <li className={style.filterItem}>
              <button type="button" className={style.filterButton}>
                По размеру скидки
              </button>
            </li>
          </ul>
        </Modal>
      </section>
    </>
  );
};
