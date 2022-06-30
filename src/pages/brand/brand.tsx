import React, { useState } from "react";
import style from "./brand.module.scss";
import { Button, CategoryProducts, Container, Header } from "../../components";

export const Brand = () => {
  const [show, setShow] = useState({
    hide: false,
    text: "Развернуть...",
  });
  const showDescription = () => {
    setShow({
      hide: !show.hide,
      text: show.hide ? "Развернуть..." : "Свернуть",
    });
  };
  return (
    <>
      <Header />
      <section className={style.brand}>
        <div className={style.brandWrapper}>
          <section className={style.banner}>
            <Container>
              <h1 className={style.bannerTitle}>TG Market</h1>
              <p className={style.bannerSubtitle}>Магазин от RaccoonIT</p>
            </Container>
          </section>
          <Container>
            <section className={style.description}>
              <p
                className={`${style.descriptionText} ${
                  show.hide && style.active
                }`}>
                Ле́чо — классическое блюдо венгерской кухни, весьма
                распространённое в странах Европы. Как и любое популярное блюдо,
                не имеет точной рецептуры, так как все готовят его по-своему.
                Неизменным и обязательным является наличие трёх видов овощей:
                сладкий перец, помидоры и репчатый лук.
              </p>
              <Button
                type={"showMore"}
                text={show.text}
                onClick={showDescription}></Button>
            </section>
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
          </Container>
        </div>
      </section>
    </>
  );
};
