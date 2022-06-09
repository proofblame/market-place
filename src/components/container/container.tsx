import React from "react";
import style from "./container.module.scss";

const Container = ({ children }: any) => {
  return <section className={style.container}>{children}</section>;
};

export default Container;
