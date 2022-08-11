import React from 'react';
import style from './categories.module.scss';
import { Container, Navigation, SvgSprite } from '../../components';
import { Link } from 'react-router-dom';
import { spriteConfig } from '../../utils/sprite-config';
import spriteMain from '../../images/sprite.svg';

export const Categories = () => {
  return (
    <Container className={style.page}>
      <Navigation title={'Категории'} />
      <section className={style.categories}>
        {spriteConfig.map((item, index) => (
          <div className={style.item} key={index}>
            <Link to='/categories'>
              <SvgSprite
                sprite={spriteMain}
                id={item.img}
                className={style.img}
              />
            </Link>
            <p className={style.caption}>{item.name}</p>
          </div>
        ))}
      </section>
    </Container>
  );
};
