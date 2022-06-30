import React from "react";
import { Container, Button } from "../index";
import style from "./header.module.scss";
import logo from "./images/logo-icon.svg";

export const Header = () => {
  return (
    <section className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.logo}>
            <img
              className={style.logoImg}
              src={logo}
              alt="RaccoonIT TG Market"
            />
            <p className={style.logoCaption}>
              <span>RaccoonIT</span>
              <span className={style.logoSubCaption}>TG Market</span>
            </p>
          </div>
          <nav className={style.nav}>
            <Button type={"basket"} />
            <Button type={"search"} />
            <Button type={"account"} />
          </nav>
        </div>
      </Container>
    </section>
  );
};
