import React from "react";
import style from "./confirm-popup.module.scss";

export const ConfirmPopup = ({ title, onclick }: any) => {
  return (
    <div className={style.popup}>
      <p className={style.popupTitle}>{title}</p>
      <div className={style.popupButtons}>
        <button
          className={`${style.popupButton} ${style.popupButtonNo}`}
          onClick={onclick}>
          Нет
        </button>
        <button
          className={`${style.popupButton} ${style.popupButtonYes}`}
          onClick={onclick}>
          Да
        </button>
      </div>
    </div>
  );
};
