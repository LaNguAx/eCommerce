import { BrandsCategoryID } from './config.js';
import * as model from './model.js';

const controlProductList = async function () {
  await model.getCategoryProductList(BrandsCategoryID.lacoste, 120);
  console.log(model.state.search.results);
  await model.getCategoryProductList(BrandsCategoryID.adidas, 500);
  console.log(model.state.search.results);
  //NOTE -- LOAD THE NEXT RESULTS IN THE BACKGROUND WHEN IN PAGE 2, MEANING PAGE 3 WILL LOAD IN THE BACKGROUND WHEN PRESSING PAGE 2 WHEN UR ON PAGE 1. SO IT WONT BE FELT.
};

controlProductList();
// controlProductList();

// model.getCategoryProductList(BrandsCategoryID.adidas, 120);
