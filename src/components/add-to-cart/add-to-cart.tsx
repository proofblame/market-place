import React, { useState } from 'react';
import style from './add-to-cart.module.scss';
import { Container, Button } from '../index';
import { useNavigate } from 'react-router-dom';

export const AddToCart = () => {
  const navigate = useNavigate();
  const [mainButton, setMainButton] = useState({
    open: false,
    count: 0,
  });
  const onDecrement = () => {
    if (mainButton.count === 1) {
      setMainButton({
        count: 0,
        open: false,
      });
    } else {
      setMainButton({
        ...mainButton,
        count: mainButton.count - 1,
      });
    }
  };
  const onIncrement = () => {
    setMainButton({
      ...mainButton,
      count: mainButton.count + 1,
    });
  };

  const onClickMainButton = () => {
    if (mainButton.count === 0) {
      setMainButton({
        count: mainButton.count + 1,
        open: true,
      });
    } else {
      setMainButton({
        ...mainButton,
        open: false,
      });
      navigate('/cart');
    }
  };

  return (
    <>
      <div className={style.padding}></div>
      <Container className={style.footer}>
        <Button
          type={'mainButton'}
          text={mainButton.open && 'В корзине'}
          className={`${style.button} ${mainButton.open && style.active}`}
          onClick={onClickMainButton}
        />
        {mainButton.open && (
          <div className={style.counter}>
            <Button
              type={'decrement'}
              className={style.decrement}
              onClick={onDecrement}
            />
            <p className={style.sum}>{mainButton.count}</p>
            <Button
              type={'increment'}
              className={style.increment}
              onClick={onIncrement}
            />
          </div>
        )}
      </Container>
    </>
  );
};
