export const TIMEOUT_SEC = 10;
export const BrandsCategoryID = {
  adidas: 7113,
  nike: 4766,
  emporioArmani: 7071,
  newBalance: 3792,
  lacoste: 7368,
};

export const RES_PER_PAGE = 20;

export const API_URL_CATEGORIES_LIST = `https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US`;

/**
 *
 * @param {number} categoryID // CategoryID from the BrandsCategoryID object
 * @param {number} offset // The offset to skip already viewed products.
 * @returns Products inside category
 */
export const API_URL_PRODUCTS_LIST = (categoryID, offset = 0) =>
  `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=${offset}&categoryId=${categoryID}&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`;

export const API_URL_PRODUCT_DETAILS = id =>
  `  https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`;
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9cd03bd82dmshe9ba157b398e05dp13dea5jsnb28a46f65137',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
};
