
import {CATEGORIES_FETCHED_Faild, CATEGORIES_FETCHED_START, CATEGORIES_FETCHED_SUCCESS} from "../actionType";

// Define initial states.
const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCHED_START:
      return {items:[],message:'',isLoading:true};
    case CATEGORIES_FETCHED_SUCCESS:
      return {items:action.payload,message:'',isLoading:false};
    case CATEGORIES_FETCHED_Faild:
      return {items:[],message:action.payload,isLoading:false};
    default:
      return state;

  }
};
