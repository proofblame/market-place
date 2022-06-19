import React from "react";
import style from "./button.module.scss";

const Button = ({ type }: any) => {
  return (
    <>
      {type === "favorite" && <button className={style.favorite}></button>};
      {type === "back" && <button className={style.back}></button>}
    </>
  );
};

export default Button;
