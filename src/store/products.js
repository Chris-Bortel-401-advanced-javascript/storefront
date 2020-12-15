const initialState = {
  //  If active cat  matches product category, show those products.

  products: [

    {
      "_id": "5fd83a0c23796c001762d374",
      "name": "Macbook Pro",
      "category": "Electronics",
      "description": "New",
      "price": 1899,
      "inStock": 25000,
      "__v": 0
    },
    {
      "_id": "5fd83a4423796c001762d375",
      "name": "Bose Q35 Headphones",
      "category": "Electronics",
      "description": "New",
      "price": 299,
      "inStock": 234,
      "__v": 0
    },
    {
      "_id": "5fd83a7d23796c001762d376",
      "name": "iphone 20X",
      "category": "Electronics",
      "description": "New",
      "price": 2000,
      "inStock": 2,
      "__v": 0
    },
    {
      "_id": "5fd83b1123796c001762d377",
      "name": "Lord Of The Rings: Fellowship Of The Rings",
      "category": "Books",
      "description": "New and used",
      "price": 24.99,
      "inStock": 23,
      "__v": 0
    },
    {
      "_id": "5fd83ca623796c001762d378",
      "name": "Lord Of The Rings: The Two Towers",
      "category": "Books",
      "description": "New and used",
      "price": 24.99,
      "inStock": 23,
      "__v": 0
    },
    {
      "_id": "5fd83cc123796c001762d379",
      "name": "Lord Of The Rings: Return Of The King",
      "category": "Books",
      "description": "New and used",
      "price": 24.99,
      "inStock": 23,
      "__v": 0
    },
    {
      "_id": "5fd83e1123796c001762d37a",
      "name": "Pink Floyd: Darkside of the Moon",
      "category": "Records",
      "description": "New and used",
      "price": 19.99,
      "inStock": 23,
      "__v": 0
    },
    {
      "_id": "5fd83e9d23796c001762d37b",
      "name": "Dire Straits: Brothers In Arm",
      "category": "Records",
      "description": "New and used",
      "price": 19.99,
      "inStock": 23,
      "__v": 0
    },
    {
      "_id": "5fd83f0023796c001762d37c",
      "name": "Dire Straits: Sultans of Swing: The Very Best of Dire Straits ",
      "category": "Records",
      "description": "New and used",
      "price": 19.99,
      "inStock": 23,
      "__v": 0
    }
   ], 
   activeCategory: {}

}

export default function reducer( state=initialState, action ) {
 const {type, payload} = action;

 switch(type) {

   case 'ACTIVECATEGORY':
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

export const changeCategory = (category) => {
 return {
   type: 'ACTIVECATEGORY',
   payload: category
 }
}


