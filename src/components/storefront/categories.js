// storefront/categories.js 
// This is where we will be dispatching the actions when we click it 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeCategory } from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const categories = useSelector( (state) => state.categories.categories)
  const cat = useSelector((state) => state.categories)
  // TODO: How do I change the state in the obj.? Do I even need an is active property?

  const changeActive = (category) => {
    dispatch (changeCategory(category))
    // console.log(category,'clicked')
  }
  console.log(cat)
  return (
    <>
    <span>
    
      { categories.map(category => {
        return(

        <button key={category._id} onClick={() => changeActive(category)} >
          {category.name}
        </button>
        )
      }
      )}
    </span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}