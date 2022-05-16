import { put, takeEvery, delay } from "redux-saga/effects";


import {FETCH_USERS_START, FETCH_USERS_SUCSSES, LOGIN, UPDATE_USER} from '../types';

function* fetchUsers() {
  const rawRes = yield fetch("https://jsonplaceholder.typicode.com/todos");
  const data = yield rawRes.json();
  yield put({ type: FETCH_USERS_SUCSSES, payload: data });
}



export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_START, fetchUsers);
}
