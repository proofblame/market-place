import React from "react";
import { Routes, Route } from "react-router-dom";
// Импорт стилей
import style from "./app.module.css";
// Импорт страниц
import { Card, Main, Brand } from "../../pages";
// Ипорт компонентов
import { ScrollToTop } from "../index";

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className={style.wrapper}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/brand" element={<Brand />} />
        </Routes>
      </div>
    </>
  );
};
