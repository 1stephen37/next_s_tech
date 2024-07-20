import {createSlice} from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        setCart(state, action) {
            state.cart = action.payload;
        },
        saveToLocalStorage(state, action) {
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        getCartFromLocalStorage(state, action) {
            state.cart = JSON.parse(localStorage.getItem('cart') as string);
        }
    }
})

export const {
    setCart,
    saveToLocalStorage
} = cartReducer.actions
export default cartReducer.reducer;
