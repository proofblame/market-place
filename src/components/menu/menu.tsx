import React, { useState } from 'react';
import style from './menu.module.scss';
import { Button } from '../index';

export const Menu = () => {
  const [active, setActive] = useState(false);
  const handleClickButton = () => {
    setActive(!active);
  };
  const closeMenu = () => {
    setActive(false);
  };
  return (
    <section className={style.section}>
      <nav className={`${style.nav} ${active && style.active}`}>
        <Button type={'basket'} onClick={closeMenu} />
        <Button type={'share'} onClick={closeMenu} />
        <Button type={'search'} onClick={closeMenu} />
        <Button type={'account'} onClick={closeMenu} />
        <Button type={'home'} onClick={closeMenu} />
      </nav>
      <Button type={'menu'} active={active} onClick={handleClickButton} />
    </section>
  );
};
