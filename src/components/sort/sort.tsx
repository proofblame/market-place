import React from 'react';
import style from './sort.module.scss';

export const Sort = () => {
  return (
    <section className={style.filter}>
      <div className={style.select}>Популярные</div>
      <ul className={style.options}>
        <li className={style.option}>Популярные</li>
        <li className={style.option}>Новинки</li>
        <li className={style.option}>Цена по возрастанию</li>
        <li className={style.option}>Цена по убыванию</li>
        <li className={style.option}>По размеру скидки</li>
        <li className={style.option}>Высокий рейтинг</li>
      </ul>
    </section>
  );
};
