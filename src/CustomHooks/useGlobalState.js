import { useState } from 'react';

const useGlobalState = () => {
  const [theme, setTheme] = useState('blue');
  const [language, setLanguage] = useState('en');

  return {
    theme,
    setTheme,
    language,
    setLanguage
  };
};

export default useGlobalState;
