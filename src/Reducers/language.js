const language = (state, action) => ({
    TOGGLE_LANGUAGE: () => (state === 'cn' ? 'en' : 'cn'),
    SET_LANGUAGE: () => state
  }[action.type]() || state);

export default language;
