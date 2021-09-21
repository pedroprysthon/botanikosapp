import React from "react";
import { Button, Container, Input } from "./styles";

const Finish = () => {
  return (
    <Container>
      <label>Nome </label>
      <Input type="text" />
      <label>Quantidade </label>
      <Input type="number" />

      <label>Forma de pagamento </label>
      <select>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
        <option>Dinheiro/pix</option>
      </select>

      <Button>Enviar</Button>
    </Container>
  );
};

export default Finish;
