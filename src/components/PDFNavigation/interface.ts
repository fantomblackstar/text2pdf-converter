import { Dispatch, SetStateAction } from "react";

export interface PDFNavigationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: Dispatch<SetStateAction<number>>;
}
