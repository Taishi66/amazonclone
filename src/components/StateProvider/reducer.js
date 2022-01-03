export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      break;
    case "REMOVE_FROM_BASKET":
      //logic  to remove from basket
      break;
    default:
      return state;
  }
}
