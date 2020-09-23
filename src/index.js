import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import TodolistRedux from "./containers/TodolistRedux";
import store from "./redux/store";

const App = (
  <Provider store={store}>
    <TodolistRedux />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
