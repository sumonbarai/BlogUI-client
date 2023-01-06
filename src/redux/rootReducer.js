import { combineReducers } from "redux";
import blogReducer from "./blogPost/reducer";

const rootReducer = combineReducers({
  blogPost: blogReducer,
});
export default rootReducer;
