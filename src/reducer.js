const initialState = {
  count: 3
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "INCREMENT":
      console.log("action", action.type, action.value);
      return { count: state.count + 1 };
    case "DECREMENT":
      console.log("action", action.type, action.value);
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
