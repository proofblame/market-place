import React, { useRef, useState } from "react";
import style from "./support.module.scss";
import { Button, Container, Navigation } from "../../components";
import { Link } from "react-router-dom";
import { Modal } from "../../components";

export const Support = () => {
  const ref = useRef<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  const [filesError, setFilesError] = useState(false);
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

  const handleOnDeleteFile = (name: string) => {
    const updateFiles = files.filter((file: any) => file.name !== name);
    setFiles(updateFiles);
    console.log(updateFiles);
  };

  const handleClickModal = () => {
    if (openModal) {
      setFilesError(false);
      // setOpenModal(false);
      ref.current.value = null;
    } else {
      setOpenModal(true);
    }
  };

  const handleOnChange = (e: any) => {
    const targetFiles = e.target.files;
    let filesArray = Array.from(targetFiles);
    let validitySizeArray = filesArray.filter(
      (file: any) =>
        file.size <= 1 * 1024 * 1024 &&
        ["image/jpeg", "image/png"].some((item) => file.type === item)
    );
    if (validitySizeArray.length < filesArray.length) {
      setFilesError(true);
    }
    setFiles(validitySizeArray);
    console.log(validitySizeArray);
  };
  return (
    <>
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
                      <Button
                        type={"delete"}
                        onClick={() => handleOnDeleteFile(file.name)}
                      />
                    </li>
                  ))}
                </ul>
              </fieldset>
            )}
            <fieldset className={style.fieldset}>
              <div className={style.attach}>
                <input
                  id="file"
                  type="file"
                  multiple
                  onChange={handleOnChange}
                  ref={ref}
                />
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
      {filesError && (
        <Modal toggleModal={handleClickModal}>
          <section className={style.error}>
            <p className={style.title}>
              <span>Ошибка</span>
            </p>
            <p className={style.subtitle}>
              Максимальный размер изображения 2 MB
            </p>
            <p className={style.subtitle}>Файл должен быть картинкой</p>
          </section>
        </Modal>
      )}
    </>
  );
};
