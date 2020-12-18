const initialState = {
  cartProducts: [],
  cartCount: 0
}

export default function reducer( state=initialState, action) {
  const {type, payload} = action;
  
  switch(type) {
      case 'ADDPRODUCT':
        console.log('payload: ', payload)
        return state
      // return { ...state, cartProducts: payload }
      default:
        return state;
  }
}


export const addProductToCart = (selectedProduct) => {
  return {
    type: 'ADDPRODUCT',
    payload: selectedProduct
  }
}


