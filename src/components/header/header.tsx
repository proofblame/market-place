import { Link } from "react-router-dom";
import style from "./header.module.scss";
import logo from "../../images/logo-icon.svg";
import cart from "../../images/cart-icon.svg";
import menu from "../../images/menu-icon.svg";
import Container from "../container/container";
const Header = ({ onNav }: any) => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <Link to={"/"} className={style.logo}>
            <img
              className={style.logoImg}
              src={logo}
              alt="RaccoonIT TG Market"
            />
            <p className={style.logoTitle}>
              <span className={style.logoBrand}>RaccoonIT</span>
              <span className={style.logoCaption}>TG Market</span>
            </p>
          </Link>
          <div className={style.rightColumn}>
            <Link to={"/cart"} className={style.cart}>
              <img className={style.cartImg} src={cart} alt="Корзина" />
              <span className={style.cartCount}>1</span>
            </Link>
            <img className={style.menu} src={menu} alt="Меню" onClick={onNav} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
