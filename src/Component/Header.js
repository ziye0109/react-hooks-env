import React from 'react';
import { compose } from 'recompose';
import withContext from '../Hoc/withContext';
import './Header.css';

const Header = ({ language }) => (
  <>
    <div className="header">
      <div className="language_label">{language}</div>
      <div className="switch_language">switch language</div>
    </div>
  </>
);

const HeaderWithContext = compose(withContext)(Header);

export default HeaderWithContext;
