export const getData = (value) => {
  return {
    type: "GETUSER",
    payload: value,
  };
};
