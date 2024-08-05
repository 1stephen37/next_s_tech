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
            localStorage.setItem('router', state.link);
        }
    }
})

export const {linkChange, saveLinkToLocalStorage} = searchReducer.actions
export default searchReducer.reducer
