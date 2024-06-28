import { Dispatch, SetStateAction } from "react";

export interface ConverterInputProps {
  text: string;
  onTextChange: Dispatch<SetStateAction<string>>;
}
