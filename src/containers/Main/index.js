import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import About from '../../components/About';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route component={LandingPage} exact path="/" />
      <Route component={About} exact path="/about" />
    </Switch>
  </BrowserRouter>
);

export default Main;
