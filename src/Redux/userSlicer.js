import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice( {
    name : 'user',
    initialState :{
        userToken : null,
    },

    reducers : {
        handleuserToken : (state ) => {
            state.userToken = localStorage.getItem('userToken');
        }
    }
})

export let userReducer = userSlice.reducer;
export const {handleuserToken} = userSlice.actions