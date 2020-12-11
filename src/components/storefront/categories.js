// storefront/categories.js 
// This is where we will be dispatching the actions when we click it 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {display} from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const list = useSelector( (state) => state.categories.list)
  console.log(list)
  const displayList = () => {
    dispatch (display())
  }
  return (
    <>
    <span>
      { list.map(item => <div>{item.name}</div>)}
    </span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}