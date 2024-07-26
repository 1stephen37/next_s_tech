import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        user: <User>{},
    },
    reducers: {
        setIsLogin(state, action) {
            state.isLogin = action.payload;
        },
        setUserInformation(state, action) {
            state.user = action.payload;
        },
        getInitialFromLocalStorage(state) {
            state.user = JSON.parse(localStorage.getItem('user') as string);
            state.isLogin = JSON.parse(localStorage.getItem('isLogin') as string);
        },
        logOut(state) {
            state.isLogin = false;
            state.user = <User>{};
            localStorage.removeItem('user');
            localStorage.removeItem('isLogin');
        }
    }
})

export const {
    setIsLogin, setUserInformation, getInitialFromLocalStorage, logOut
} = userReducer.actions
export default userReducer.reducer
