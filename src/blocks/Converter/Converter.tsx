import React, { useState } from "react";

import ConverterInput from "../../components/ConverterInput/ConverterInput";
import Container from "../../layouts/Container/Container";

const Converter: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <Container className="my-5 lg:my-10">
      <h1 className="text-3xl text-center mb-4 lg:mb-8 text-gray-600">
        Текст Конвертер
      </h1>
      <ConverterInput text={text} onTextChange={setText} />
    </Container>
  );
};

export default Converter;
