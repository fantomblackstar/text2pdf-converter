import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import React from "react";

import Converter from "./blocks/Converter/Converter";
import History from "./blocks/History/History";
import AppProvider from "./contexts/AppProvider";
import PageLayout from "./layouts/PageLayout/PageLayout";

function App() {
  return (
    <AppProvider>
      <PageLayout>
        <Converter />
        <History />
      </PageLayout>
    </AppProvider>
  );
}

export default App;
