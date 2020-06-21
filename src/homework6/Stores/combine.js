import {combineReducers} from 'redux';
import {item} from './Reducers/item'

export const rootReducer = combineReducers(
    item,
)