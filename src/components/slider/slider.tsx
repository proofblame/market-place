import React from "react";
import style from "./slider.module.scss";
import classnames from "classnames";

export const Slider = ({ color, className }: any) => {
  let dotClass = classnames(style.dot, {
    [style[`${color}`]]: color,
  });
  let dotsClass = classnames(className, style.dots);

  return (
    <ul className={dotsClass}>
      <li className={dotClass}></li>
      <li className={dotClass}></li>
      <li className={dotClass}></li>
    </ul>
  );
};
