import React from "react";
import Button from "src/components/elements/FormElements/Button";
import { ModalContext } from "../modalContext";

const OpenModalButton = () => {
  const { openModal } = React.useContext(ModalContext);

  return <Button onClick={openModal}>Open Modal</Button>;
};

export default OpenModalButton;
