import { createAsyncThunk } from '@reduxjs/toolkit';
import WooCommerceAPI from '../../libs/WooCommerceAPI';
import { SITE_URL, CONSUMER_KEY, CONSUMER_SECRET } from "@env"

const WooCommerce = new WooCommerceAPI({
    url: SITE_URL,
    ssl: true,
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET,
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
