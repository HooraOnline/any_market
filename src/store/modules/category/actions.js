

// Create functions to handle your actions.


import {CATEGORIES_FETCHED_SUCCESS} from '../types';

export const fetchCategoriesAction = (categories) => ({
    type: CATEGORIES_FETCHED_SUCCESS,
    payload: categories,
});

export default {
    fetchCategoriesAction,
};
