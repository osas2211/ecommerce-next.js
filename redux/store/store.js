import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../stateSlices/cartSlice";
import { authReducer } from "../stateSlices/authSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    }
})