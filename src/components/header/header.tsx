import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Button, Logo } from "../";
import style from "./header.module.scss";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <section className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.logo}>
            {pathname === "/" ? (
              <Logo />
            ) : (
              <Link to={"/card"}>
                <Button type="back" />
              </Link>
            )}
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
