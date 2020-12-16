const initialState = {
   categories: [

    {
      "_id": "5fd8424323796c001762d37d",
      "name": "Electronics",
      "description": "These are for work, or for fun",
      "__v": 0
    },
    {
      "_id": "5fd8438b23796c001762d37f",
      "name": "Books",
      "description": "These tomes are for pure enjoyment",
      "__v": 0
    },
    {
      "_id": "5fd843ce23796c001762d380",
      "name": "Records",
      "description": "These masterpieces will leave you in auditory bliss",
      "__v": 0

    }
    ], 
    activeCategory: {}
 
}

export default function reducer( state=initialState, action ) {
  const {type, payload} = action;

  switch(type) {
    // case 'INITIALIZECATEGORY':
    //   return { ...state, categories: payload, activeCategory: payload[0]}

    case 'ACTIVECATEGORY':

      return { ...state, activeCategory: payload }
      default: 
      return state;
  }
  
}

// Action Creator

export const initalizeCategory = (categoryArray) => {
  return {
    type: 'INITALIZECATEGORY',
    payload: categoryArray
  }
} 

export const changeCategory = (category) => {
  return {
    type: 'ACTIVECATEGORY',
    payload: category
  }
}

  // This is where we are going to have the initial state and the reducers

// Shows acategories of all of the categories, which tells me that the initial state will have a list of categories. 
// we will be dispatching an actionm when we click to activate it