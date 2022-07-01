import style from "./modal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modals") as HTMLElement;

export const Modal = ({ modal, children, toggleModal }: any) => {
  // useEffect(() => {
  //   const handleEscapePress = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       toggleModal();
  //     }
  //   };

  //   document.addEventListener("keydown", handleEscapePress);

  //   return () => {
  //     document.removeEventListener("keydown", handleEscapePress);
  //   };
  // }, [modal, toggleModal]);

  return ReactDOM.createPortal(
    modal && (
      <section className={style.modalOverlay} onClick={toggleModal}>
        <div className={style.modalBody} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </section>
    ),
    modalRoot
  );
};
