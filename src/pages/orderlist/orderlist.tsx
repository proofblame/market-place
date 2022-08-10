import React from 'react';
import { Button, Container, Category } from '../../components';
import style from './orderlist.module.scss';
import cardImg from './images/card-img.jpg';

export const Orderlist = () => {
  return (
    <>
      <section className={style.section}>
        <Container>
          <Category title={'Заказы'} button={false} />
          <p className={style.title}>Вы пока ничего не заказывали</p>
          <p className={style.subtitle}>
            Вы можете начать покупки с главной страницы
          </p>
          <Button
            type={'mainButton'}
            text={'Перейти'}
            className={style.button}
          />
        </Container>
      </section>
      <section className={style.section}>
        <Container>
          <Category title={'Заказы'} button={false} />
          <div className={style.filter}>
            <div className={style.period}>
              <p className={style.periodSubtitle}>Показать</p>
              <p className={style.periodTitle}>Все</p>
            </div>
            <button className={style.filterButton}></button>
            <div className={style.years}>
              <p className={style.yearsStart}>2021 г</p>
              <p className={style.yearsEnd}>2022 г</p>
            </div>
          </div>
        </Container>
        <section className={style.order}>
          <Container>
            <div className={style.orderHeader}>
              <div className={style.orderDetail}>
                <p className={style.orderDate}>Заказ от 30 марта</p>
                <p className={style.orderNumber}>66020459-0023</p>
              </div>
              <div className={style.orderDetail}>
                <p className={style.orderDelivery}>Доставка в пункт выдачи</p>
                <p className={style.orderPayment}>Ожидает оплаты</p>
              </div>
            </div>
            <p className={style.orderDeliveryDate}>
              Дата доставки: 1 апреля в 11:30
            </p>
            <ul className={style.orderList}>
              <li className={style.orderItem}>
                <img className={style.orderImage} src={cardImg} alt='' />
              </li>
              <li className={style.orderItem}>
                <img className={style.orderImage} src={cardImg} alt='' />
              </li>
            </ul>
          </Container>
        </section>
      </section>
    </>
  );
};
