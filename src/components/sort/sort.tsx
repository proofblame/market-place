import React, { useState } from 'react';
import style from './sort.module.scss';
import { Modal } from '../index';
import classnames from 'classnames';

export const Sort = () => {
  let classNames = classnames(style.option, style.active);
  const [openModal, setOpenModal] = useState(false);
  const [select, setSelect] = useState({
    name: 'popular',
    value: 'Популярные',
  });
  const handleClickModal = () => {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };
  const handleSelect = (e: any) => {
    const { name, value } = e.target;
    setSelect({
      name,
      value,
    });
    handleClickModal();
  };
  return (
    <>
      <section className={style.filter}>
        <div className={style.select} onClick={handleClickModal}>
          {select.value}
        </div>
      </section>
      {openModal && (
        <Modal toggleModal={handleClickModal} modal={openModal}>
          <ul className={style.options}>
            <li
              className={`${style.option} ${
                select.name === 'popular' && style.active
              }`}>
              <input
                type={'radio'}
                value={'Популярные'}
                id={'popular'}
                name={'popular'}
                onChange={handleSelect}
                checked={select.name === 'popular'}
              />
              <label htmlFor={'popular'}>Популярные</label>
            </li>
            <li
              className={`${style.option} ${
                select.name === 'new' && style.active
              }`}>
              <input
                type={'radio'}
                value={'Новинки'}
                id={'new'}
                name={'new'}
                onChange={handleSelect}
                checked={select.name === 'new'}
              />
              <label htmlFor={'new'}>Новинки</label>
            </li>
            <li
              className={`${style.option} ${
                select.name === 'ascending' && style.active
              }`}>
              <input
                type={'radio'}
                value={'Цена по возрастанию'}
                id={'ascending'}
                name={'ascending'}
                onChange={handleSelect}
                checked={select.name === 'ascending'}
              />
              <label htmlFor={'ascending'}>Цена по возрастанию</label>
            </li>
            <li
              className={`${style.option} ${
                select.name === 'descending' && style.active
              }`}>
              <input
                type={'radio'}
                value={'Цена по убыванию'}
                id={'descending'}
                name={'descending'}
                onChange={handleSelect}
                checked={select.name === 'descending'}
              />
              <label htmlFor={'descending'}>Цена по убыванию</label>
            </li>
            <li
              className={`${style.option} ${
                select.name === 'amount' && style.active
              }`}>
              <input
                type={'radio'}
                value={'По размеру скидки'}
                id={'amount'}
                name={'amount'}
                onChange={handleSelect}
                checked={select.name === 'amount'}
              />
              <label htmlFor={'amount'}>По размеру скидки</label>
            </li>
            <li
              className={`${style.option} ${
                select.name === 'rating' && style.active
              }`}>
              <input
                type={'radio'}
                value={'Высокий рейтинг'}
                id={'rating'}
                name={'rating'}
                onChange={handleSelect}
                checked={select.name === 'rating'}
              />
              <label htmlFor={'rating'}>Высокий рейтинг</label>
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
};
