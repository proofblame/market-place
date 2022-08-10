import { Link } from 'react-router-dom';
import { Container, ProductCards, Category, SvgSprite } from '../../components';

import mainBanner from './images/banner-img.png';
import Headphones from './images/headphones.png';
import Laptops from './images/laptops.png';
import Phones from './images/phones.png';
import promo from './images/promo-banner.png';
import Watches from './images/watches.png';
import style from './main.module.scss';
import spriteMain from './images/sprite.svg';
import { shortSpriteConfig } from './sprite-config';

export const Main = () => {
  return (
    <Container className={style.page}>
      <section className={style.banner}>
        <div className={style.header}>
          <Link to={'/card'}>
            <img src={mainBanner} alt='Кибер понедельник' />
          </Link>
        </div>
        <div className={style.body}>
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
      <>
        <Category title={'Электроника'} />
        <ProductCards />
      </>
      <>
        <Category title={'Категории'} link={false} />
        <section className={style.categories}>
          {shortSpriteConfig.map((item, index) => (
            <div className={style.item} key={index}>
              <Link to='/card'>
                <SvgSprite
                  sprite={spriteMain}
                  id={item.img}
                  className={style.img}
                />
              </Link>
              <p className={style.name}>{item.name}</p>
            </div>
          ))}
        </section>
      </>
      <>
        <Category title={'Скидки'} button={'Все'} />
        <ProductCards />
      </>
      <>
        <Category title={'Сезонные товары'} button={'Все'} />
        <ProductCards />
      </>
      <Link to={'/card'}>
        <img src={promo} alt='Промо баннер' />
      </Link>
    </Container>
  );
};
