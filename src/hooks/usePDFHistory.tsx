import { useEffect, useState } from "react";

import { PDFHistoryFile } from "../types";

const usePDFHistory = () => {
  const [files, setFiles] = useState<PDFHistoryFile[]>([]);

  useEffect(() => {
    const storedFiles = localStorage.getItem("text2pdf_files");
    if (storedFiles) {
      const parsedFiles = JSON.parse(storedFiles);
      setFiles(parsedFiles);
    }
  }, []);

  useEffect(() => {
    if (files.length === 0) return;
    localStorage.setItem("text2pdf_files", JSON.stringify(files));
  }, [files]);

  const saveFile = (file: string, fileName?: string) => {
    if (!file) return;
    const newFile = {
      timestamp: new Date().toISOString(),
      fileName,
      file,
    };
    setFiles([...files, newFile]);
  };

  return { files, saveFile };
};

export default usePDFHistory;
