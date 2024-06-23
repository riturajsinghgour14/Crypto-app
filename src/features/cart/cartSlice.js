import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        CartItems : []
    },
    reducers : {
         
        add : (state , action) => {
             return {
                ...state,
                CartItems : [action.payload, ...state.CartItems],
             };
        },
        remove: (state, action) => {
            return {
              ...state,
              cartItems: state.CartItems.filter((item) => item.id !== action.payload),
            };
          },
    },
    extraReducers : (builder) => {},
});

export const {add , remove} = cartSlice.actions;

export default cartSlice.reducer;