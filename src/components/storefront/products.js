import { useSelector, useDispatch } from 'react-redux';
// import { changeCategory } from '../../store/categories.js';
import { addProductToCart } from '../../store/cart.js'

// TODO: How do I connect the products store to the products storefront
function Products() {

  
  const dispatch = useDispatch();
  let products = useSelector( (state) => state.products.products);
  let activeCategory = useSelector ( (state) => state.categories.activeCategory);

  // const addProduct = (product) => 
  products = products.filter(product =>  product.category === activeCategory.name)

  return (
    <>
    <h1>
      This is products
    </h1>

    <ul>
    { products.map(product => {
      return(
        <>
        <li key={product._id}>
          {product.name}
        </li>
        <button onClick={() => dispatch(addProductToCart(product))}>Add To Cart</button>
        </>
      )
    })}
    </ul>
    </>
  )
}

export default Products;