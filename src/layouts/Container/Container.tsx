import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={twMerge("container px-4 mx-auto", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
