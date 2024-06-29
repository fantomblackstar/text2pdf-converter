import React from "react";
import { twMerge } from "tailwind-merge";

import ArrowRightIcon from "../../assets/icons/ArrowRight";
import Button from "../UI/Button/Button";
import { PDFNavigationProps } from "./interface";

const PDFNavigation: React.FC<PDFNavigationProps> = ({
  currentPage,
  onPageChange,
  pageCount,
}) => {
  const onPrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 gap-[1px] h-10 flex-wrap">
      <Button
        onClick={onPrevClick}
        disabled={currentPage === 1}
        className="px-1 h-full py-0">
        <ArrowRightIcon className="rotate-180" />
      </Button>
      {Array.from({ length: pageCount }, (_, index) => (
        <Button
          key={index}
          className={twMerge(
            "px-4 h-full py-0",
            currentPage === index + 1 && "bg-blue-800",
          )}
          onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={onNextClick}
        disabled={currentPage === pageCount}
        className="h-full px-1 py-0">
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default PDFNavigation;
