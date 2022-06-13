import React, { useEffect } from "react";
import style from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import Main from "../../pages/main/main";
import Cart from "../../pages/cart/cart";
import Account from "../../pages/account/account";
import { SignUp } from "../../pages/auth/index";
import Navbar from "../navbar/navbar";

declare global {
  interface Window {
    Telegram: any;
  }
}

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.MainButton.text = "Тык Сюды";
    tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
    tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
    tg.MainButton.show();
  });

  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path='/' element={<Main />} /> */}
        {/* <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </>
  );
};

export default App;
