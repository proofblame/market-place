import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {
  Button,
  Container,
  FeedbackList,
  ProductCards,
  ProductsHeader,
  Swiper,
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
  const [mainButton, setMainButton] = useState({
    open: false,
    count: 0,
  });
  const onDecrement = () => {
    if (mainButton.count === 1) {
      setMainButton({
        count: 0,
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
        open: false,
      });
      navigate('/cart');
    }
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
    <section className={style.section}>
      <Container>
        <Button type={'back'} className={style.backButton} />
      </Container>
      <section>
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
            <img src={cardImg} alt='' className={style.cardImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cardImg} alt='' className={style.cardImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cardImg} alt='' className={style.cardImg} />
          </SwiperSlide>
          <Container className={style.buttonsGroup}>
            <div className={style.rating}>
              <span className={style.ratingStars}>4,85</span>
              <span className={style.ratingReviews}>
                <Link to={'/feedbacks'}>999 тыс.</Link>
              </span>
            </div>
            <div className={style.buttonsRight}>
              <Button type={'share'} className={style.buttonShare} />
              <Button type={'favorite'} className={style.buttonFavorite} />
            </div>
          </Container>
        </Swiper>
      </section>

      <Container>
        <h1 className={style.title}>
          Sony WH-1000XM4 «Лучшие наушники»тра та та та на бело м фоне красивые
          с крутым звуком и оснащены стерео системой
        </h1>
        <div className={style.cost}>
          <div className={style.row}>
            <span className={style.boughtAmount}>Купили более 1 400 раз</span>
            <span className={style.discountPercent}>-25%</span>
          </div>
          <div className={style.row}>
            <span className={style.costCurrent}>25 000 000 &#x20bd;</span>
            <span className={style.costPrevious}>50 000 000 &#x20bd;</span>
          </div>
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
        </Container>
        <div className={style.tabsContent}>
          <Container>
            {checked === '1' && (
              <div className={style.tabsTab}>
                <div
                  className={`${style.tabsTabWrapper} ${
                    show.hide && style.active
                  }`}>
                  <p className={style.tabsTabText}>
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
              <div className={style.tabsTab}>
                <div
                  className={`${style.tabsTabWrapper} ${
                    show.hide && style.active
                  }`}>
                  <div className={style.tabsTable}>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>Вид:</p>
                      <p className={style.tabsTableRowValue}>
                        Беспроводные наушники
                      </p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>Микрофон:</p>
                      <p className={style.tabsTableRowValue}>Да</p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>
                        Конструкция наушников:
                      </p>
                      <p className={style.tabsTableRowValue}>Внутриканальные</p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>Шумоподавление:</p>
                      <p className={style.tabsTableRowValue}> Активное</p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>
                        Время работы в режиме разговора:
                      </p>
                      <p className={style.tabsTableRowValue}>10 часов</p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>
                        Время зарядки до 100%:
                      </p>
                      <p className={style.tabsTableRowValue}>2 часа</p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>
                        Обьём аккамулятора:
                      </p>
                      <p className={style.tabsTableRowValue}>4000 Ампер</p>
                    </div>
                    <div className={style.tabsTableRow}>
                      <p className={style.tabsTableRowName}>USB:</p>
                      <p className={style.tabsTableRowValue}>Нет</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Container>
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
      <Container>
        <ProductsHeader title={'Промо товары'} />
        <ProductCards className={style.productsCards} />
        <ProductCards className={style.productsCards} />
      </Container>
      {/* <MainButton /> */}
      <div className={style.footer}>
        <Container>
          <div className={style.footerWrapper}>
            <Button
              type={'mainButton'}
              text={mainButton.open && 'В корзине'}
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
