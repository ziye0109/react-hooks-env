import React from 'react';
import Context from '../Context/Context';
import useGlobalState from '../CustomHooks/useGlobalState';

const Provider = ({ children }) => (
  <Context.Provider value={{ ...useGlobalState() }}>
    {children}
  </Context.Provider>
);

export default Provider;
