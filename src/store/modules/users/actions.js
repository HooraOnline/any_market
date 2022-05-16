import {ADD_USERS_SUCSSES, FETCH_USERS_START, FETCH_USERS_SUCSSES} from '../types';

export const fetchUsersStart = payload => ({
  type: FETCH_USERS_START,
  payload:[],
});

export const addUser = payload => ({
  type: ADD_USERS_SUCSSES,
  payload
});







