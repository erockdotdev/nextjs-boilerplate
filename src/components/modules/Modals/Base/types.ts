export type ModalContent = JSX.Element | string | null;

export type ModalInteractions = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  afterOpenModal: () => void;
};
