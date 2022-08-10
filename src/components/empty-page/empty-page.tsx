import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './empty-page.module.scss';
import { Button } from '../index';

export const EmptyPage = ({ page }: any) => {
  const navigate = useNavigate();
  return (
    <section className={style.empty}>
      <h2 className={style.title}>В {page} пока ничего нет</h2>
      <Button
        type={'mainButton'}
        text={'На главную'}
        className={style.button}
        onClick={() => navigate('/')}
      />
    </section>
  );
};
