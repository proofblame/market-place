import React from 'react';
import style from './search.module.scss';
import { Container } from '../index';
import clockIcon from './images/clock-icon.svg';
import searchIcon from './images/search-icon.svg';
import bootsImg from './images/boots.png';
import { hideSearch } from '../../services/reducers/search';
import { useDispatch } from '../../services/hooks';

export const Search = () => {
  const dispatch = useDispatch();
  const handleCloseSearch = () => {
    dispatch(hideSearch());
  };
  return (
    <div className={style.container} onClick={handleCloseSearch}>
      <section className={style.search} onClick={(e) => e.stopPropagation()}>
        <Container>
          <form className={style.form}>
            <fieldset className={style.fieldset}>
              <div className={style.input}>
                <button className={style.back}></button>
                <input type='text' placeholder='Поиск' />
                <button className={style.clear}></button>
              </div>
              <button className={style.button}></button>
            </fieldset>
          </form>
        </Container>
        <section className={style.field}>
          <Container>
            <div className={style.header}>
              <p className={style.title}>История</p>
              <p className={style.clear}>Очистить</p>
            </div>
          </Container>
          <Container>
            <ul className={style.chips}>
              <li className={style.chip}>Nike</li>
              <li className={style.chip}>Adidas</li>
            </ul>
          </Container>
          <ul className={style.list}>
            <li className={`${style.item} ${style.active}`}>
              <Container className={style.wrapper}>
                <img src={clockIcon} alt='' />
                <p className={style.result}>Белые кроссовки</p>
                <button className={style.delete}></button>
              </Container>
            </li>
            <li className={style.item}>
              <Container className={style.wrapper}>
                <img src={clockIcon} alt='' />
                <p className={style.result}>Белые кроссовки</p>
                <button className={style.delete}></button>
              </Container>
            </li>
            <li className={style.item}>
              <Container className={style.wrapper}>
                <img src={clockIcon} alt='' />
                <p className={style.result}>Белые кроссовки</p>
                <button className={style.delete}></button>
              </Container>
            </li>
            <li className={style.item}>
              <Container className={style.wrapper}>
                <img src={searchIcon} alt='' />
                <p className={style.result}>Белые кроссовки</p>
                <button className={style.next}></button>
              </Container>
            </li>
            <li className={style.item}>
              <Container className={style.wrapper}>
                <img src={searchIcon} alt='' />
                <p className={style.find}>
                  <span className={style.title}>Кроссовки белые Adidas</span>
                  <span className={style.category}>
                    Одежда и обувь/Кроссовки
                  </span>
                </p>
                <button className={style.next}></button>
              </Container>
            </li>
            <li className={`${style.item} ${style.active}`}>
              <Container className={style.wrapper}>
                <img src={bootsImg} alt='' />
                <p className={style.find}>
                  <span className={style.title}>Кроссовки белые Adidas</span>
                  <span className={style.category}>
                    Одежда и обувь/Кроссовки
                  </span>
                </p>
                <button className={style.next}></button>
              </Container>
            </li>
            <li className={style.item}>
              <Container className={style.wrapper}>
                <img src={searchIcon} alt='' />
                <p className={style.find}>
                  <span className={style.title}>Кроссовки белые Adidas</span>
                  <span className={style.category}>
                    Одежда и обувь/Кроссовки
                  </span>
                </p>
                <button className={style.next}></button>
              </Container>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
