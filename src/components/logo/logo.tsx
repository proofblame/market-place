import React from "react";
import style from "./logo.module.scss";
import logo from "./images/logo-icon.svg";

export const Logo = () => {
  return (
    <div className={style.logo}>
      <img className={style.logoImg} src={logo} alt="RaccoonIT TG Market" />
      <p className={style.logoCaption}>
        <span>RaccoonIT</span>
        <span className={style.logoSubCaption}>TG Market</span>
      </p>
    </div>
  );
};
