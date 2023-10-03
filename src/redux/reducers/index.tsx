import { combineReducers } from "redux";
import userReducer from "../slices/user";
import useUIReducer from "../slices/ui";
import useProyecReducer from "../slices/proyects";

const rootReducer = combineReducers({
  user: userReducer,
  ui: useUIReducer,
  proyects: useProyecReducer,
});

export default rootReducer;
