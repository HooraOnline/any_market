
import {call, put, takeEvery,takeLatest,actionChannel} from "redux-saga/effects";
import { buffers } from 'redux-saga'
import {CATEGORIES_FETCHED_Faild, FETCHED_START, CATEGORIES_FETCHED_SUCCESS, CATEGORY} from '../types';
import {getCategoriesFromApi} from '../../../services/apiService/api';



function* safe(effect) {
  try {
    return yield effect
  } catch (error) {
    return { error }
  }
}

function* fetchCategories(action) {
  const params={filter: action.payload}
  const { response, error } = yield safe(call(getCategoriesFromApi, params));
  if (response){
    //const items = yield response.json();
    yield put({type:CATEGORIES_FETCHED_SUCCESS,payload:response.data});
  }
  else
    yield put({ type:CATEGORIES_FETCHED_Faild,payload:error.message })
}

/*function* fetchCategories(action) {

  try{
    const categoriesData = yield call(getCategoriesFromApi); // Fetch call.
    const categories = yield categoriesData.json(); // Convert to JSON.
    yield put({type:CATEGORIES_FETCHED_SUCCESS,payload:categories}); // Initiate the action on fetch success.
  }catch(e){

    yield put({type:CATEGORIES_FETCHED_Faild,payload:e.message})
  }
}*/

export default function* watchCategories() {
    yield takeEvery(CATEGORY.FETCHED_START,fetchCategories)
}
