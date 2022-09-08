import { createAsyncThunk } from '@reduxjs/toolkit';
import WooCommerceAPI from '../../libs/WooCommerceAPI';

import env from '../../constants/env'

const WooCommerce = new WooCommerceAPI({
    url: env.SITE_URL,
    ssl: true,
    consumerKey: env.CONSUMER_KEY,
    consumerSecret: env.CONSUMER_SECRET,
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true
});

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
