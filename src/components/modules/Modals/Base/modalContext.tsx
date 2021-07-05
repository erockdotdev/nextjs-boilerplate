import React from "react";
import useModal from "./useModal";
import { ModalInteractions } from "./types";

const ModalDefault = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  afterOpenModal: () => {},
};

const ModalContext = React.createContext<ModalInteractions>(ModalDefault);
const { Provider } = ModalContext;

const ModalProvider: React.FC = ({ children }) => {
  const { isOpen, openModal, closeModal, afterOpenModal } = useModal();

  return (
    <Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        afterOpenModal,
      }}
    >
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
