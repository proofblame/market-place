import React, { useState } from 'react';
import style from './card.module.scss';
import cardImg from './images/card-img.png';
import starsImg from './images/stars.png';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import {
  Slider,
  Container,
  Button,
  CategoryProducts,
  FeedbackList,
  ProductsHeader,
  MainButton,
  Swiper,
} from '../../components';
import { Pagination } from 'swiper';

export const Card = () => {
  const [checked, setChecked] = useState('1');
  const changeRadioInput = (e: any) => {
    const { value } = e.target;
    setChecked(value);
  };
  const [mainButton, setMainButton] = useState({
    open: false,
    count: 0,
  });
  const onDecrement = () => {
    if (mainButton.count === 1) {
      setMainButton({
        ...mainButton,
        open: false,
      });
    } else {
      setMainButton({
        ...mainButton,
        count: mainButton.count - 1,
      });
    }
  };
  const onIncrement = () => {
    setMainButton({
      ...mainButton,
      count: mainButton.count + 1,
    });
  };

  const onClickMainButton = () => {
    if (mainButton.count === 0) {
      setMainButton({
        count: mainButton.count + 1,
        open: true,
      });
    } else {
      setMainButton({
        ...mainButton,
        open: true,
      });
    }
  };
  return (
    <section className={style.section}>
      <nav className={style.nav}>
        <Container className={style.navWrapper}>
          <Link to={'/'}>
            <Button type={'back'} />
          </Link>
          <div className={style.navRightColumn}>
            <Button type={'favorite'} />
            <Button type={'share'} />
          </div>
        </Container>
      </nav>
      <div className={style.imageGroup}>
        <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]}>
          <SwiperSlide>
            <img src={cardImg} alt='' className={style.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cardImg} alt='' className={style.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cardImg} alt='' className={style.image} />
          </SwiperSlide>
        </Swiper>
        {/* <ul className={style.imageList}>
          <li className={style.imageItem}>
            <img src={cardImg} alt="" className={style.image} />
          </li>
        </ul> */}
        <Slider color={'light'} className={style.dots} />
      </div>
      <Container>
        <h1 className={style.title}>
          Сувенир банка "Мужчине, у которого есть всё" внутри: подтяжки
          10х7,5х7,5 см. Вид: Оригинальные, Сувенирная банка.{' '}
        </h1>
        <div className={style.priceBlock}>
          <div className={style.priceWrapper}>
            <div className={style.pricePrevious}>1000 &#x20bd;</div>
            <div className={style.stars}>
              <div className={style.starsNumber}>
                <img src={starsImg} alt='' />
              </div>
              <div className={style.starsCount}>22 отзыва</div>
            </div>
          </div>

          <p className={style.priceCurrent}>499 &#x20bd;</p>
        </div>
      </Container>
      <section className={style.tabs}>
        <Container>
          <div className={style.tabsHeader}>
            <input
              className={style.tabsInput}
              type='radio'
              name='caption'
              id='caption-tab'
              value='1'
              checked={checked === '1' ? true : false}
              onChange={changeRadioInput}
            />
            <label
              className={`${style.tabsLabel} ${
                checked === '1' && style.active
              }`}
              htmlFor='caption-tab'>
              Описание
            </label>
            <input
              className={style.tabsInput}
              type='radio'
              name='feature'
              id='feature-tab'
              value='2'
              checked={checked === '2' ? true : false}
              onChange={changeRadioInput}
            />
            <label
              className={`${style.tabsLabel} ${
                checked === '2' && style.active
              }`}
              htmlFor='feature-tab'>
              Характеристика
            </label>
          </div>
          <div className={style.tabsContent}>
            {checked === '1' && (
              <div className={style.captionContent}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quod. Necessitatibus sed ab ex voluptates saepe vitae
                officiis consequuntur possimus dolorem quos repudiandae omnis
                voluptatibus, deserunt, commodi at explicabo veniam.
              </div>
            )}
            {checked === '2' && (
              <div className={style.featureContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                minus illum sapiente nostrum ut? Maxime, corporis. Nesciunt
                aliquam id impedit rem odio dolorem soluta repellendus quisquam
                non, saepe, vero sit! Necessitatibus eos iste dolore commodi
                aliquid voluptate itaque! Ratione dolorum natus explicabo
                tempora veritatis, error laborum aspernatur nihil? Aspernatur
                corporis soluta autem. Autem explicabo ex numquam quasi repellat
                fugit ipsum!
              </div>
            )}
          </div>
        </Container>
      </section>
      <section className={style.owner}>
        <Container>
          <Link to={'/brand'}>
            <p className={style.ownerStatus}>Магазин от RaccoonIT</p>
            <p className={style.ownerName}>TG Market</p>
          </Link>
        </Container>
      </section>
      <FeedbackList />
      <CategoryProducts>
        <ProductsHeader title={'Промо товары'} />
      </CategoryProducts>
      {/* <MainButton /> */}
      <div className={style.footer}>
        <Container>
          <div className={style.footerWrapper}>
            <Button
              type={'mainButton'}
              text={mainButton.open && 'Перейти в корзину'}
              className={`${style.footerButton} ${
                mainButton.open && style.active
              }`}
              onClick={onClickMainButton}
            />
            {mainButton.open && (
              <div className={style.footerCounter}>
                <Button
                  type={'decrement'}
                  className={style.footerButtonDecrement}
                  onClick={onDecrement}
                />
                <p className={style.footerSum}>{mainButton.count}</p>
                <Button
                  type={'increment'}
                  className={style.footerButtonIncrement}
                  onClick={onIncrement}
                />
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};
