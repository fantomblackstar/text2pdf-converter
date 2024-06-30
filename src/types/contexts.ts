import { ReactNode } from "react";

export interface ModalContextProps {
  isOpen: boolean;
  openModal: (body: ReactNode) => void;
  closeModal: () => void;
  body: ReactNode;
}
