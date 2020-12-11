// ../store/categories.js

const initialState = {
  list:"computer"
      // _id: "5fa38bec53d1a800171e9f01",

      // "description": "good",
      // "__v": 0
    
    // {
    //   "_id": "5fa5ea79c642630017a87195",
    //   "name": "dog",
    //   "description": "cairn terrier",
    //   "__v": 0
    // },
    // {
    //   "_id": "5fa5ea8ac642630017a87196",
    //   "name": "dog",
    //   "description": "yellow lab",
    //   "__v": 0
    // }
    
  
  
}

export default function reducer( state=initialState, action ) {
  const {type, payload} = action;

  switch(type) {
    case 'DISPLAY':
      return { ...state, list: state.list }
      default: 
      return state;
  }

}

// Action Creator
export const display = () => {
  return {
    type: 'DISPLAY',
    // payload: list
  }
} 

// This is where we are going to have the initial state and the reducers

// Shows a list of all of the categories, which tells me that the initial state will have a list of categories. 
// we will be dispatching an actionm when we click to activate it