import { BrandsCategoryID } from './config.js';
import * as model from './model.js';

const controlProductList = async function () {
  // await model.getCategoryProductList(BrandsCategoryID.lacoste);
  // await model.getCategoryProductList(BrandsCategoryID.adidas, 500);
  //NOTE -- LOAD THE NEXT RESULTS IN THE BACKGROUND WHEN IN PAGE 2, MEANING PAGE 3 WILL LOAD IN THE BACKGROUND WHEN PRESSING PAGE 2 WHEN UR ON PAGE 1. SO IT WONT BE FELT.
  // await model.getCategoryProductList(BrandsCategoryID.boss);
  // console.log(model.state.search.results);
  // console.log('FINISHED LOADING');
};

controlProductList();
// controlProductList();

// model.getCategoryProductList(BrandsCategoryID.adidas, 120);

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9cd03bd82dmshe9b a157b398e05dp13dea5jsnb28a46f65137',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
};

fetch(
  'https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US',
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
