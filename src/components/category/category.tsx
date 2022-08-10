import React from 'react';
import { Link } from 'react-router-dom';
import style from './category.module.scss';

export const Category = ({ title, link = 'Все', to = '/' }: any) => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {link && (
        <Link to={to} className={style.link}>
          {link}
        </Link>
      )}
    </div>
  );
};
