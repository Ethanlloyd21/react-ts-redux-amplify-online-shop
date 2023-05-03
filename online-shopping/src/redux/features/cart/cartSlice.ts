import { createSlice } from "@reduxjs/toolkit";
import checkoutCart from "../../../assets/data/checkoutCart";


const initialState = {
    cartItems: checkoutCart,
    amount: 1,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
}); 

// console.log(cartSlice)

export default cartSlice.reducer;