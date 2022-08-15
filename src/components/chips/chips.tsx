import React, { useState } from "react";
import style from "./chips.module.scss";

export const Chips = () => {
  const years = [
    {
      year: "2019",
    },
    {
      year: "2020",
    },
    {
      year: "2021",
    },
  ];

  const [checked, setChecked] = useState(
    new Array(years.length).fill(false)
  );
  const handleOnChange = (position: any) => {
    const updatedCheckedState = checked.map((item, index) => index === position ? !item : item)

    setChecked(updatedCheckedState)
  };

  return (
    <ul className={style.ships}>
      {years.map(({year}: any, index: any) => (
        <li key={index}>
          <input
            type={"checkbox"}
            id={index}
            name={year}
            checked={checked[index]}
            value={year}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={index}>{year}</label>
        </li>
      ))}

      {/* <li>
        <input
          type={"checkbox"}
          id={"2021"}
          name={"2021"}
          checked={checked}
          value={"2021"}
          onChange={hendleCheck}
        />
        <label htmlFor={"2021"}>2021</label>
      </li>
      <li>
        <input
          type={"checkbox"}
          id={"2020"}
          name={"2020"}
          checked={checked}
          value={"2020"}
          onChange={hendleCheck}
        />
        <label htmlFor={"2020"}>2020</label>
      </li>
      <li>
        <input
          type={"checkbox"}
          id={"2019"}
          name={"2019"}
          checked={checked}
          value={"2019"}
          onChange={hendleCheck}
        />
        <label htmlFor={"2019"}>2019</label>
      </li> */}
    </ul>
  );
};
