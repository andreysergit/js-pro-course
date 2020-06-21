import React from "react";
import { Second } from "./Second/index";
import { Provider } from "react-redux";
import { store } from "./Stores/store";
import {First} from './Second/indexTwo'

export const App = () => {
  return (
    <Provider store={store}>
      <Second />
      <First />
    </Provider>
  );
};
