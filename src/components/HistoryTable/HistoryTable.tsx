import React from "react";

import DownloadIcon from "../../assets/icons/DownloadIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import { useModal } from "../../contexts/ModalProvider";
import usePDFHistory from "../../hooks/usePDFHistory";
import { PDFHistoryFile } from "../../types";
import { formatISODate } from "../../utils";
import PDFPreview from "../PDFPreview/PDFPreview";
import Button from "../UI/Button/Button";

const HistoryTable: React.FC = () => {
  const { files } = usePDFHistory();
  const { openModal } = useModal();

  const onShowPreview = (elem: PDFHistoryFile) => {
    openModal(<PDFPreview document={elem.file} />);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left w-max"></th>
            <th className="px-4 py-2 text-left">Дата</th>
            {/* <th className="px-4 py-2 text-left ">Ім&apos;я</th> */}
            <th className="px-4 py-2 text-left "></th>
          </tr>
        </thead>
        <tbody>
          {files
            .reverse()
            .slice(0, 15)
            .map((elem: PDFHistoryFile, indx: number) => (
              <tr
                key={`HistoryRow ${indx}`}
                className="odd:bg-white even:bg-gray-100 text-base">
                <td className="border-b px-4 py-2 w-max">
                  {files.length - indx}
                </td>
                <td className="border-b px-4 py-2">
                  {formatISODate(elem.timestamp)}
                </td>
                {/* <td className="border-b px-4 py-2">
                  {elem.fileName || "Не вказано"}
                </td> */}
                <td className="px-4 py-2 border-b flex w-auto h-full justify-end">
                  <Button
                    className="h-full px-3 float-left mr-2"
                    onClick={() => onShowPreview(elem)}
                    title="Перегляд">
                    <EyeIcon />
                  </Button>
                  <a
                    href={elem.file}
                    download
                    className="block h-full"
                    title="Завантажити">
                    <Button
                      className="text-sm h-full px-3 bg-blue-800"
                      title="Завантажити">
                      <DownloadIcon className="h-6 w-6" />
                    </Button>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {files.length === 0 && (
        <p className="mt-4 text-center">Немає даних для відображення</p>
      )}
    </div>
  );
};

export default HistoryTable;
