const theme = (state, action) => ({
    TOGGLE_THEME: () => (state === 'red' ? 'blue' : 'red'),
    SET_THEME: () => state
  }[action.type]() || state);

export default theme;
