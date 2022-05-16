
import {call, put, takeEvery,takeLatest,actionChannel} from "redux-saga/effects";
import { buffers } from 'redux-saga'
import {TASK} from '../types';
import {getTasksFromApi} from '../../../services/apiService/api';



function* safe(effect) {
  try {
    return yield effect
  } catch (error) {
    return { error }
  }
}

function* fetchTasks(action) {
  const params={filter: action.payload}
  const { response, error } = yield safe(call(getTasksFromApi, params));
  if (response){
    //const items = yield response.json();
    yield put({type:TASK.FETCHED_SUCCESS,payload:response.data});
  }
  else
    yield put({ type:TASK.FETCHED_FAILED,payload:error.message });
}

export default function* watchTasks() {
  yield takeEvery(TASK.FETCHED_START,fetchTasks)
}

