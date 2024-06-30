import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { useGeneratePDFMutation } from "../../api/queries";
import DownloadIcon from "../../assets/icons/DownloadIcon";
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
        <div
          className={twMerge(
            "flex justify-center items-end gap-2 mb-5",
            !pdfDoc && "hidden",
          )}>
          <h2 className="text-2xl text-center lg:text-3xl text-gray-700">
            Конвертований PDF
          </h2>
          <a href={pdfDoc} download className="inline-block">
            <Button className="h-max text-sm py-1 px-3" title="Завантажити">
              <DownloadIcon className="h-5 w-5" />
            </Button>
          </a>
        </div>
        <PDFPreview document={pdfDoc} className="mx-auto" />
      </Container>
    </section>
  );
};

export default Converter;
