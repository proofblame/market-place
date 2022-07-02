import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Button, Logo } from "../";
import style from "./header.module.scss";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <section className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.logo}>
            {pathname === "/" ? (
              <Logo />
            ) : (
              <Button type="back" onClick={() => navigate(-1)} />
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
