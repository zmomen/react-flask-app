import { combineReducers } from "redux";
import articlesReducer from "./articleReducer";

const rootReducer = combineReducers({
  articles: articlesReducer
});

export default rootReducer;
