export const initialState = {
  basket: [],
}

/// selector function always in your reducer
export const getBasketTool = (basket) =>{
  return basket?.reduce((amount, item)=> item.price + amount, 0)
}

export const reducer =  ( state, action) => {

  switch(action.type){
    case 'ADD_TO_BASKET':
      return{...state, basket:[...state.basket, action.item] }


    default:
      return state

  }




}
