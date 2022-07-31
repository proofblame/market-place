import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import {
    Button, CategoryProducts, Container, FeedbackList, MainButton, ProductsHeader, Slider, Swiper
} from '../../components';
import { HeadUpButton } from '../../components/head-up-button/head-up-button';
import style from './card.module.scss';
import Left from './images/left.svg';
import LeftLight from './images/LeftLight.svg';
import cardImg from './images/product.svg';
import rating from './images/Rating.svg';
import Right from './images/right.svg';
import RightLight from './images/RightLight.svg';
import starsImg from './images/stars.png';

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
          <Container>
            <div className={style.container}>
              <HeadUpButton
                left={true}
                right={true}
                leftImage={Left}
                rightImage={Right}
              >
                <div className={style.feedbackContainer}>
                  <div className={style.ratingImg}>
                    <img src={rating} alt='рейтинг' />
                  </div>
                  <span className={style.ratingAmount}>4,85</span>
                  <span className={style.feedback}>
                    <Link className={style.feedbacklink} to='#'>
                      999 тыс
                    </Link>
                  </span>
                </div>
              </HeadUpButton>
              <div className={style.navRightColumn}>
                <HeadUpButton left={true} leftImage={Left}>
                  <Button className={style.shareButton} type={'share'} />
                </HeadUpButton>
                <HeadUpButton right={true} rightImage={Right}>
                  <Button type={'favorite'} />
                </HeadUpButton>
              </div>
            </div>
          </Container>
        </Swiper>

        {/* <ul className={style.imageList}>
          <li className={style.imageItem}>
            <img src={cardImg} alt="" className={style.image} />
          </li>
        </ul> */}
        {/* <Slider color={'light'} className={style.dots} /> */}
      </div>
      <Container>
        <h1 className={style.title}>
          Sony WH-1000XM4 «Лучшие наушники»тра та та та на бело м фоне красивые
          с крутым звуком и оснащены стерео системой
        </h1>
        <div className={style.priceBlock}>
          <div className={style.cost}>
            <span className={style.boughtAmount}>Купили более 1 400 раз</span>
            <span className={style.discountPercent}>-25%</span>
            <span className={style.costCurrent}>25 000 000 &#x20bd;</span>
            <span className={style.costPrevious}>50 000 000 &#x20bd;</span>
          </div>
        </div>
      </Container>
      <section className={style.tabs}>
        <Container>
          <div className={style.tabsHeader}>
            <HeadUpButton
              className={`${style.headUpButton} ${
                checked === '1' && style.active
              }`}
              classNameLeft={style.left}
              classNameRight={style.right}
              left={checked === '1' ? true : false}
              right={checked === '1' ? true : false}
              leftImage={LeftLight}
              rightImage={RightLight}
            >
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
                htmlFor='caption-tab'
              >
                Описание
              </label>
            </HeadUpButton>
            <HeadUpButton
              className={`${style.headUpButton} ${
                checked === '2' && style.active
              }`}
              classNameLeft={style.left}
              classNameRight={style.right}
              left={checked === '2' ? true : false}
              right={checked === '2' ? true : false}
              leftImage={LeftLight}
              rightImage={RightLight}
            >
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
                htmlFor='feature-tab'
              >
                Характеристика
              </label>
            </HeadUpButton>
          </div>
        </Container>
        <div className={style.tabsContent}>
          {checked === '1' && (
            <div className={style.captionContent}>
              Наслаждайтесь любимой музыкой и подкастами еще дольше с наушниками
              WH-CH510 от Sony. Благодаря легкой конструкции и 35 часам работы
              от аккумулятора вы можете не беспокоиться, что наушники разрядятся
              в пути. Подключите наушники к смартфону или планшету через
              беспроводную технологию Bluetooth и наслаждайтесь прослушиванием
              любимой музыки.
            </div>
          )}
          {checked === '2' && (
            <div className={style.featureContent}>
              <div className={style.feature}>
                <span className={style.featureName}>Вид: </span>
                <span className={style.featureImplementation}>
                  Беспроводные наушники
                </span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>Микрофон: </span>
                <span className={style.featureImplementation}>Да</span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>
                  Конструкция наушников:{' '}
                </span>
                <span className={style.featureImplementation}>
                  Внутриканальные
                </span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>Шумоподавление: </span>
                <span className={style.featureImplementation}>Активное</span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>
                  Время работы в режиме разговора:{' '}
                </span>
                <span className={style.featureImplementation}>10 часов</span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>
                  Время зарядки до 100%:{' '}
                </span>
                <span className={style.featureImplementation}>2 часа</span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>Обьём аккамулятора: </span>
                <span className={style.featureImplementation}>4000 Ампер</span>
              </div>
              <div className={style.feature}>
                <span className={style.featureName}>USB: </span>
                <span className={style.featureImplementation}>Нет</span>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className={style.owner}>
        <Container>
          <Link to={'/brand'}>
            <p className={style.ownerStatus}>Магазин от RaccoonIT</p>
            <p className={style.ownerName}>
              Headphones магазин крутых наушников
            </p>
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
            <Link to='/cart'>
              <Button
                type={'mainButton'}
                text={mainButton.open && 'Перейти в корзину'}
                className={`${style.footerButton} ${
                  mainButton.open && style.active
                }`}
                onClick={onClickMainButton}
              />
            </Link>
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
