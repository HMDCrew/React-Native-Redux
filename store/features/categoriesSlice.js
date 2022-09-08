import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../REST/api'

// Export function to permite invok request to REST API
export { getCategories };

// Store init
const initialState = {
    list: [],
    isLoading: true
};

// Redux Store to save the rest (in this is menioned the exported functions with relative status loading)
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.isLoading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.list = action.payload;
        },
        [getCategories.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

// export const { clearCart, removeItem, increase, decrease, calculateTotals } = productsSlice.actions;
export default categoriesSlice.reducer;