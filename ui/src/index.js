import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/rootReducer'
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
