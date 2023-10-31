import { createSlice } from "@reduxjs/toolkit";


const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

    const setItemFunc = (item, totalAmount, totalQuantity) => {
        localStorage.setItem("cartItems", JSON.stringify(item));
        localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
        localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
      };
      
      

let cartSlice = createSlice({
    name: 'cart',
    initialState : {
        cartItems: items,
        totalQuantity: totalQuantity,
        totalAmount: totalAmount,
    },
    reducers : {
        addItem :(state ,action) => {
            const newItem = action.payload;
            const currentItem = state.cartItems.find((item) => item.id === newItem.id);
            
            state.totalQuantity++;
      
            if (!currentItem) {
      
              state.cartItems.push({
                id: newItem.id,
                title: newItem.title,
                image01: newItem.image01,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
              });
            } 
            else {
              currentItem.quantity++;
              currentItem.totalPrice =
                Number(currentItem.totalPrice) + Number(newItem.price);
            }
      
            state.totalAmount = state.cartItems.reduce((total , item) => total + Number(item.price) * Number(item.quantity) , 0   );
      
            setItemFunc(
              state.cartItems.map((item) => item), 
              state.totalAmount,
              state.totalQuantity
            );
        },

        deleteItem(state, action) {
          const id = action.payload;
          const existingItem = state.cartItems.find((item) => item.id === id);
    
          if (existingItem) {
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
          }
    
          state.totalAmount = state.cartItems.reduce(
            (total, item) => total + Number(item.price) * Number(item.quantity),
            0
          );
          setItemFunc(
            state.cartItems.map((item) => item),
            state.totalAmount,
            state.totalQuantity
          );
        },
    }

})



export let cartReducer = cartSlice.reducer;
export const {addItem , deleteItem} = cartSlice.actions