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
                  pagination
                  modules={[Grid, Pagination]}
                  slidesPerView={4}
                  spaceBetween={10}
                  grid={{
                    rows: 2,
                  }}
                  style={{
                    '--swiper-pagination-color': 'rgba(244, 244, 244, .3)',
                    '--swiper-pagination-bullet-inactive-color':
                      'rgba(244, 244, 244, 0.1)',
                    '--swiper-pagination-bullet-inactive-opacity': '1',
                    '--swiper-pagination-bullet-size': '5px',
                    '--swiper-pagination-bullet-vertical-gap': '5px',
                  }}>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <img
                        className={style.categoryImg}
                        src={categoryImg}
                        alt='Категория'
                      />
                      <p className={style.categoryCaption}>Каталог</p>
                    </div>
                  </SwiperSlide>
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
