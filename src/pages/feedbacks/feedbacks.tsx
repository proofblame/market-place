import React from "react";
import style from "./feedbacks.module.scss";
import { FeedbackList } from "../../components";

export const Feedbacks = () => {
  return (
    <>
      <section className={style.feedbacks}>
        <FeedbackList />
      </section>
    </>
  );
};
