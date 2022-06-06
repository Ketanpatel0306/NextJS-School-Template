import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(rootReducer)

export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
// export default () => {
//     return { store, persistor }
// }
