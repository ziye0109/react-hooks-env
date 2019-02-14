import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Component/Home';
import DashBoard from './Component/DashBoard';
import Provider from './Component/Provider';

const history = createBrowserHistory();

const App = () => (
  <Provider>
    <Router history={history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>
  </Provider>
);

ReactDom.render(<App />, document.getElementById('root'));
