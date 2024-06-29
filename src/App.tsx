import React from "react";

import Converter from "./blocks/Converter/Converter";
import AppProvider from "./contexts/AppProvider";
import PageLayout from "./layouts/PageLayout/PageLayout";

function App() {
  return (
    <AppProvider>
      <PageLayout>
        <Converter />
      </PageLayout>
    </AppProvider>
  );
}

export default App;
