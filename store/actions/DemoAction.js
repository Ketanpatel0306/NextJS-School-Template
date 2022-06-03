import * as Actions from "../types";
// import { BASE_URL } from "../../constants";

export const addNewAddress = (data) => {
  // const { body, token } = data;
  // const URL = `${BASE_URL}/products`
  console.log("addUserAddress url ==> ", URL);
  // console.log('addUserAddress token ==> ', token);
  // console.log('addUserAddress body ==> ', body);
  return (dispatch) => {
    return fetch(URL, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log('addUserAddress response ==>', response);
        if (response) {
          return dispatch({
            type: Actions.ADD_NEW_ADDRESS,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.ADD_NEW_ADDRESS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        console.log("addUserAddress error ==>", error);
        return dispatch({ type: Actions.ADD_NEW_ADDRESS, payload: error });
      });
  };
};
