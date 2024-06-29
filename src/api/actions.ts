import { streamToBlob } from "../utils";

export const postData = async (
  link: string,
  data: object,
): Promise<Response> => {
  const body = JSON.stringify(data);
  const response = await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error posting data");
  }

  return response;
};

export const generatePdf = async (text: string): Promise<Blob | undefined> => {
  const postLink = `${process.env.REACT_APP_PDF_API_LINK}${process.env.REACT_APP_PDF_API_KEY}`;

  const res = await postData(postLink, { text });
  if (!res.body) return undefined;
  return await streamToBlob(res.body);
};
