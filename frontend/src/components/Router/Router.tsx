import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <h3>This is in home currently.</h3>
          </Route>
          <Route path="/ic-model">
            <h3>This is in ic-model currently.</h3>
          </Route>
          <Route path="/od-model">
            <h3>This is in od-model currently.</h3>
          </Route>
          <Route path="/etc-model">
            <h3>This is in etc-model currently.</h3>
          </Route>
          <Route path="/">
            <h3>This is in root currently.</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
