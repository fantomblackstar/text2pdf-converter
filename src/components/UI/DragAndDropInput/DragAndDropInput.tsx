import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";

import FileLinesIcon from "../../../assets/icons/FileLinesIcon";
import Button from "../Button/Button";

interface DragAndDropInputProps {
  onDrop: (acceptedFiles: File[]) => void;
  containerClassname?: string;
}

const DragAndDropInput: React.FC<DragAndDropInputProps> = ({
  onDrop,
  containerClassname,
}) => {
  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/plain": [".txt"],
    },
    onDrop: onDropCallback,
  });

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        `flex flex-col gap-2 lg:gap-4 items-center justify-center p-4 md:p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200`,
        isDragActive ? "border-white bg-blue-500" : "border-gray-50",
        containerClassname,
      )}>
      <input {...getInputProps()} />
      <FileLinesIcon className="w-10 h-10" />
      <p className="text-sm sm:text-base text-center">
        Перетягніть .txt файл сюди
      </p>
      <Button
        className="bg-gray-100 hover:bg-white/75 text-gray-700"
        title="Виберіть файл"
      />
    </div>
  );
};

export default DragAndDropInput;
