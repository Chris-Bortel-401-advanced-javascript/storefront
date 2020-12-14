// storefront/categories.js 
// This is where we will be dispatching the actions when we click it 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeCategory } from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const categories = useSelector( (state) => state.categories.categories)
  
  const changeActive = (category) => {
    dispatch (changeCategory(category))
    console.log(category,'clicked')

  }
  console.log(categories)

  // function handleClick(ite) {
  //   activateCategory(item.name)
  // }
 
  
  // dispatcher() that dispatches active

  // handleClick() that dispatches active {
    // dispatcher()
  
  return (
    <>
    <span>
    
      { categories.map(category => 
        <button key={category._id} onClick={() => changeActive(category)} >
          {category.name}
        </button>
      )}
    </span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}