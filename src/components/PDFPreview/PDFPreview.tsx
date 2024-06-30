import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { twMerge } from "tailwind-merge";

import { PDF_OPTIONS } from "../../constants/pdf";
import PDFNavigation from "../PDFNavigation/PDFNavigation";
import { PDFPreviewProps } from "./interface";

const PDFPreview: React.FC<PDFPreviewProps> = ({ document, className }) => {
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

  return (
    <>
      <div
        className={twMerge(
          "bg-blue-800 rounded-lg p-2 relative w-full md:w-max",
          className,
        )}>
        <div className="w-full h-[70vh] md:h-[49.5rem] md:w-[38.25rem] overflow-auto">
          <Document
            file={document}
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
    </>
  );
};

export default React.memo(PDFPreview);
