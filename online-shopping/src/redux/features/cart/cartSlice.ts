import { createSlice } from "@reduxjs/toolkit";
import checkoutCart from "../../../assets/data/checkoutCart";
import storeStocks from "../../../assets/data/storeStocks";


// export interface Cart {
//     id: string,
//     category: string,
//     brand: string,
//     name: string,
//     price: number,
//     top_description: string,
//     image: string,
//     amount: number,
// }

// interface CartState {
//     cart: Cart[];
// }
export interface InitialStateInterface {
    cartItems: any,
    amount: number,
    total: number,
    isLoading: boolean,
}

const initialState: InitialStateInterface = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item: any) => item.id !== itemId);
            state.amount = state.amount - 1;
        },
        increase: (state, { payload }) => {
            console.log(payload);
            const cartItem = state.cartItems.find((item: any) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
            state.amount = state.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item: any) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
            state.amount = state.amount - 1;
        },
        addtoCart: (state, action) => {
            const item = action.payload;
            state.cartItems.push(item);
            state.amount = state.amount + 1;

        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item: any) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    }
}); 


export const { clearCart, removeItem, increase, decrease, addtoCart, calculateTotals } = cartSlice.actions;


export default cartSlice.reducer;