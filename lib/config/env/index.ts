let APIURL;

const nodeENV = process.env.NODE_ENV;

if (nodeENV == 'production' || nodeENV == 'development') {
  APIURL = 'appurl.com';
} else {
  APIURL = process.env.API_URL || 'http://localhost:1337';
}
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:4000';
// Products
// const HOMEPAGE_PRODUCTS_URL = 'https://fakestoreapi.com/products';
// const HOMEPAGE_TOTAL_PRODUCTS = 20;
// const PER_PAGE = 3;

export { APIURL };
