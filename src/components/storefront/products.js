import { useDispatch , useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories.js';

// import { }
// TODO: How do I connect the products store to the products storefront
function Products() {

  let products = useSelector( (state) => state.products.products);
  let activeCategory = useSelector ( (state) => state.categories.activeCategory);

  // filter over the products array and evaluate whether or not the current index = true
  products = products.filter(product =>  product.category === activeCategory.name)
  console.log('this is products line 12_________', products)



  
// I need to compare the payload(activeCategory to the associated products) This name of the active category must be the same as the category of the product

// activeCategory.name === product.category
// states: activeCategory, products

  return (
    <>
    <h1>
      This is products
    </h1>

        <ul>
    { products.map(product => {
      return(

        <li key={product._id}>
          {product.name}
        </li>
      )
    })}
        </ul>
    </>
  )
}

export default Products;