import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { pdfjs } from "react-pdf";

import { ChildrenProps } from "../types";

const queryClient = new QueryClient();

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
