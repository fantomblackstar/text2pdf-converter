import React from "react";
import { twMerge } from "tailwind-merge";

import SpinnerIcon from "../../assets/icons/SpinnerIcon";
import LoaderProps from "./interface";

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return <SpinnerIcon className={twMerge("animate-spin", className)} />;
};

export default Loader;
