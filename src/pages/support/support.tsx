import React, { useState } from "react";
import style from "./support.module.scss";
import { Button, Container, Navigation } from "../../components";
import { Link } from "react-router-dom";

export const Support = () => {
  const [files, setFiles] = useState<any[]>([]);
  const answers = [
    {
      id: 0,
      question: "1Как совершать оплату?",
      answer:
        "1Оплата проходит по карте. Введите свои данные и зарегистрируйте оплату.",
    },
    {
      id: 1,
      question: "2Как совершать оплату?",
      answer:
        "2Оплата проходит по карте. Введите свои данные и зарегистрируйте оплату.",
    },
    {
      id: 2,
      question: "3Как совершать оплату?",
      answer:
        "3Оплата проходит по карте. Введите свои данные и зарегистрируйте оплату.",
    },
  ];
  const [checkedAnswer, setCheckedAnswer] = useState(
    new Array(answers.length).fill(false)
  );
  const [checkedFaq, setCheckedFaq] = useState(false);

  const handleOnChangeFaq = () => {
    setCheckedFaq(!checkedFaq);
  };

  const handleOnChangeQestions = (position: any) => {
    const updatedCheckedState = checkedAnswer.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedAnswer(updatedCheckedState);
  };

  const handleOnDeleteFile = (index: number) => {
    // const updateFiles = files.filter((file: any) => )
    const updateFiles = files.map(() => files[index] !== index)
    // setFiles(updateFiles)
    console.log(updateFiles)
    console.log(index)
    console.log(files[index])
  }

  const handleOnChange = (e: any) => {
    const targetFiles = e.target.files;
    let filesArray = Array.prototype.slice.call(targetFiles);
    setFiles([...files, ...filesArray]);
    console.log(filesArray)
    console.log(targetFiles)
  };
  return (
    <section className={style.page}>
      <Container>
        <Navigation title={"Помощь"} />
      </Container>

      <section className={style.filter}>
        <input
          type={"checkbox"}
          id={"faq"}
          checked={checkedFaq}
          onChange={handleOnChangeFaq}
        />
        <label htmlFor="faq" className={style.select}>
          Часто задаваемые вопросы
        </label>

        <ul className={style.questions}>
          {answers.map((answer: any) => (

              <li
                className={`${style.question} ${
                  checkedAnswer[answer.id] && style.active
                }`}
                key={answer.id}
              >
                <Container className={style.container}>
                  <input
                    type={"checkbox"}
                    id={answer.id}
                    name={answer.id}
                    checked={checkedAnswer[answer.id]}
                    value={answer.id}
                    onChange={() => handleOnChangeQestions(answer.id)}
                  />
                  <label htmlFor={answer.id} className={style.title}>
                    {answer.question}
                  </label>
                  <p className={style.answer}>{answer.answer}</p>
                </Container>
              </li>

          ))}
        </ul>
      </section>
      <Container>
        <p className={style.formTitle}>Остались вопросы? Напишите нам!</p>
        <form className={style.form}>
          <fieldset className={style.fieldset}>
            <input
              type="email"
              className={style.input}
              placeholder={"E-mail"}
            />
            <textarea
              className={style.textarea}
              placeholder={"Комментарий"}
            ></textarea>
          </fieldset>
          {files.length > 0 && (
            <fieldset className={style.fieldset}>
              <ul className={style.files}>
                {files.map((file: any, index: number) => (
                  <li className={style.file} key={index}>
                    <span className={style.name}>
                      {file.name} / {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                    <Button type={"delete"} onClick={() => handleOnDeleteFile(index)} />
                  </li>
                ))}
              </ul>
            </fieldset>
          )}
          <fieldset className={style.fieldset}>
            <div className={style.attach}>
              <input id="file" type="file" multiple onChange={handleOnChange} />
              <label htmlFor="file">
                <span>Прикрепить файл</span>
              </label>
            </div>
          </fieldset>
        </form>
      </Container>
      <Container className={style.footer}>
        <Button
          type={"mainButton"}
          className={style.button}
          text={"Отправить"}
        />
      </Container>
    </section>
  );
};
