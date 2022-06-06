import * as Actions from "../Types";
const initialState = {
  carts: [],
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_CARD:
      // const newData = state.carts;
      // console.log("newData", ...state.carts, action.payload);
      return {
        ...state,
        carts: action.payload,
      };
    case Actions.VIEW_ITEM:
      // const newData = state.carts;
      // console.log("newData", ...state.carts, action.payload);
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case Actions.REMOVE_CARD:
      const data = state.carts.filter((elm) => elm.id !== action.payload);
      // console.log("RemoveData", data);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};
