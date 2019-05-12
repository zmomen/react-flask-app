import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const middleware = applyMiddleware(thunk);

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(middleware));
}
