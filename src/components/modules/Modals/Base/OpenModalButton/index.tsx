import React from "react";
import { ModalContext } from "../modalContext";

const OpenModalButton = () => {
  const { openModal } = React.useContext(ModalContext);

  return <button onClick={openModal}>Open Modal</button>;
};

export default OpenModalButton;
