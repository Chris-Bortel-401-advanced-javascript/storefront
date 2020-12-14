// store/categories.js

const initialState = {
   categories: [

      {
        "_id": "5fa5ea79c642630017a87195",
        "name": "electronics",
        "description": "cairn terrier",
        "__v": 0,
        "isActive": false
      },
      {
        "_id": "5fa5ea8ac642630017a87196",
        "name": "dog",
        "description": "yellow lab",
        "__v": 0,
        "isActive": false
      }
    ], 
    activeCategory: ""

    
}

export default function reducer( state=initialState, action ) {
  const {type, payload} = action;

  switch(type) {
    case 'ACTIVATE':
      return { categories: state.categories, activeCategory: payload }
      default: 
      return state;
  }
  
}

// Action Creator
export const activate = (payload) => {
  return {
    type: 'ACTIVATE',
    payload: payload
  }
} 

// This is where we are going to have the initial state and the reducers

// Shows acategories of all of the categories, which tells me that the initial state will have a list of categories. 
// we will be dispatching an actionm when we click to activate it