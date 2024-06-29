import React, { useState } from "react";

import { useGeneratePDFMutation } from "../../api/queries";
import ConverterInput from "../../components/ConverterInput/ConverterInput";
import PDFPreview from "../../components/PDFPreview/PDFPreview";
import Button from "../../components/UI/Button/Button";
import usePDFHistory from "../../hooks/usePDFHistory";
import Container from "../../layouts/Container/Container";

const Converter: React.FC = () => {
  const [text, setText] = useState<string>("");
  const { saveFile } = usePDFHistory();

  const {
    data: pdfDoc,
    isPending,
    mutateAsync,
    isError,
  } = useGeneratePDFMutation();

  const onGeneratePDFClick = async () => {
    const pdfFile = await mutateAsync(text);
    if (pdfFile) saveFile(pdfFile);
  };

  return (
    <section id="converter">
      <Container className="my-5 lg:my-10">
        <h1 className="text-3xl text-center mb-4 lg:mb-8 text-gray-600">
          Текст Конвертер
        </h1>
        <ConverterInput text={text} onTextChange={setText} />
        <div className="flex items-center flex-col mb-5 lg:mb-10">
          <Button
            text="Конвертувати в PDF"
            className="w-full md:w-auto bg-red-600 hover:bg-red-600/75 active:bg-red-700 py-5"
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
        <PDFPreview document={pdfDoc} />
      </Container>
    </section>
  );
};

export default Converter;
