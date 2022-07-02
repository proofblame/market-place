import React from "react";
import style from "./products-header.module.scss";

export const ProductsHeader = ({
  title,
  button = "См. Все",
  buttonOnClick,
  buttonClass,
}: any) => {
  return (
    <div className={style.productsHeader}>
      <h2 className={style.productsTitle}>{title}</h2>
      {button && (
        <button
          onClick={buttonOnClick}
          className={`${style.productsLink} ${buttonClass}`}>
          {button}
        </button>
      )}
    </div>
  );
};
