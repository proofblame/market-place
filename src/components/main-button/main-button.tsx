import React, { useState } from "react";
import style from "./main-button.module.scss";
import { Container, Button } from "../index";

export const MainButton = () => {
  const [mainButton, setMainButton] = useState({
    open: false,
    count: 0,
  });
  const onDecrement = () => {
    if (mainButton.count === 1) {
      setMainButton({
        ...mainButton,
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
        open: true,
      });
    }
  };
  return (
    <div className={style.mainButton}>
      <Container>
        <div className={style.mainButtonWrapper}>
          <Button
            type={"mainButton"}
            text={mainButton.open && "Перейти в корзину"}
            className={style.mainButtonButton}
            onClick={onClickMainButton}
          />
          {mainButton.open && (
            <div className={style.mainButtonCounter}>
              <Button
                type={"decrement"}
                className={style.mainButtonButtonDecrement}
                onClick={onDecrement}
              />
              <p className={style.mainButtonSum}>{mainButton.count}</p>
              <Button
                type={"increment"}
                className={style.mainButtonButtonIncrement}
                onClick={onIncrement}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
