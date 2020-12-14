// storefront/categories.js 
// This is where we will be dispatching the actions when we click it 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as categoryActions from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const categories = useSelector( (state) => state.categories.categories)
  
  const activateCategory = (payload) => {
    dispatch (categoryActions.activate(payload))
  }
  console.log(categories)

  function handleClick(item) {
    activateCategory(item.name)
    console.log(item,'clicked')
  }
 
  
  // dispatcher() that dispatches active

  // handleClick() that dispatches active {
    // dispatcher()
  
  return (
    <>
    <span>
    
      { categories.map(item => 
        <div key={Math.random()} onClick={() => handleClick(item)} >
          {item.name}
        </div>
      )}
    </span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}