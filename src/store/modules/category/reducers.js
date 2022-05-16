// Define initial states.
import {CATEGORIES_FETCHED_Faild, FETCHED_START, CATEGORIES_FETCHED_SUCCESS, CATEGORY} from '../types';

const initialState = {
    items: []
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY.FETCHED_START:
            return {items:[],message:'',isLoading:true};
        case CATEGORIES_FETCHED_SUCCESS:
            return {items:action.payload,message:'',isLoading:false};
        case CATEGORIES_FETCHED_Faild:
            return {items:[],message:action.payload,isLoading:false};
        default:
            return state;
    }
};
