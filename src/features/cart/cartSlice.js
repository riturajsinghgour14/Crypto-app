import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    CartItems: []
  },
  reducers: {

    add: (state, action) => {
      return {
        ...state,
        CartItems: [action.payload, ...state.CartItems],
      };
    },

    remove: (state, action) => {
      return {
        ...state,
        CartItems: state.CartItems.filter(
          item => item.id !== action.payload   // FIXED
        ),
      };
    },

  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
