import React from 'react';
import ReactDom from 'react-dom';
import Home from './Component/Home';
import Provider from './Component/Provider';

const App = () => (
  <Provider>
    <Home />
  </Provider>
);

ReactDom.render(<App />, document.getElementById('root'));
