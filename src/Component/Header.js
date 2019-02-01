import React, { useContext } from 'react';
import Context from '../Context/Context';
import './Header.css';

const Header = () => {
  const { language } = useContext(Context);
  return (
    <>
      <div className="header">
        <div className="language_label">{language}</div>
        <div className="switch_language">switch language</div>
      </div>
    </>
  );
};

export default Header;
