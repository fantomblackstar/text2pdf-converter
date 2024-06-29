import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { ChildrenProps } from "../types";

const queryClient = new QueryClient();

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
