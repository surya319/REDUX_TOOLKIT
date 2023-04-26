const initialState = {
  value: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSER":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
