import { useMutation } from "@tanstack/react-query";

import { generatePdf } from "./actions";

export const useGeneratePDFMutation = () => {
  return useMutation({
    mutationFn: generatePdf,
    mutationKey: ["generatePdf"],
  });
};
