import { createSlice } from "@reduxjs/toolkit";
import checkoutCart from "../../../assets/data/checkoutCart";

export interface InitialStateInterface {
    cartItems: any,
    amount: number,
    total: number,
    isLoading: boolean,
}

const initialState: InitialStateInterface = {
    cartItems: checkoutCart,
    amount: 3,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item: any) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item: any) => item.cartItem.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item: any) => item.id === payload.id);
            cartItem.amount = cartItem.amount -1;
        },
        // calculateTotals: (state) => {
        //     let amount = 0;
        // }
    }
}); 

export const { clearCart } = cartSlice.actions;


export default cartSlice.reducer;