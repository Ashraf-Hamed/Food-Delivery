import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export let getPizaa =  createAsyncThunk('api/getPizaa', async function() {
    let {data} = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
    return data 
}
)


const apiSlice = createSlice( {
    name : " api" ,

    initialState : {
        allPizza : [],
        isLoading : false ,
        isError : false ,

    },

    extraReducers : (builder) => {
        
        builder.addCase(getPizaa.fulfilled , (state , action)=> {
            state.allPizza = action.payload.recipes
            state.isLoading = false; 
            state.isError = false ;
          
        } ) ;
        builder.addCase(getPizaa.pending , (state )=> {
            console.log("Loading ....");
            state.isLoading = true 
       
        } ) ;
        builder.addCase(getPizaa.rejected , (state )=> {

         
            state.isError = true ;
           
        } ) ;


       
    }

})


export const apiReducer = apiSlice.reducer