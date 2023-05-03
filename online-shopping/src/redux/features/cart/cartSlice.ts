import { createSlice } from "@reduxjs/toolkit";
import checkoutCart from "../../../assets/data/checkoutCart";


const initialState = {
    cartItems: checkoutCart,
    amount: 3,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (store) => store.cartItems = [],
    }
}); 

export const { clearCart } = cartSlice.actions;


export default cartSlice.reducer;