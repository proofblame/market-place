import React, { useEffect, useRef, useState } from "react";
import style from "./main.module.scss";
import Container from "../../components/container/container";
import banner from "../../images/banner.png";
import cardImg from "../../images/card-image.jpg";

const Main = ({ data }: any) => {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState({
    offsetWidth: 0,
    clientWidth: 0,
    // offsetWidth: window.innerWidth,
    // clientWidth: document.body.clientWidth,
  });
  const [scroll, setScroll] = useState(window.innerWidth);
  const { id, isBot, first_name, last_name, username, language_code } =
    data || {};

  useEffect(() => {
    setWidth({
      // ...width,
      clientWidth: ref.current.clientWidth,
      offsetWidth: ref.current.offsetWidth,
    });
    window.addEventListener("resize", () => {
      let screenWidth = window.innerWidth;
      let windowWidth = document.body.clientWidth;
      // console.log(ref.current?.offsetWidth, ref.current?.clientWidth);
      // console.log(ref.offsetWidth);
      // const scrollbarWidth = box.offsetWidth - box.clientWidth;

      setWidth({
        // ...width,
        clientWidth: ref.current.clientWidth,
        offsetWidth: ref.current.offsetWidth,
      });
    });
  }, [width.clientWidth, width.offsetWidth, ref]);
  return (
    <section className={style.main} ref={ref}>
      <div className={style.mainWrapper}>
        <section className={style.banner}>
          <Container>
            <h1 className={style.bannerTitle}>{width.offsetWidth} px</h1>
            <p className={style.bannerSubtitle}>{width.clientWidth} px</p>
          </Container>
        </section>
        <Container>
          <p className={style.description}>{id}</p>
          <p className={style.description}>{isBot}</p>
          <p className={style.description}>{first_name}</p>
          <p className={style.description}>{last_name}</p>
          <p className={style.description}>{username}</p>
          <p className={style.description}>{language_code}</p>
          <section className={style.category}>
            <h2 className={style.categoryTitle}>Категория</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзину</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={`${style.cartButton} ${style.active}`}>
                        В корзине
                      </button>
                      <button
                        className={`${style.favoriteButton} ${style.active}`}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <button className={style.moreButton}>
                  Смотреть все &#8594;
                </button>
              </li>
            </ul>
            <section className={style.slider}>
              <ul className={style.sliderList}>
                <li className={style.sliderItem}></li>
                <li className={`${style.sliderItem} ${style.active}`}></li>
                <li className={style.sliderItem}></li>
              </ul>
            </section>
          </section>
          <section className={style.category}>
            <h2 className={style.categoryTitle}>Категория</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзину</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзине</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзине</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
            </ul>
            <section className={style.slider}>
              <ul className={style.sliderList}>
                <li className={style.sliderItem}></li>
                <li className={`${style.sliderItem} ${style.active}`}></li>
                <li className={style.sliderItem}></li>
              </ul>
            </section>
          </section>
          <section className={style.category}>
            <h2 className={style.categoryTitle}>Категория</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзину</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзине</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
              <li className={style.item}>
                <article className={style.card}>
                  <header className={style.cardHeader}>
                    <img
                      src={cardImg}
                      alt="cardImg"
                      className={style.cardImg}
                    />
                    <span className={style.cardPercent}>12%</span>
                  </header>
                  <footer className={style.cardFooter}>
                    <p className={style.cardTitle}>
                      Товар супер мега поможет вам что-то т...
                    </p>
                    <div className={style.cardPrice}>
                      <span className={style.cardPriceCost}>499 &#x20bd;</span>
                      <span className={style.cardPriceDiscount}>
                        699 &#x20bd;
                      </span>
                    </div>
                    <div className={style.buttons}>
                      <button className={style.cartButton}>В корзине</button>
                      <button className={style.favoriteButton}></button>
                    </div>
                  </footer>
                </article>
              </li>
            </ul>
            <section className={style.slider}>
              <ul className={style.sliderList}>
                <li className={style.sliderItem}></li>
                <li className={`${style.sliderItem} ${style.active}`}></li>
                <li className={style.sliderItem}></li>
              </ul>
            </section>
          </section>
        </Container>
      </div>
    </section>
  );
};

export default Main;
