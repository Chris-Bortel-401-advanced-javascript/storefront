// storefront/categories.js 
// This is where we will be dispatching the actions when we click it 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as category from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const categories = useSelector( (state) => state.categories.categories)
  console.log(categories)
  const activateCategory = () => {
    dispatch (category.activate())
  }
 
  
  // dispatcher() that dispatches active

  // handleClick() that dispatches active {
    // dispatcher()
  
  return (
    <>
    <span>
      { categories.map(item => 
      <button onclick={activateCategory} key={Math.random()}>{item.name}</button>)}
    </span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}