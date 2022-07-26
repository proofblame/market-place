import React from 'react';
import style from './main.module.scss';
import categoryImg from './images/category-box-icon.svg';
import promo from './images/promo.png';
import {
  Container,
  Slider,
  CategoryProducts,
  ProductsHeader,
  Swiper,
} from '../../components';
import { SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';

export const Main = () => {
  return (
    <>
      <section className={style.main}>
        <div className={style.mainWrapper}>
          <section className={style.banner}>
            <Container>
              <h1 className={style.bannerTitle}>Main Promo</h1>
              <p className={style.bannerSubTitle}>Магазин от RaccoonIT</p>
            </Container>
          </section>
          <section className={style.category}>
            <Container>
              <ProductsHeader title={'Категории'} button={false} />
              <div className={style.categoryGroup}>
                <Swiper
                  className={style.swiper}
                  pagination={{ dynamicBullets: true }}
                  modules={[Pagination, Grid]}
                  // slidesPerColumn={2}
                  slidesPerGroup={3}
                  slidesPerView={3}
                  spaceBetween={50}
                  // slidesPerColumnFill={2}
                  grabCursor={true}
                  grid={{
                    rows: 2,
                    fill: 'row',
                  }}>
                  <SwiperSlide className={style.swiperSlide}>1</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>2</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>3</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>4</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>5</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>6</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>7</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>8</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>9</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>10</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>11</SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>12</SwiperSlide>
                  {/* <SwiperSlide>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
              {/* <Slider color={'dark'} /> */}
            </Container>
          </section>
          <section className={style.promo}>
            <Container>
              <img src={promo} alt='Promo' />
            </Container>
          </section>
          <CategoryProducts>
            <ProductsHeader title={'Новинки'} />
          </CategoryProducts>
          <CategoryProducts>
            <ProductsHeader title={'Скидки'} />
          </CategoryProducts>
          <CategoryProducts>
            <ProductsHeader title={'Товары'} />
          </CategoryProducts>
        </div>
      </section>
    </>
  );
};
