import * as Actions from "../Types";

const initialState = {
  Search: [],
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_DATA:
      Search;
      const data = state.Search.filter((item) => item.id == action.payload);
      // console.log("SearchData==>", data)
      return {
        ...state,
        Search: data,
      };
    default:
      return state;
  }
};
