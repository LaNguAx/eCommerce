import { RES_PER_PAGE } from './config.js';

import { AJAX } from './helpers.js';

export const state = {
  search: {
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};
