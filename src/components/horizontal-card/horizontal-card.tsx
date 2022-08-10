import React, { useState } from 'react';
import style from './horizontal-card.module.scss';
import headPhones from './images/head-phones.svg';
import { Button } from '../index';

export const HorizontalCard = () => {
  const [checked, setChecked] = useState(false);
  const handleChangeInput = () => {
    setChecked(!checked);
  };
  return (
    <section className={style.card}>
      <header className={style.cardHeader}>
        <div className={style.cardHeaderCol}>
          <div className={style.cardSelect}>
            <input
              type='checkbox'
              id='cardSelect'
              checked={checked}
              onChange={handleChangeInput}
            />
            <span
              className={`${style.cardSelectInput} ${checked && style.active}`}
              onClick={handleChangeInput}></span>
          </div>
          <img src={headPhones} alt='headPhones' className={style.cardImg} />
        </div>
        <div className={`${style.cardHeaderCol} ${style.right}`}>
          <p className={style.cardTitle}>
            Apple AirPods Pro с шумоподавлением и так далее
          </p>
          <div className={style.cardCost}>
            <span className={style.cardCostCurrent}>499 000 &#x20bd;</span>
            <span className={style.cardCostPrevious}>1000&#x20bd;</span>
          </div>
          <span className={style.cardSale}>12%</span>
          <p className={style.cardSaller}>ООО ИЭТК</p>
        </div>
      </header>
      <footer className={style.cardFooter}>
        <section className={style.select}>
          <input
            type='checkbox'
            id='cardSelect'
            checked={checked}
            onChange={handleChangeInput}
          />
          <Button
            type={'favoriteCard'}
            active={checked}
            className={style.cardFavorite}
          />
          <label className={style.selectLabel} htmlFor='cardSelect'>
            В избранное
          </label>
        </section>
        <div className={style.cardDelete}>
          <Button type={'delete'} className={style.cardDeleteButton} />
          <span className={style.cardDeleteTitle}>Удалить</span>
        </div>
        <section className={style.counter}>
          <Button type={'decrement'} className={style.counterDecrement} />
          <p className={style.counterNum}>1</p>
          <Button type={'increment'} className={style.counterIncrement} />
        </section>
      </footer>
    </section>
  );
};
