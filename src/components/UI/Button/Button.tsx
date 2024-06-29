import React from "react";
import { twMerge } from "tailwind-merge";

import Loader from "../../Loader/Loader";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
  className,
  isLoading,
  text,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "rounded-lg text-xl font-medium px-5 py-2 text-gray-700 outline-none duration-200 bg-blue-600 text-gray-50 cursor-pointer disabled:opacity-75 hover:opacitн-[0.9]",
        isLoading && "flex items-center align-center gap-2",
        className,
      )}>
      {isLoading && <Loader />}
      {text ? <p>{text}</p> : children}
    </button>
  );
};

export default Button;
