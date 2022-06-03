import * as Actions from "../Types";

const initialState = {
  color: false,
};

export const ColorReducer = (state = initialState, action) => {
  //   console.log("action", action);
  switch (action.type) {
    case Actions.CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
