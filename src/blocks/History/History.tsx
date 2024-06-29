import React from "react";

import HistoryTable from "../../components/HistoryTable/HistoryTable";
import Container from "../../layouts/Container/Container";

const History: React.FC = () => {
  return (
    <section id="history">
      <Container className="mb-20">
        <h2 className="text-2xl lg:text-3xl mb-5">Історія Конвертацій</h2>
        <HistoryTable />
      </Container>
    </section>
  );
};

export default History;
