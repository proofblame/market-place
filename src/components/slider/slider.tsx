import style from "./slider.module.scss";

const Slider = ({ className }: any) => {
  return (
    <section className={`${style.slider} ${className}`}>
      <ul className={style.sliderList}>
        <li className={style.sliderItem}></li>
        <li className={`${style.sliderItem} ${style.active}`}></li>
        <li className={style.sliderItem}></li>
      </ul>
    </section>
  );
};

export default Slider;
