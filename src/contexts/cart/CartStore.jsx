import { createContext, useEffect, useReducer } from "react";
import cartReducer from "./reducer";

export const cartContext = createContext();

function CartStore({ children }) {
  const cartInitValue=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
  const [userCart, dispatchCart] = useReducer(cartReducer,cartInitValue );



  return (
    <cartContext.Provider value={{ userCart, dispatchCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartStore;
