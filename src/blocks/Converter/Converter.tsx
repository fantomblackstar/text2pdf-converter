import React, { useState } from "react";

import { useGeneratePDFMutation } from "../../api/queries";
import ConverterInput from "../../components/ConverterInput/ConverterInput";
import Button from "../../components/UI/Button/Button";
import Container from "../../layouts/Container/Container";

const Converter: React.FC = () => {
  const [text, setText] = useState<string>("");

  const { isPending, mutate, isError } = useGeneratePDFMutation();

  const onGeneratePDFClick = () => {
    mutate(text);
  };

  return (
    <Container className="my-5 lg:my-10">
      <h1 className="text-3xl text-center mb-4 lg:mb-8 text-gray-600">
        Текст Конвертер
      </h1>
      <ConverterInput text={text} onTextChange={setText} />
      <div className="flex items-center flex-col">
        <Button
          text="Конвертувати в PDF"
          className="bg-red-600 hover:bg-red-600/75 active:bg-red-700 py-5"
          disabled={text.length === 0 || isPending}
          onClick={onGeneratePDFClick}
          isLoading={isPending}
        />
        {isError && (
          <p className="text-center text-red-900 text-sm">
            Щось пішло не так. Спробуйте знову.
          </p>
        )}
      </div>
    </Container>
  );
};

export default Converter;
