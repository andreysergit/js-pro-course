import React from "react";
import { Todo } from "../Todos";
import { Provider } from "react-redux";
import { store } from "../Store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
