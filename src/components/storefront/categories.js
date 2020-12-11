// ../storefront/categories.js 
//This is wher we will be dispatching the actions when we click it 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {display} from '../../store/categories.js';

function Categories() {

  const dispatch = useDispatch();
  const list = useSelector( (state) => state.categories.list)

  const displayList = () => {
    dispatch (display())
  }
  return (
    <>
    <span>{list}</span>
    </>
  )
}

export default Categories;

// {/* <span>{displayList}</span> */}