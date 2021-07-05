import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./modalContext";
import useIsMounted from "src/hooks/useIsMounted";

import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal: React.FC = ({ children }) => {
  const isMounted = useIsMounted();
  const { isOpen, closeModal, afterOpenModal } = useContext(ModalContext);

  if (!isMounted) return null;

  const PortalChild = () => (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      this is my modal content:
      {children}
    </ReactModal>
  );

  return ReactDOM.createPortal(<PortalChild />, document.body);
};
ReactModal.setAppElement("body");

export default Modal;
