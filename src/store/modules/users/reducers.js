import {ADD_USERS_ERROR, ADD_USERS_SUCSSES, FETCH_USERS_ERROR, FETCH_USERS_START, FETCH_USERS_SUCSSES} from '../types';

const initialState = {
  users: [],
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS_START:
      return {
        ...state,
        users: []
      };
    case FETCH_USERS_SUCSSES:
      return {
        ...state,
        users: action.payload
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADD_USERS_SUCSSES:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;


