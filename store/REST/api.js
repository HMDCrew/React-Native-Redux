import { createAsyncThunk } from '@reduxjs/toolkit';
import WooCommerce from '../../libs/index'

export const getProducts = createAsyncThunk('store/products', () => {
    return WooCommerce.get("products")
        .then((resp) => resp)
        .catch((err) => console.log(err));
});

export const getCategories = createAsyncThunk('store/categories', () => {

    const data = {
        per_page: 100
    };

    return WooCommerce.get("products/categories", data)
        .then((resp) => resp)
        .catch((err) => console.log(err));
});
