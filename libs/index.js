import env from '../constants/env'
import WooCommerceAPI from './WooCommerceAPI'

const WooCommerce = new WooCommerceAPI({
    url: env.SITE_URL,
    ssl: true,
    consumerKey: env.CONSUMER_KEY,
    consumerSecret: env.CONSUMER_SECRET,
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true
});

export default WooCommerce;