import { useState } from "react";
import { ModalInteractions } from "./types";

const useModal = (): ModalInteractions => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = "initial";
    setIsOpen(false);
  };
  const afterOpenModal = () => {
    console.log("<====Fired after modal opened===>");
  };

  return {
    isOpen,
    openModal,
    closeModal,
    afterOpenModal,
  };
};

export default useModal;
