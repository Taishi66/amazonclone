//setup data layer
//We need this to track the ShoppingBasket
import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();
//build a provider, to wrap the entire app and get access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
