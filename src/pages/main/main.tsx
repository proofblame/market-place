import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { CategoryProducts, Container, ProductsHeader, Slider, Swiper } from '../../components';
import AllCategories from './images/categories/AllCategories.svg';
import AnimalSupplies from './images/categories/AnimalSupplies.svg';
import Appliances from './images/categories/Appliances.svg';
import BeautyAndHealth from './images/categories/BeautyAndHealth.svg';
import Books from './images/categories/Books.svg';
import Cars from './images/categories/Cars.svg';
import ChildrenProducts from './images/categories/Childrenproducts.svg';
import Clothes from './images/categories/Clothes.svg';
import Construction from './images/categories/Construction.svg';
import Digital from './images/categories/Digital.svg';
import Drugstore from './images/categories/Drugstore.svg';
import Electronics from './images/categories/Electronics.svg';
import FamilyAndGarden from './images/categories/FamilyAndGarden.svg';
import Food from './images/categories/Food.svg';
import Furniture from './images/categories/Furniture.svg';
import Games from './images/categories/Games.svg';
import Hobbies from './images/categories/Hobbies.svg';
import Jewelry from './images/categories/Jewelry.svg';
import Music from './images/categories/Music.svg';
import Popular from './images/categories/Popular.svg';
import Premium from './images/categories/Premium.svg';
import Promotions from './images/categories/Promotions.svg';
import Retro from './images/categories/Retro.svg';
import Sports from './images/categories/Sports.svg';
import Stationery from './images/categories/Stationery.svg';
import TGGlobal from './images/categories/TGGlobal.svg';
import Tourism from './images/categories/Tourism.svg';
import Headphones from './images/headphones.png';
import Laptops from './images/laptops.png';
import Phones from './images/phones.png';
import promo from './images/promobanner.png';
import Watches from './images/watches.png';
import style from './main.module.scss';

export const Main = () => {
  return (
    <>
      <section className={style.main}>
        <div className={style.mainWrapper}>
          <Container>
            <section className={style.banner}></section>
            <ul className={style.bannerGroup}>
              <li>
                <Link to='#'>
                  <img src={Watches} alt='Часы' />
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <img src={Headphones} alt='Наушники' />
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <img src={Laptops} alt='Ноутбуки' />
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <img src={Phones} alt='Телефоны' />
                </Link>
              </li>
            </ul>
          </Container>
          <section className={style.electronics}>
            <CategoryProducts>
              <ProductsHeader title={'Электроника'} button={'Все'} />
            </CategoryProducts>
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
                  }}
                >
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={AllCategories}
                          alt='Все категории'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Все категории</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Promotions}
                          alt='Акции'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Акции</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Electronics}
                          alt='Электроника'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Электроника</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Clothes}
                          alt='Одежда и обувь'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Одежда и обувь</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Appliances}
                          alt='Бытовая техника'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Бытовая техника</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Books}
                          alt='Книги'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Книги</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Popular}
                          alt='Популярное'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Популярное</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Drugstore}
                          alt='Аптека'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Аптека</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={AnimalSupplies}
                          alt='Товары для животных'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Товары для животных
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={BeautyAndHealth}
                          alt='Красота и здоровье'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Красота и здоровье
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Cars}
                          alt='Автотовары'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Автотовары</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={ChildrenProducts}
                          alt='Детские товары'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Детские товары</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Construction}
                          alt='Строительство и ремонт'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Строительство и ремонт
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Digital}
                          alt='Цифровые товары'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Цифровые товары</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={FamilyAndGarden}
                          alt='Для дома и сада'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Для дома и сада</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Food}
                          alt='Продукты питания'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Продукты питания</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Furniture}
                          alt='Мебель'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Мебель</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Games}
                          alt='Игры и консоли'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Игры и консоли</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Hobbies}
                          alt='Хобби и творчество'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Хобби и творчество
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Jewelry}
                          alt='Ювелирные украшения'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Ювелирные украшения
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Music}
                          alt='Музыка и видео'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Музыка и видео</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Premium}
                          alt='Премиум подписка'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Премиум подписка</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Retro}
                          alt='Винтаж'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Винтаж</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Sports}
                          alt='Спорт и отдых'
                        />
                      </Link>
                      <p className={style.categoryCaption}>Спорт и отдых</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Stationery}
                          alt='Канцелярские товары'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Канцелярские товары
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={TGGlobal}
                          alt='TG Global'
                        />
                      </Link>
                      <p className={style.categoryCaption}>TG Global</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={style.swiperSlide}>
                    <div className={style.categoryItem}>
                      <Link to='/card'>
                        <img
                          className={style.categoryImg}
                          src={Tourism}
                          alt='Туризм, рыбалка, охота'
                        />
                      </Link>
                      <p className={style.categoryCaption}>
                        Туризм, рыбалка, охота
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* <Slider color={'dark'} /> */}
            </Container>
          </section>
          <CategoryProducts>
            <ProductsHeader title={'Скидки'} button={'Все'} />
          </CategoryProducts>
          <CategoryProducts>
            <ProductsHeader title={'Сезонные товары'} button={'Все'} />
          </CategoryProducts>
          <section className={style.promo}>
            <Container>
              <img src={promo} alt='Промо баннер' />
            </Container>
          </section>
        </div>
      </section>
    </>
  );
};
