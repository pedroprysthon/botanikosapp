import React from "react";
import { TransactionData } from "../TransactionsList";
import {
  Container,
  Payment,
  Content,
  Label,
  Divider,
  LightLabel,
  IconWrapper,
  Received,
} from "./styles";

interface TransactionItemProps {
  item: TransactionData;
}
const TransactionItem: React.FC<TransactionItemProps> = ({ item }) => {
  return (
    <Container>
      <IconWrapper isPayment={item.type === "payment"}>
        {item.type === "payment" ? <Payment /> : <Received />}
      </IconWrapper>
      <Content>
        <Divider>
          <Label>{item.title} </Label>
          <Label>{item.currency}</Label>
        </Divider>
        <Divider>
          <LightLabel>{item.date}</LightLabel>
        </Divider>
      </Content>
    </Container>
  );
};

export default TransactionItem;
