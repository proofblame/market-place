import React from "react";
import { Link } from "react-router-dom";
import style from "./button.module.scss";

export const Button = ({ type, className, text, onClick, active }: any) => {
  return (
    <>
      {type === "favorite" && (
        <button className={`${style.favorite} ${className}`}></button>
      )}
      {type === "back" && (
        <button className={`${style.back} ${className}`}></button>
      )}
      {type === "share" && (
        <button className={`${style.share} ${className}`}></button>
      )}
      {type === "complaint" && (
        <button className={`${style.complaint} ${className}`}></button>
      )}
      {type === "like" && (
        <button
          onClick={onClick}
          className={`${style.like} ${active && style.active}`}></button>
      )}
      {type === "dislike" && (
        <button
          onClick={onClick}
          className={`${style.dislike} ${active && style.active}`}></button>
      )}
      {type === "favoriteCard" && (
        <button className={`${style.favoriteCard} ${className}`}></button>
      )}
      {type === "addToCart" && (
        <button onClick={onClick} className={`${style.addToCart} ${className}`}>
          {text || "В корзину"}
        </button>
      )}
      {type === "decrement" && (
        <button onClick={onClick} className={`${style.decrement} ${className}`}>
          -
        </button>
      )}
      {type === "increment" && (
        <button onClick={onClick} className={`${style.increment} ${className}`}>
          +
        </button>
      )}
      {type === "basket" && (
        <button
          onClick={onClick}
          className={`${style.basket} ${className}`}></button>
      )}
      {type === "search" && (
        <button
          onClick={onClick}
          className={`${style.search} ${className}`}></button>
      )}
      {type === "account" && (
        <Link to={"/favorites"} className={`${style.account} ${className}`}>
          <button
            onClick={onClick}
            className={`${style.account} ${className}`}></button>
        </Link>
      )}
      {type === "showMore" && (
        <button onClick={onClick} className={`${style.showMore} ${className}`}>
          {text}
        </button>
      )}
    </>
  );
};
