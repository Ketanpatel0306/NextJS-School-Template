import * as Actions from "../Types";

export const ChangeTheColor = (item) => {
  //   console.log("ActionItem", item);
  return {
    type: Actions.CHANGE_COLOR,
    payload: item,
  };
};
