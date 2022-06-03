import * as Actions from "../Types";

export const AddToCart = (item) => {
  // console.log("AddToCart", item);

  return {
    type: Actions.ADD_CARD,
    payload: item,
  };
};
export const ViewItem = (item) => {
  return {
    type: Actions.VIEW_ITEM,
    payload: item,
  };
};
export const RemoveCard = (id) => {
  // console.log("RemoveID", id)
  return {
    type: Actions.REMOVE_CARD,
    payload: id,
  };
};
