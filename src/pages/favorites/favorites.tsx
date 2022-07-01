import React, { useState } from "react";
import style from "./favorites.module.scss";
import { CategoryProducts, Modal } from "../../components";

export const Favorites = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleFilter = () => {
    setOpenModal(!openModal);
  };
  return (
    <section className={style.favorites}>
      <CategoryProducts
        buttonClass={style.favoritesFilter}
        buttonText={"Сначала новые"}
        buttonOnClick={toggleFilter}
      />
      <div className={style.overlay}>
        <section className={style.modal}></section>
      </div>
      <Modal toggleModal={toggleFilter} modal={openModal}>
        <div className={style.popup}>
          <p className={style.popupTitle}>Удалить товар?</p>
          <div className={style.popupButtons}>
            <button
              className={`${style.popupButton} ${style.popupButtonNo}`}
              onClick={toggleFilter}>
              Нет
            </button>
            <button
              className={`${style.popupButton} ${style.popupButtonYes}`}
              onClick={toggleFilter}>
              Да
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
