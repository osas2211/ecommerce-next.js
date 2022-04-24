import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../stateSlices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})