import React from "react";
import style from "./container.module.scss";

const Container = ({ children, className }: any) => {
  return (
    <section className={`${style.container} ${className}`}>{children}</section>
  );
};

export default Container;
