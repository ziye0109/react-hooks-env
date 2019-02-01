const language = (state, action) => ({
    TOGGLE_LANGUAGE: () => (state === 'CN' ? 'EN' : 'CN'),
    SET_LANGUAGE: () => state
  }[action.type]() || state);

export default language;
