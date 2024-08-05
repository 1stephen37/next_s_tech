import {createSlice} from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as Cart[],
    },
    reducers: {
        setCart(state, action) {
            state.cart = action.payload;
        },
        addToCart(state, action) {
            if (state.cart.length > 0) {
                let existingItemIndex = state.cart.findIndex((item) => item.id_product === action.payload.id_product &&
                    item.memory === action.payload.memory && item.color === action.payload.color);
                if (existingItemIndex !== -1) {
                    state.cart[existingItemIndex].quantity += 1;
                } else {
                    state.cart.push(action.payload);
                }
            } else {
                state.cart.push(action.payload);
            }
        },
        upQuantityByIndex(state, action) {
            state.cart[action.payload].quantity += 1;
        },
        downQuantityByIndex(state, action) {
            state.cart[action.payload].quantity -= 1;
        },
        removeCartItemByIndex(state, action) {
            state.cart.splice(action.payload, 1);
        },
        saveCartToLocalStorage(state) {
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        resetCart(state) {
            localStorage.removeItem('cart');
            state.cart = [] as Cart[];
        },
        getCartFromLocalStorage(state) {
            state.cart = JSON.parse(localStorage.getItem('cart') as string) || [] as Cart[];
        }
    }
})

export const {
    addToCart,
    upQuantityByIndex,
    downQuantityByIndex,
    setCart,
    resetCart,
    saveCartToLocalStorage,
    removeCartItemByIndex,
    getCartFromLocalStorage
} = cartReducer.actions
export default cartReducer.reducer;
