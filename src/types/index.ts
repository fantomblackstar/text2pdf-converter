import { ReactNode } from "react";

export interface ChildrenProps {
  children?: ReactNode;
}

export interface PDFHistoryFile {
  timestamp: string;
  fileName?: string;
  file: string;
}
