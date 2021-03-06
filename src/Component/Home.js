import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './Header';
import DashBoard from './DashBoard';
import ContentArea from './ContentArea';

const history = createBrowserHistory();

const Home = () => (
  <>
    <Header />
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/" component={ContentArea} />
      </Switch>
    </Router>
  </>
);

export default Home;
