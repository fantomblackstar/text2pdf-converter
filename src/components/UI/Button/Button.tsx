import React from "react";
import { twMerge } from "tailwind-merge";

import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-lg text-xl font-medium px-5 py-2 text-gray-700 border border-slate-300 duration-200 bg-blue-600 hover:bg-blue-600/75 text-gray-50",
        props.className,
      )}>
      {props.title ? props.title : props.children}
    </button>
  );
};

export default Button;
