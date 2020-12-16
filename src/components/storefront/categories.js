import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeCategory } from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const categories = useSelector( (state) => state.categories.categories)

  const changeActive = (category) => {
    dispatch (changeCategory(category))
  }

  return (
    <>
    <span>
      { categories.map(category => {
        return(

        <button key={category._id} onClick={() => changeActive(category)} >
          {category.name}
        </button>
        )
      })}
    </span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}