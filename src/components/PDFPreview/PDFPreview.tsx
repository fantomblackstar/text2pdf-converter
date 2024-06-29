import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

import DownloadIcon from "../../assets/icons/DownloadIcon";
import { PDF_OPTIONS } from "../../constants/pdf";
import PDFNavigation from "../PDFNavigation/PDFNavigation";
import Button from "../UI/Button/Button";
import { PDFPreviewProps } from "./interface";

const PDFPreview: React.FC<PDFPreviewProps> = ({ document }) => {
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPagesCount(0);
    setPageNumber(1);
  }, [document]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setPagesCount(numPages);
  }

  if (!document) return <></>;
  const url = URL.createObjectURL(document);

  return (
    <section>
      <div className="flex justify-center items-end gap-2 mb-5">
        <h2 className="text-2xl text-center lg:text-3xl text-gray-700">
          Конвертований PDF
        </h2>
        <Button
          className="inline-block h-max text-sm py-1 px-3"
          title="Завантажити">
          <a href={url} download>
            <DownloadIcon className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <div className="bg-blue-800 rounded-lg p-2 relative mx-auto w-full md:w-max">
        <div className="w-full h-[49.5rem] md:w-[38.25rem] overflow-auto">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            options={PDF_OPTIONS}
            className={"w-max overflow-auto"}>
            <Page key={`page_${pageNumber}`} pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      {pagesCount > 0 && (
        <PDFNavigation
          currentPage={pageNumber}
          pageCount={pagesCount}
          onPageChange={setPageNumber}
        />
      )}
    </section>
  );
};

export default React.memo(PDFPreview);
