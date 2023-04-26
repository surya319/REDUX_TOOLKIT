const initialState = {
  value: {
    name: "Surya G",
    age: 24,
    email: "suryagunasekaran24@gmail.com",
  },
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSER":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
