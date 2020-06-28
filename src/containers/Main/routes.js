import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../containers/About';
import Blog from '../../containers/Blog';
import Faq from '../../containers/FAQ';
import Gallery from '../../components/Gallery';
import LandingPage from '../../components/LandingPage';
import Merch from '../../components/Merch';

const Routes = () => (
  <Switch>
    <Route component={LandingPage} exact path="/" />
    <Route component={About} exact path="/about" />
    <Route component={Blog} exact path="/blog" />
    <Route component={Gallery} exact path="/gallery" />
    <Route component={Faq} exact path="/faq" />
    <Route component={Merch} exact path="/merch" />
  </Switch>
);

export default Routes;
