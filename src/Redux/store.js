import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlicer";
import { apiReducer } from "./getMealSlice";
import { cartReducer } from "./cartSlice";


userReducer

export let Store = configureStore( {
    reducer : {
        user : userReducer,
        api : apiReducer,
        cart : cartReducer,

    }
})