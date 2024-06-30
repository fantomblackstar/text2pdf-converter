import React, { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

const ArrowRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      className={twMerge(
        "w-6 h-6 text-gray-800 dark:text-white",
        props.className,
      )}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  );
};

export default ArrowRightIcon;
