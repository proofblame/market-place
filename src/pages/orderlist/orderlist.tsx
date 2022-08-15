import React from "react";
import style from "./orderlist.module.scss";
import {
  Container,
  ProductCards,
  Category as CategoryComponent,
  Navigation,
  AddToCart,
  Sort,
  Chips,
  OrderCard,
} from "../../components";
import { ordersSort } from "../../utils/category-sort";

export const Orderlist = () => {
  return (
    <section className={style.page}>
      <Container className={style.header}>
        <Navigation title={"Заказы"} />
        <Sort arraySort={ordersSort} />
        <Chips />
      </Container>
      <OrderCard />
      <OrderCard />
    </section>
  );
};
