const initialState = {
  products: [
    // change to product obj
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
   activeCategory: {}

}

export default function reducer( state=initialState, action ) {
 const {type, payload} = action;

 switch(type) {

   case 'ACTIVECATEGORY':
     console.log('here')
     let variable = state.categories
     let totalArr = [];

     variable.forEach(theCategory => {
       if (payload._id === theCategory._id) {
         theCategory.isActive = true
       }
       totalArr.push(theCategory)
     })

     return { ...state, categories: totalArr, activeCategory: payload }
     default: 
     return state;
 }
 
}

// Action Creator

// export const changeCategory = (category) => {
//  return {
//    type: 'ACTIVECATEGORY',
//    payload: category
//  }
// }


