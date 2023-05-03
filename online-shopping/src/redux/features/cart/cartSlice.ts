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
            console.log(payload);
            const cartItem = state.cartItems.find((item: any) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item: any) => item.id === payload.id);
            cartItem.amount = cartItem.amount -1;
        },
        addtoCart: (state, action) => {
            const item = action.payload;
            console.log(item);
            state.cartItems.push(item);

        }
        // calculateTotals: (state) => {
        //     let amount = 0;
        // }
    }
}); 


export const { clearCart, removeItem, increase, decrease, addtoCart } = cartSlice.actions;


export default cartSlice.reducer;