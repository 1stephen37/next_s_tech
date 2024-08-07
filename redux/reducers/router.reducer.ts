import {createSlice} from "@reduxjs/toolkit";

const searchReducer = createSlice({
    name: 'router',
    initialState: {
        link: ''
    },
    reducers: {
        linkChange: (state, action) => {
            state.link = action.payload;
        },
        saveLinkToLocalStorage: (state) => {
            localStorage.setItem('router', JSON.stringify(state.link));
        },
        getLinkFromLocalStorage: (state) => {
            state.link = JSON.parse(localStorage.getItem('router') as string);
        }
    }
})

export const {linkChange, saveLinkToLocalStorage, getLinkFromLocalStorage} = searchReducer.actions
export default searchReducer.reducer
