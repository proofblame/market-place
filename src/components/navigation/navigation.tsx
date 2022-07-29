import React from 'react';
import { Container, Button } from '../index';
import style from './navigation.module.scss';

export const Navigation = ({ title = 'TG Market' }: any) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapper}>
          <Button type={'back'} className={style.button} />
          <h2 className={style.title}>{title}</h2>
        </div>
      </Container>
    </section>
  );
};
