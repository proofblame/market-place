import React from "react";
import style from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { Card } from "../../pages";
import Scrolltotop from "../scroll-to-top/scroll-to-top";

const App = () => {
  return (
    <>
      <Scrolltotop />
      <div className={style.wrapper}>
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
