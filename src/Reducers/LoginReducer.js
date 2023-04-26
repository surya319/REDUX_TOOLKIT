export const LoginReducer = (login = true, action) => {
  switch (action.type) {
    case "LOGIN":
      return !login;
    default:
      return login;
  }
};
