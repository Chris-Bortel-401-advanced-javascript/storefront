import store from '../../store/index.js'
import {Provider} from 'react-redux';
import Categories from './categories.js'
import CurrentCategory from './current-category.js'
import Products from './products.js'

function StoreFront() {
   return (
    <Provider store={store}>
      <CurrentCategory />
      <Categories />
      <Products />
    </Provider>
   )
}

export default StoreFront;
