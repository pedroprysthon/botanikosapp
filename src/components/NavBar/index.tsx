import React from "react";

import { Container, Payment, Received, ListContainer } from "./styles";

function NavBar() {
  return (
    <Container>
      <ListContainer>
        <li>
          <Received />
          <span>Recebido</span>
        </li>
        <li>
          <Payment />
          <span>Comprado</span>
        </li>
      </ListContainer>
    </Container>
  );
}

export default NavBar;
