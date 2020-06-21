import React from "react";
import { Provider } from "react-redux";
import { store } from "./Stores/store";
import { Todo } from "./Todos/index";


export const App = () => {
  return (
    <Provider store={store}>
        <Todo />
    </Provider>
  );
};
