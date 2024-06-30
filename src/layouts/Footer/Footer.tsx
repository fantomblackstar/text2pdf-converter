import React from "react";

import Container from "../Container/Container";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="p-4 flex justify-between text-base text-gray-600 relative">
        <span className="absolute w-[calc(100%-32px)] border-t border-t-slate-200 left-4 top-0" />
        <p>@2024</p>
        <p>By Vasyl Voloshyn</p>
      </Container>
    </footer>
  );
};

export default Footer;
