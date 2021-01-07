export const initialState = {
  basket: [],
  user: null
}

/// selector function always in your reducer
export const getBasketTool = (basket) =>{
  return basket?.reduce((amount, item)=> item.price + amount, 0)
}

// action functions get sent to the reducer and the reducer manipulates state based on the action type dispatched
export const reducer =  ( state, action) => {

  switch(action.type){
    case 'ADD_TO_BASKET':
      return{...state, basket:[...state.basket, action.item] }


      case 'REMOVE_FROM_BASKET':
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.item.id
        );

        let newBasket = [...state.basket]

        if(index >= 0){
          newBasket.splice(index,1)
        }else{

          console.warn('Product Does Not Exist')
        }

        return{
          ...state, basket: newBasket
        }

        case "SET_USER":
          console.log("SETTING USER", action.user)
          return{...state, user: action.user}




    default:
      return state;

  }




}
