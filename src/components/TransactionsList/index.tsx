import React from "react";
import { ListContainer } from "../NavBar/styles";
import TransactionItem from "../TransactionItem";

import { Container } from "./styles";

export interface TransactionData {
  id: number;
  title: string;
  currency: string;
  date: string;
  type: "payment" | "received";
}

const DATA: TransactionData[] = [
  {
    id: 1,
    title: "Energia",
    currency: "R$144,00",
    date: "17 de setembro",
    type: "payment",
  },
  {
    id: 2,
    title: "Cacto 1",
    currency: "R$19,00",
    date: "22 de setembro",
    type: "received",
  },
];
function TransactionsList() {
  return (
    <Container>
      <ul>
        {DATA.map((item) => (
          <TransactionItem item={item} />
        ))}
      </ul>
    </Container>
  );
}

export default TransactionsList;
