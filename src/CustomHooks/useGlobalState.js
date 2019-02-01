import { useReducer } from "react";
import themeReducer from "../Reducers/theme";
import languageReducer from "../Reducers/language";

const useGlobalState = () => {
  const [theme, themeDispacher] = useReducer(themeReducer, "blue");
  const [language, languageDispacher] = useReducer(languageReducer, "en");

  return {
    theme,
    themeDispacher,
    language,
    languageDispacher
  };
};

export default useGlobalState;
