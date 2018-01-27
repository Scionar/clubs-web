
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import OverviewPage from './components/OverviewPage/OverviewPage';

const Routes = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={OverviewPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
