import React, { ChangeEvent } from "react";

import DragAndDropInput from "../UI/DragAndDropInput/DragAndDropInput";
import { ConverterInputProps } from "./interface";

const ConverterInput: React.FC<ConverterInputProps> = ({
  onTextChange,
  text,
}) => {
  const onDropFile = (acceptedFiles: File[]) => {
    const file = acceptedFiles?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        onTextChange(text.trim());
      };
      reader.readAsText(file);
    }
  };

  const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  return (
    <div className="h-[60vh] md:h-80 xl:h-[31.25rem] w-full rounded-lg relative bg-blue-600 p-2 lg:p-4">
      <textarea
        value={text}
        onChange={onTextareaChange}
        className="w-full h-full border-2 border-dashed bg-blue-800 rounded-lg resize-none outline-none text-white p-4 text-lg"
      />
      {text.length === 0 && (
        <div className="min-w-max md:w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <DragAndDropInput
            onDrop={onDropFile}
            containerClassname="text-gray-100 py-8 md:py-4 mb-3 lg:mb-5"
          />
          <p className="text-lg text-center text-white/[0.9]">
            Або впишіть текст тут
          </p>
        </div>
      )}
    </div>
  );
};

export default ConverterInput;
