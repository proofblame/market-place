import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {
  Button,
  Container,
  FeedbackList,
  ProductCards,
  Category,
  Swiper,
  Navigation,
  AddToCart,
} from '../../components';
import style from './card.module.scss';
import cardImg from './images/product.svg';

export const Card = () => {
  const [checked, setChecked] = useState('1');
  const navigate = useNavigate();
  const changeRadioInput = (e: any) => {
    const { value } = e.target;
    setChecked(value);
  };

  const [show, setShow] = useState({
    hide: false,
    text: 'еще',
  });
  const showDescription = () => {
    setShow({
      hide: !show.hide,
      text: show.hide ? show.text : '',
    });
  };

  return (
    <section className={style.page}>
      <Swiper
        pagination
        modules={[Pagination]}
        className={style.swiper}
        style={{
          '--swiper-pagination-color': '#F4F4F4',
          '--swiper-pagination-bullet-inactive-color':
            'rgba(244, 244, 244, 0.5)',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '6px',
          '--swiper-pagination-bullet-vertical-gap': '15px',
        }}>
        <SwiperSlide>
          <img src={cardImg} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardImg} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardImg} alt='' />
        </SwiperSlide>
        <Container className={style.info}>
          <div className={style.rating}>
            <span className={style.stars}>4,85</span>
            <span className={style.reviews}>
              <Link to={'/prices'}>999 тыс.</Link>
            </span>
          </div>
          <div className={style.col}>
            <Button type={'share'} className={style.button} />
            <Button type={'favorite'} className={style.button} />
          </div>
        </Container>
      </Swiper>
      <Container className={style.back}>
        <Button type={'back'} />
      </Container>
      <Container>
        <h1 className={style.title}>
          Sony WH-1000XM4 «Лучшие наушники»тра та та та на бело м фоне красивые
          с крутым звуком и оснащены стерео системой
        </h1>
        <div className={style.cost}>
          <div className={style.flex}>
            <span className={style.amount}>Купили более 1 400 раз</span>
            <span className={style.percent}>-25%</span>
          </div>
          <div className={style.prices}>
            <span className={style.current}>25 000 000 &#x20bd;</span>
            <span className={style.previous}>50 000 000 &#x20bd;</span>
          </div>
        </div>
      </Container>
      <section className={style.tabs}>
        <Container>
          <div className={style.header}>
            <input
              className={style.input}
              type='radio'
              name='caption'
              id='caption-tab'
              value='1'
              checked={checked === '1' ? true : false}
              onChange={changeRadioInput}
            />
            <label
              className={`${style.label} ${checked === '1' && style.active}`}
              htmlFor='caption-tab'>
              Описание
            </label>

            <input
              className={style.input}
              type='radio'
              name='feature'
              id='feature-tab'
              value='2'
              checked={checked === '2' ? true : false}
              onChange={changeRadioInput}
            />
            <label
              className={`${style.label} ${checked === '2' && style.active}`}
              htmlFor='feature-tab'>
              Характеристика
            </label>
          </div>
        </Container>
        <div className={style.content}>
          <Container>
            {checked === '1' && (
              <div className={style.tab}>
                <div
                  className={`${style.wrapper} ${show.hide && style.active}`}>
                  <p className={style.text}>
                    Наслаждайтесь любимой музыкой и подкастами еще дольше с
                    наушниками WH-CH510 от Sony. Благодаря легкой конструкции и
                    35 часам работы от аккумулятора вы можете не беспокоиться,
                    что наушники разрядятся в пути. Подключите наушники к
                    смартфону или планшету через беспроводную технологию
                    Bluetooth и наслаждайтесь прослушиванием любимой музыки.
                  </p>
                </div>
                <Button
                  type={'showMore'}
                  text={show.text}
                  onClick={showDescription}></Button>
              </div>
            )}
            {checked === '2' && (
              <div className={style.tab}>
                <div
                  className={`${style.wrapper} ${show.hide && style.active}`}>
                  <div className={style.table}>
                    <div className={style.row}>
                      <p className={style.name}>Вид:</p>
                      <p className={style.value}>Беспроводные наушники</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>Микрофон:</p>
                      <p className={style.value}>Да</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>Конструкция наушников:</p>
                      <p className={style.value}>Внутриканальные</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>Шумоподавление:</p>
                      <p className={style.value}> Активное</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>
                        Время работы в режиме разговора:
                      </p>
                      <p className={style.value}>10 часов</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>Время зарядки до 100%:</p>
                      <p className={style.value}>2 часа</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>Обьём аккамулятора:</p>
                      <p className={style.value}>4000 Ампер</p>
                    </div>
                    <div className={style.row}>
                      <p className={style.name}>USB:</p>
                      <p className={style.value}>Нет</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      </section>
      <Container className={style.owner}>
        <Link to={'/brand'} className={style.wrapper}>
          <p className={style.name}>Магазин от RaccoonIT</p>
          <p className={style.title}>Headphones магазин крутых наушников</p>
        </Link>
      </Container>
      <FeedbackList />
      <Container className={style.container}>
        <Category title={'Промо товары'} />
        <ProductCards className={style.productsCards} />
        <ProductCards className={style.productsCards} />
      </Container>
      {/* <MainButton /> */}
      <AddToCart />
    </section>
  );
};
