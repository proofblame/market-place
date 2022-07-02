import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// Импорт стилей
import style from "./app.module.css";
// Импорт страниц
import {
  Card,
  Main,
  Brand,
  Feedbacks,
  Favorites,
  Account,
  Cart,
} from "../../pages";
// Ипорт компонентов
import { ScrollToTop, Header } from "../index";

export const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <div className={style.wrapper}>
        {pathname !== "/card" && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};
