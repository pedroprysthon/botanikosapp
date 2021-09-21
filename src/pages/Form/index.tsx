import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Finish from "../../components/Finish";
import PriceDisplay from "../../components/PriceDisplay";

import { Container, Header, IconBack, IconForward, Content } from "./styles";

const PAGES = ["finish"];

const Form = () => {
  const [page, setPage] = useState(0);
  const history = useHistory();
  const { path, url } = useRouteMatch();

  function goBack() {
    if (page > 0) {
      setPage((page) => page - 1);
    }
    history.goBack();
  }

  function goForward() {
    if (page === PAGES.length) return;

    history.push(`${url}/${PAGES[page]}`);
    setPage((page) => page + 1);
  }
  return (
    <Container>
      <Header>
        <IconBack onClick={goBack} />
        <IconForward onClick={goForward} />
      </Header>
      <Content>
        <Switch>
          <Route exact path={path}>
            <PriceDisplay />
          </Route>
          <Route path={`${path}/finish`}>
            <Finish />
          </Route>
        </Switch>
      </Content>
    </Container>
  );
};

export default Form;
