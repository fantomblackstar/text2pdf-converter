import React from "react";

import { ChildrenProps } from "../../types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PageLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
