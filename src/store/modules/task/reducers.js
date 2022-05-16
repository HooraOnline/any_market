// Define initial states.
import {TASK} from '../types';

const initialState = {
  items: []
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK.FETCHED_START:
      return {items:[],message:'',isLoading:true};
    case TASK.FETCHED_SUCCESS:
      return {items:action.payload,message:'',isLoading:false};
    case TASK.FETCHED_FAILED:
      return {items:[],message:action.payload,isLoading:false};
    default:
      return state;
  }
};
