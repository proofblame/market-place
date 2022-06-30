import React from "react";
import style from "./brand.module.scss";
import { Container } from "../../components/index";

export const Brand = () => {
  return (
    <section className={style.brand}>
      <Container>
        <div className={style.brandWrapper}></div>
      </Container>
    </section>
  );
};
