// Brings in the reducers
import categoriesReducer from './categories.js';
import {createStore, combineReducers} from 'redux';


// make a list of reducers
const reducers = combineReducers({
  categories: categoriesReducer
})

export default createStore(reducers);