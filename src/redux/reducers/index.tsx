import { combineReducers } from "redux";
import userReducer from "../slices/user";
import useUIReducer from "../slices/ui";

const rootReducer = combineReducers({
  user: userReducer,
  ui: useUIReducer,
});

export default rootReducer;
