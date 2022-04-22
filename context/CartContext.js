/**** WITH THE POWER OF ARRAY AND OBJECT DECONSTRUCTING COMES EVERYTHING NICE ****/
import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./reducers/cartReducer";

export const CartContext = createContext()
export const useCart = ()=>{
    return useContext(CartContext)
}

export const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_ITEM: "DELETE_ITEM"
}


export const CartProvider = ({children})=>{
    const initialState = {
        products: [],
        counter: 0,
        total_amount: 0
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)


    return <CartContext.Provider value={[state, dispatch]}>
        { children }
    </CartContext.Provider>
}