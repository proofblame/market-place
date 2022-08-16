import React from 'react';
import style from './support.module.scss';
import { Button, Container, Navigation } from '../../components';
import { Link } from 'react-router-dom';

export const Support = () => {
  return (
    <Container className={style.page}>
      <Navigation title={'Помощь'} />
      <p className={style.question}>Остались вопросы? Напишите нам!</p>
      <form className={style.form}>
        <fieldset className={style.fieldset}>
          <input type='email' className={style.input} placeholder={'E-mail'} />
          <textarea
            className={style.textarea}
            placeholder={'Комментарий'}></textarea>
        </fieldset>
        <fieldset className={style.fieldset}>
          <div className={style.file}>
            <input id='file' type='file' />
            <label htmlFor='file'>
              <span>Прикрепить файл</span>
            </label>
          </div>
        </fieldset>
      </form>
      <Container className={style.footer}>
        <Button
          type={'mainButton'}
          className={style.button}
          text={'Отправить'}
        />
      </Container>
    </Container>
  );
};
