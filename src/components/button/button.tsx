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
        <button
          onClick={onClick}
          className={`${style.back} ${className}`}></button>
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
      {type === "mainButton" && (
        <button
          onClick={onClick}
          className={`${style.mainButton} ${className}`}>
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
        <Link to={"/cart"} className={`${style.basket} ${className}`}>
          <button
            onClick={onClick}
            className={`${style.basket} ${className}`}></button>
        </Link>
      )}
      {type === "search" && (
        <button
          onClick={onClick}
          className={`${style.search} ${className}`}></button>
      )}
      {type === "account" && (
        <Link to={"/account"} className={`${style.account} ${className}`}>
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
      {type === "delete" && (
        <button onClick={onClick} className={`${style.delete} ${className}`}>
          {text}
        </button>
      )}
      {type === "select" && (
        <button onClick={onClick} className={`${style.select} ${className}`}>
          {text}
        </button>
      )}
    </>
  );
};
