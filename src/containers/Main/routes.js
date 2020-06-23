import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../components/About';
import Blog from '../../components/Blog';
import FAQ from '../../components/FAQ';
import Gallery from '../../components/Gallery';
import LandingPage from '../../components/LandingPage';
import Merch from '../../components/Merch';

const Routes = () => (
  <Switch>
    <Route component={LandingPage} exact path="/" />
    <Route component={About} exact path="/about" />
    <Route component={Blog} exact path="/blog" />
    <Route component={Gallery} exact path="/gallery" />
    <Route component={FAQ} exact path="/faq" />
    <Route component={Merch} exact path="/merch" />
  </Switch>
);

export default Routes;
