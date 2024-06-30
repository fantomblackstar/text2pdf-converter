import React from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import { useModal } from "../../contexts/ModalProvider";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../UI/Button/Button";

const ModalForm: React.FC = () => {
  const { isOpen, closeModal, body } = useModal();
  const modalFormRef = useOutsideClick<HTMLDivElement>(closeModal);
  const modalRootEl = document.getElementById("modal-form") || document.body;

  return createPortal(
    <div
      className={twMerge(
        "w-screen h-screen fixed top-0 left-0",
        !isOpen && "hidden",
      )}>
      <div className="h-full w-full bg-gray-300 opacity-60"></div>
      <div
        ref={modalFormRef}
        className="absolute top-1/2 left-0 px-4 md:px-0 md:left-1/2 w-full md:w-auto md:-translate-x-1/2 -translate-y-1/2">
        <Button
          className="rounded-full ml-auto block w-max mb-1 p-1 w-8 h-8 text-sm md:translate-x-1/2"
          onClick={closeModal}>
          X
        </Button>
        {body}
      </div>
    </div>,
    modalRootEl,
  );
};

export default ModalForm;
