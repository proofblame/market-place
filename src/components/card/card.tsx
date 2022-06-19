import style from "./card.module.scss";
import cardImg from "../../images/card-image.jpg";

const Card = () => {
  return (
    <article className={style.card}>
      <header className={style.cardHeader}>
        <img src={cardImg} alt="cardImg" className={style.cardImg} />
        <span className={style.cardPercent}>12%</span>
      </header>
      <footer className={style.cardFooter}>
        <p className={style.cardTitle}>
          Товар супер мега поможет вам что-то т...
        </p>
        <div className={style.cardPrice}>
          <span className={style.cardPriceCost}>499 &#x20bd;</span>
          <span className={style.cardPriceDiscount}>699 &#x20bd;</span>
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
  );
};

export default Card;
