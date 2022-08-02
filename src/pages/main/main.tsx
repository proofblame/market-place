import { Link } from 'react-router-dom';
import { Grid, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import {
  Container,
  ProductCards,
  ProductsHeader,
  SvgSprite,
  Swiper,
} from '../../components';

import mainBanner from './images/banner-img.png';
import Headphones from './images/headphones.png';
import Laptops from './images/laptops.png';
import Phones from './images/phones.png';
import promo from './images/promobanner.png';
import Watches from './images/watches.png';
import style from './main.module.scss';
import spriteMain from './images/sprite.svg';
import { spriteConfig } from './sprite-config';

export const Main = () => {
  return (
    <section className={style.main}>
      <Container>
        <div className={style.mainWrapper}>
          <section className={style.banner}>
            <Link to={'/card'}>
              <img
                src={mainBanner}
                alt='Кибер понедельник'
                className={style.bannerHeader}
              />
            </Link>
            <div className={style.bannerBody}>
              <Link to={'/card'}>
                <img src={Watches} alt='Часы' />
              </Link>
              <Link to={'/card'}>
                <img src={Headphones} alt='Наушники' />
              </Link>
              <Link to={'/card'}>
                <img src={Laptops} alt='Ноутбуки' />
              </Link>
              <Link to={'/card'}>
                <img src={Phones} alt='Телефоны' />
              </Link>
            </div>
          </section>
          <ProductsHeader title={'Электроника'} />
          <ProductCards className={style.productsCards} />
          <ProductsHeader title={'Категории'} link={false} />
          <section className={style.category}>
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
                  '--swiper-pagination-bullet-vertical-gap': '-15px',
                }}>
                {spriteConfig.map((item, index) => (
                  <SwiperSlide className={style.swiperSlide} key={index}>
                    <div className={style.categoryItem}>
                      <Link to='/card' className={style.categoryLink}>
                        <SvgSprite
                          sprite={spriteMain}
                          id={item.img}
                          className={style.categoryImg}
                        />
                      </Link>
                      <p className={style.categoryCaption}>{item.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
          <ProductsHeader title={'Скидки'} button={'Все'} />
          <ProductCards className={style.productsCards} />
          <ProductsHeader title={'Сезонные товары'} button={'Все'} />
          <ProductCards className={style.productsCards} />
          <Link to={'/card'}>
            <img src={promo} alt='Промо баннер' className={style.promo} />
          </Link>
        </div>
      </Container>
    </section>
  );
};
