import { combineReducers } from "redux";
import userReducer from "../slices/user";
import useUIReducer from "../slices/ui";
import useProyecReducer from "../slices/proyects";
import taskReducer from "../slices/task";
const rootReducer = combineReducers({
  user: userReducer,
  ui: useUIReducer,
  proyects: useProyecReducer,
  task: taskReducer,
});

export default rootReducer;
