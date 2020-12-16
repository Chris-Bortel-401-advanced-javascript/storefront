import { useSelector } from 'react-redux';
// import { changeCategory } from '../../store/categories.js';

// import { }
// TODO: How do I connect the products store to the products storefront
function Products() {

  let products = useSelector( (state) => state.products.products);
  let activeCategory = useSelector ( (state) => state.categories.activeCategory);

  products = products.filter(product =>  product.category === activeCategory.name)

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