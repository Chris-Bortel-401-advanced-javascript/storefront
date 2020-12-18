// Brings in the reducers
import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import categoriesReducer from './categories.js';
import productsReducer from './products.js'
import cartReducer from './cart.js'
// make a list of reducers
const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();