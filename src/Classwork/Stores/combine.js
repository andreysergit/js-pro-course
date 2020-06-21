import {combineReducers} from 'redux';
import {counter} from './reducer/counter'
import {counterTwo} from './reducer/counterTwo'

export const rootReducer = combineReducers(
    counter,
    counterTwo,

)