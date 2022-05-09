import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        isLoggedIn: false,
        uid: null,
        email: null,
    },
    reducers : {
        logIn: (state, action)=>{

            return {
                ...state, 
                isLoggedIn: action.payload.isLoggedIn,
                uid: action.payload.uid,
                email: action.payload.email
            }
        }
    }
})

export const { logIn } = authSlice.actions
export const authReducer = authSlice.reducer