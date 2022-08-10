import React from 'react';

import { Button, Container } from '../index';
import style from './navigation.module.scss';

export const Navigation = ({ title, button }: any) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapper}>
          <Button type={'back'} className={style.button} />
          {title && <h2 className={style.title}>{title}</h2>}
          {button ? (
            <Button type={'delete'} className={style.delete} />
          ) : (
            <span></span>
          )}
        </div>
      </Container>
    </section>
  );
};
