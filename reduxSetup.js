const INITIAL_STATE = { mood: "ñ_ñ" };

function showMood(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: action.payload };
    case "SAD":
      return { ...state, mood: "TnT" };
    case "ANGRY":
      return { ...state, mood: "ಠ_ಠ" };
    case "CONFUSED":
      return { ...state, mood: "ʕ✖﹏✖ʔ" };
    default:
      return { ...state };
  }
}

const store = Redux.createStore(showMood);
