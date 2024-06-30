import React, { createContext, ReactNode,useContext, useState } from "react";

import ModalForm from "../components/ModalForm/ModalForm";
import { ChildrenProps } from "../types";
import { ModalContextProps } from "../types/contexts";

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState<ReactNode>();

  const openModal = (body: ReactNode) => {
    setIsOpen(true);
    setBody(body);
  };

  const closeModal = () => {
    setIsOpen(false);
    setBody(undefined);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, body }}>
      {children}
      <ModalForm />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
