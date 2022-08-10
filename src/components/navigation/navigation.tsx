import React from "react";

import { Button, Container } from "../index";
import style from "./navigation.module.scss";

export const Navigation = ({ title, children }: any) => {
  return (
    <Container className={style.wrapper}>
      <Button type={"back"} />
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </Container>
  );
};
