// Brings in the reducers
import {createStore, combineReducers} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';

import categoriesReducer from './categories.js';
// make a list of reducers
const reducers = combineReducers({
  categories: categoriesReducer
});

const store = () => {
  return createStore( reducers);
}

export default store();