import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../control/cartSlice";


export const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
})