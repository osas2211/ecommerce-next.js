import { createSlice } from "@reduxjs/toolkit";

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
                email: action.payload.email,
                user: action.payload.user
            }
        }
    }
})

export const { logIn } = authSlice.actions
export const authReducer = authSlice.reducer