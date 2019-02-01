import React from "react";
import { compose, withHandlers } from "recompose";
import withContext from "../Hoc/withContext";
import "./Header.css";

const Header = ({ theme, toggleTheme, language, toggleLanguage }) => (
  <>
    <div className={`header ${theme}`}>
      <div className="left">{language}</div>
      <div className="right">
        <div className="switch_theme" onClick={toggleTheme}>
          theme
        </div>
        <div className="switch_language" onClick={toggleLanguage}>
          language
        </div>
      </div>
    </div>
  </>
);

const HeaderWithContext = compose(
  withContext,
  withHandlers({
    toggleTheme: ({ themeDispacher }) => () =>
      themeDispacher({ type: "TOGGLE_THEME" }),
    toggleLanguage: ({ languageDispacher }) => () =>
      languageDispacher({ type: "TOGGLE_LANGUAGE" })
  })
)(Header);

export default HeaderWithContext;
