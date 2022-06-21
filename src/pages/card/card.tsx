import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Container from "../../components/container/container";
import Slider from "../../components/slider/slider";
import style from "./card.module.scss";
import cardImg from "./images/card-img.png";
import ratingStars from "./images/rating-stars.png";
import { SwiperLocal as Swiper } from "../../components/swiper/swiper";
import { SwiperSlide } from "swiper/react";

export const Card = () => {
  const [checked, setChecked] = useState("1");

  const changeRadioInput = (e: any) => {
    setChecked(e.target.value);
  };

  return (
    <section className={style.section}>
      <Container>
        <Link to={"/"}>
          <Button type={"back"} className={style.buttonBack} />
        </Link>
        <div className={style.card}>
          <img className={style.img} src={cardImg} alt="" />
          <Slider className={style.slider} />
          <h1 className={style.title}>Бабушкино лечо</h1>
          <p className={style.caption}>Зимняя сказка для Димы</p>
          <div className={style.rating}>
            <div className={style.ratingReview}>
              <div className={style.stars}>
                <img src={ratingStars} alt="" />
              </div>
              <p className={style.review}>22 отзыва</p>
            </div>
            <Button type={"favorite"} className={style.buttonFavorite} />
          </div>
          <div className={style.prices}>
            <span className={style.cost}>499 &#x20bd;</span>
            <span className={style.discount}>699 &#x20bd;</span>
          </div>
          <Button type={"addToCard"} className={style.buttonAdd} />
        </div>
      </Container>
      <section className={style.owner}>
        <Container>
          <p className={style.vendor}>Продавец</p>
          <h2 className={style.vendorTitle}>TG Market</h2>
        </Container>
      </section>

      <section className={style.tabs}>
        <Container>
          {/* <article className={style.tab}>
            <div className={style.inputs}>
              <input
                type="radio"
                id="description"
                name="tab-group"
                value="1"
                checked={checked === "1" ? true : false}
                onChange={changeRadioInput}
                className={style.inputTab}
              />
              <label
                htmlFor="description"
                className={`${style.tabTitle} ${
                  checked === "1" && style.active
                }`}>
                Описание
              </label>
              <input
                type="radio"
                id="feature"
                name="tab-group"
                value="2"
                checked={checked === "2" ? true : false}
                onChange={changeRadioInput}
                className={style.inputTab}
              />
              <label
                htmlFor="feature"
                className={`${style.tabTitle} ${
                  checked === "2" && style.active
                }`}>
                Характеристики
              </label>
            </div>
            {checked === "1" && (
              <section className={style.tabContent} id="description-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, voluptatum aperiam quae omnis explicabo, distinctio
                laborum itaque hic unde nobis quod aliquid similique minima
                aspernatur tenetur suscipit ipsum. Deleniti, repellat?
              </section>
            )}
            {checked === "2" && (
              <section className={style.tabContent} id="feature-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium inventore mollitia repellat deserunt voluptatem
                deleniti quis labore numquam. Saepe nemo, debitis qui, ipsum
                obcaecati nihil atque veritatis consequatur adipisci dolore
                cupiditate officia optio odio illo distinctio tenetur
                necessitatibus tempora ex at ullam quos sed! Itaque quod odio
                dolorum, a suscipit illo consectetur, magnam non quisquam error
                doloremque! Quia ut omnis quod facilis nisi eius neque eligendi
                rem a perspiciatis dignissimos ex voluptate iste totam
                architecto atque accusantium ea repellat veritatis, hic
                necessitatibus. Architecto qui et odio doloribus, quasi quos
                consequatur dolorem quaerat officia itaque impedit maiores
                repudiandae numquam reprehenderit, fuga magni autem repellat
                veritatis blanditiis beatae labore. Maxime error nisi, sapiente
                facere unde dolorem ipsum consectetur atque fugiat quis autem
                totam nulla minus eaque vitae qui ipsam ab odit! Tempore
                doloremque natus perspiciatis blanditiis voluptatem dicta
                eligendi aliquam, consequuntur consequatur consectetur omnis
                quae, eos, tempora non in. Porro nobis laboriosam eius, debitis
                ipsum, error aut quia voluptatem necessitatibus illum
                doloremque, sit impedit quam? Voluptate perferendis ipsam
                dolorum at possimus itaque impedit eius, nobis reiciendis dicta
                dolores odio, a, ducimus eum facilis necessitatibus quaerat
                recusandae aperiam reprehenderit tempora voluptas odit! Eos, quo
                iusto veritatis at sint ipsum provident. Nisi, reiciendis
                aperiam.
              </section>
            )}
          </article> */}
          <Swiper>
            <SwiperSlide>
              <section className={style.tabContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, voluptatum aperiam quae omnis explicabo, distinctio
                laborum itaque hic unde nobis quod aliquid similique minima
                aspernatur tenetur suscipit ipsum. Deleniti, repellat?
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className={style.tabContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium inventore mollitia repellat deserunt voluptatem
                deleniti quis labore numquam. Saepe nemo, debitis qui, ipsum
                obcaecati nihil atque veritatis consequatur adipisci dolore
                cupiditate officia optio odio illo distinctio tenetur
                necessitatibus tempora ex at ullam quos sed! Itaque quod odio
                dolorum, a suscipit illo consectetur, magnam non quisquam error
                doloremque! Quia ut omnis quod facilis nisi eius neque eligendi
                rem a perspiciatis dignissimos ex voluptate iste totam
                architecto atque accusantium ea repellat veritatis, hic
                necessitatibus. Architecto qui et odio doloribus, quasi quos
                consequatur dolorem quaerat officia itaque impedit maiores
                repudiandae numquam reprehenderit, fuga magni autem repellat
                veritatis blanditiis beatae labore. Maxime error nisi, sapiente
                facere unde dolorem ipsum consectetur atque fugiat quis autem
                totam nulla minus eaque vitae qui ipsam ab odit! Tempore
                doloremque natus perspiciatis blanditiis voluptatem dicta
                eligendi aliquam, consequuntur consequatur consectetur omnis
                quae, eos, tempora non in. Porro nobis laboriosam eius, debitis
                ipsum, error aut quia voluptatem necessitatibus illum
                doloremque, sit impedit quam? Voluptate perferendis ipsam
                dolorum at possimus itaque impedit eius, nobis reiciendis dicta
                dolores odio, a, ducimus eum facilis necessitatibus quaerat
                recusandae aperiam reprehenderit tempora voluptas odit! Eos, quo
                iusto veritatis at sint ipsum provident. Nisi, reiciendis
                aperiam.
              </section>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </section>
  );
};
