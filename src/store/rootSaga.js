import { all, fork } from "redux-saga/effects";

import { watchLogin } from "./modules/auth/sagas";
import {watchFetchUsers} from './modules/users/sagas';
import {watchTask} from './modules/task/sagas';
import watchCategories from './modules/category/sagas';

export default function* rootSaga() {
  //yield all([watchLogin(),watchFetchUsers(),watchTask(),watchCategories()]);
  yield fork(watchLogin)
  yield fork(watchFetchUsers)
  yield fork(watchTask)
  yield fork(watchCategories)
}


