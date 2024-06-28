import React from 'react';

import { ChildrenProps } from '../../types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PageLayout: React.FC = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
