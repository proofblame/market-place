import React, { useState } from "react";
import style from "./horizontal-card.module.scss";
import headPhones from "./images/head-phones.svg";
import { Button } from "../index";

export const HorizontalCard = () => {
  const [checked, setChecked] = useState(false);
  const handleChangeInput = () => {
    setChecked(!checked);
  };
  return (
    <section className={style.card}>
      <header className={style.header}>
        <div className={style.imgGroup}>
          <div className={style.select}>
            <input
              type="checkbox"
              id="cardSelect"
              checked={checked}
              onChange={handleChangeInput}
            />
            <span
              className={`${style.pseudo} ${checked && style.active}`}
              onClick={handleChangeInput}
            ></span>
          </div>
          <img src={headPhones} alt="headPhones" className={style.img} />
        </div>
        <div className={style.description}>
          <p className={style.title}>
            Apple AirPods Pro с шумоподавлением и так далее
          </p>
          <div className={style.cost}>
            <span className={style.sum}>499 000 &#x20bd;</span>
            <span className={style.cardPrevious}>1000&#x20bd;</span>
          </div>
          <div className={style.row}>
            <span className={style.cardPercent}>12%</span>
            <span className={style.current}>499 000 &#x20bd; / шт</span>
          </div>
          <p className={style.saller}>ООО ИЭТК</p>
        </div>
      </header>
      <footer className={style.footer}>
        <section className={style.select}>
          <input
            type="checkbox"
            id="cardSelect"
            checked={checked}
            onChange={handleChangeInput}
          />
          <Button
            type={"favoriteCard"}
            active={checked}
            className={style.pseudo}
          />
          <label className={style.label} htmlFor="cardSelect">
            В избранное
          </label>
        </section>
        <div className={style.delete}>
          <Button type={"delete"} className={style.button} />
          <span className={style.title}>Удалить</span>
        </div>
        <section className={style.counter}>
          <Button type={"decrement"} className={style.button} />
          <p className={style.num}>1</p>
          <Button type={"increment"} className={style.button} />
        </section>
      </footer>
    </section>
  );
};
