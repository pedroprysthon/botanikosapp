import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Payment, Received, ListContainer } from "./styles";

function NavBar() {
  const history = useHistory();

  function handleGoForm() {
    history.push("/form");
  }

  return (
    <Container>
      <ListContainer>
        <li onClick={handleGoForm}>
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
