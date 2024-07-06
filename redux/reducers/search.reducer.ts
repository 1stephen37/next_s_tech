import {createSlice} from "@reduxjs/toolkit";

const searchReducer = createSlice({
    name: 'search',
    initialState: {
        searchContent: ''
    },
    reducers: {
        searchChange : (state, action) => {
            state.searchContent = action.payload;
        }
    }
})

export const { searchChange } = searchReducer.actions
export default searchReducer.reducer
// export default searchReducer;
