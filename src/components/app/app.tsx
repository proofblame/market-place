import React, { useEffect, useState } from "react";
import style from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import Main from "../../pages/main/main";
import Cart from "../../pages/cart/cart";
import Account from "../../pages/account/account";
import { SignUp } from "../../pages/auth/index";
import Navbar from "../navbar/navbar";
import api from "../../utils/api";
import { TUser } from "../../services/types/telegram-data";

declare global {
  interface Window {
    Telegram: any;
  }
}

const tg = window.Telegram.WebApp;
let dataTG = {
  first_name: tg.initDataUnsafe.user?.first_name,
  last_name: tg.initDataUnsafe.user?.last_name,
  username: tg.initDataUnsafe.user?.username,
  language_code: tg.initDataUnsafe.user?.language_code,
  query_id: tg.initDataUnsafe.query_id,
  hash: tg.initDataUnsafe.hash,
  auth_date: tg.initDataUnsafe.auth_date,
  id: tg.initDataUnsafe.user?.id,
};

const App = () => {
  const [nav, setNav] = useState(false);
  const [data, setData] = useState<TUser>();
  const handleNav = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  const clickButton = () => {
    // setData({
    //   first_name: tg.initDataUnsafe.user?.first_name,
    //   last_name: tg.initDataUnsafe.user?.last_name,
    //   username: tg.initDataUnsafe.user?.username,
    //   language_code: tg.initDataUnsafe.user?.language_code,
    //   query_id: tg.initDataUnsafe.query_id,
    //   hash: tg.initDataUnsafe.hash,
    //   auth_date: tg.initDataUnsafe.auth_date,
    //   id: tg.initDataUnsafe.user?.id,
    // });
    tg.sendData("123");
    api.sentData(dataTG);
    console.log(data);
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

    setData(dataTG);
    console.log(tg.initDataUnsafe);
    console.log(dataTG);
    console.log(data);
  }, []);

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
