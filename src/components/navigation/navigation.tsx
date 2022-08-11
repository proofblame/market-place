import React from 'react';

import { Button } from '../index';
import style from './navigation.module.scss';

export const Navigation = ({ title, children }: any) => {
  return (
    <section className={style.wrapper}>
      <Button type={'back'} className={style.button} />
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </section>
  );
};
