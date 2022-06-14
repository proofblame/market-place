import React, { useEffect, useState } from "react";
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
  const [nav, setNav] = useState(false);
  const [data, setData] = useState("123");
  const handleNav = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  const clickButton = () => {
    tg.sendData("123");
    tg.MainButton.text = "Данные отправлены";
    setTimeout(() => {
      tg.close();
    }, 3000);
  };

  useEffect(() => {
    tg.ready();
    tg.MainButton.text = "Send data";
    tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
    tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
    tg.MainButton.show();
    tg.MainButton.onClick(clickButton);
    setData(tg.initDataUnsafe?.user);
  });

  return (
    <>
      <Header onNav={handleNav} />
      <Navbar nav={nav} />
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        {/* <Route path='/' element={<Main />} /> */}
        {/* <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </>
  );
};

export default App;
