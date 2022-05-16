import { combineReducers } from "redux";
import authReducer from './modules/auth/reducers';
import userReducer from './modules/users/reducers';
import taskReducer from './modules/task/reducers';
import {categoryReducer} from './modules/category/reducers';


const rootReducer = combineReducers({
  authReducer,
  userReducer,
  taskReducer,
  categoryReducer,

});

export default rootReducer;
