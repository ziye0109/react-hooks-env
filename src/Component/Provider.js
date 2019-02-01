import React, { useState } from 'react';
import Context from '../Context';

const Provider = ({ children }) => {
  const [theme, setTheme] = useState('blue');
  const [language, setLanguage] = useState('en');

  return (
    <Context.Provider
      value={{ appSetting: { theme, language }, setTheme, setLanguage }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
