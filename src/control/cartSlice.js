import {createSlice} from "@reduxjs/toolkit";
import courseList from "../courseList";

const initialState = {
  cartItems: courseList,
  quantity: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartClear: (state) => {
      state.cartItems = [];
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    removeItem:(state,action)=>{
        const itemId=action.payload;
        state.cartItems=state.cartItems.filter((item)=>item.id!=itemId)
    },
    calculateTotal:(state)=>{
        let total=0;
        let quantity=0;
        state.cartItems.forEach((item)=>{
            total+=item.price*item.quantity;
            quantity+=item.quantity;
        })
        state.total=total;
        state.quantity=quantity;
    }
  },
});

export const { cartClear, increase, decrease, removeItem,calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
