import React from "react";
import style from "./button.module.scss";

const Button = ({ type, className }: any) => {
  return (
    <>
      {type === "favorite" && (
        <button className={`${style.favorite} ${className}`}></button>
      )}
      {type === "back" && (
        <button className={`${style.back} ${className}`}></button>
      )}
      {type === "addToCard" && (
        <button className={`${style.addToCard} ${className}`}>В корзину</button>
      )}
    </>
  );
};

export default Button;
