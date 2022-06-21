import React, { useEffect, useRef, useState } from "react";
import style from "./main.module.scss";
import Container from "../../components/container/container";
import Card from "../../components/card/card";
import MoreButton from "../../components/more-button/more-button";
import Slider from "../../components/slider/slider";
import { Link } from "react-router-dom";

export const Main = ({ data }: any) => {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState({
    offsetWidth: 0,
    clientWidth: 0,
  });

  const { id, isBot, first_name, last_name, username, language_code } =
    data || {};

  useEffect(() => {
    setWidth({
      clientWidth: ref.current.clientWidth,
      offsetWidth: ref.current.offsetWidth,
    });
    window.addEventListener("resize", () => {
      setWidth({
        clientWidth: ref.current.clientWidth,
        offsetWidth: ref.current.offsetWidth,
      });
    });
  }, [width.clientWidth, width.offsetWidth, ref]);
  return (
    <section className={style.main} ref={ref}>
      <div className={style.mainWrapper}>
        <section className={style.banner}>
          <Container>
            <h1 className={style.bannerTitle}>{width.offsetWidth} px</h1>
            <p className={style.bannerSubtitle}>{width.clientWidth} px</p>
          </Container>
        </section>
        <Container>
          <p className={style.description}>
            Ле́чо — классическое блюдо венгерской кухни, весьма распространённое
            в странах Европы. Как и любое популярное блюдо, не имеет точной
            рецептуры, так как все готовят его по-своему. Неизменным и
            обязательным является наличие трёх видов овощей: сладкий перец,
            помидоры и репчатый лук.
          </p>
          <section className={style.category}>
            <h2 className={style.categoryTitle}>Категория</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <Link to={"/card"}>
                  <Card />
                </Link>
              </li>
              <li className={style.item}>
                <Link to={"/card"}>
                  <Card />
                </Link>
              </li>
              <li className={style.item}>
                <Link to={"/card"}>
                  <Card />
                </Link>
              </li>
            </ul>
          </section>
          <Slider />
          <section className={style.category}>
            <h2 className={style.categoryTitle}>Категория</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <Link to={"/card"}>
                  <Card />
                </Link>
              </li>
              <li className={style.item}>
                <Link to={"/card"}>
                  <Card />
                </Link>
              </li>
              <li className={style.item}>
                <MoreButton />
              </li>
            </ul>
          </section>
          <Slider />
        </Container>
      </div>
    </section>
  );
};
