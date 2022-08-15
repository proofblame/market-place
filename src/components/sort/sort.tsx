import React, { useState } from "react";
import style from "./sort.module.scss";
import { Modal } from "../index";

export const Sort = ({arraySort}:any) => {

  const [openModal, setOpenModal] = useState(false);
  const [select, setSelect] = useState({
    name: arraySort[0].name,
    value: arraySort[0].value,
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
        <span className={style.select} onClick={handleClickModal}>
          {select.value}
        </span>
      </section>
      {openModal && (
        <Modal toggleModal={handleClickModal} modal={openModal}>
          <ul className={style.options}>
            {arraySort.map((item: any) => (
              <li
              key={item.name}
                className={`${style.option} ${
                  select.name === item.name && style.active
                }`}
              >
                <input
                  type={"radio"}
                  value={item.value}
                  id={item.name}
                  name={item.name}
                  onChange={handleSelect}
                  checked={select.name === item.name}
                />
                <label htmlFor={item.name}>{item.value}</label>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
};
