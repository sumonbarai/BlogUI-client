import { combineReducers } from "redux";
import blogReducer from "./blogPost/reducer";
import DashBoardReducer from "./dashBoard/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  blogPost: blogReducer,
  filter: filterReducer,
  dashboard: DashBoardReducer,
});
export default rootReducer;
