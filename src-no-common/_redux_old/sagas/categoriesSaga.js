
import {call, put, takeEvery,takeLatest} from "redux-saga/effects";
import {CATEGORIES_FETCHED_Faild, CATEGORIES_FETCHED_START, CATEGORIES_FETCHED_SUCCESS} from "../actionType";


const getCategoriesFromApi=()=>fetch('https://apitester.ir/api/Categories');
function* fetchCategories(action) {

  try{
    const categoriesData = yield call(getCategoriesFromApi); // Fetch call.
    const categories = yield categoriesData.json(); // Convert to JSON.
    yield put({type:CATEGORIES_FETCHED_SUCCESS,payload:categories}); // Initiate the action on fetch success.
  }catch(e){
    yield put({type:CATEGORIES_FETCHED_Faild,payload:e.message})
  }
}




export default function* watchCategories() {
    yield takeEvery(CATEGORIES_FETCHED_START,fetchCategories)
}
