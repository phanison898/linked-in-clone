const util = (state = false, action) => {
  switch (action.type) {
    case "THEME":
      return !state;
    default:
      return state;
  }
};

export default util;
