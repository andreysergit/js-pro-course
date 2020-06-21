import {createStore} from 'redux'
import { devToolsEnhancer } from "redux-devtools-extension";
import { item } from './Reducers/item';
// import { rootReducer } from "./combine";


export const store = createStore( item, devToolsEnhancer());