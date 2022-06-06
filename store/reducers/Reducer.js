import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ColorReducer } from "./ColorReducer";
import { SearchReducer } from "./SearchReducer";
import AddNewAddressReducer from "./DemoReducer";
const rootReducer = combineReducers({
  CartReducer,
  SearchReducer,
  ColorReducer,
  AddNewAddressReducer,
});
export default rootReducer;
