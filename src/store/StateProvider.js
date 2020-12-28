import React, { createContext, useContext, useReducer} from 'react'

// Prepare the DataLayer
export const StateContext = createContext();


// Wrap our app  and provide to data later to the rest of the app
export const StateProvider = ({reducer,initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
