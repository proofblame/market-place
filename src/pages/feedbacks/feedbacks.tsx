import React from "react";
import style from "./feedbacks.module.scss";
import { Header, FeedbackList } from "../../components";

export const Feedbacks = () => {
  return (
    <>
      <Header />
      <section className={style.feedbacks}>
        <FeedbackList />
      </section>
    </>
  );
};
