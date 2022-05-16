import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import {categoryReducer} from "./modules/category/reducers";
import userReducer from "./modules/users/reducers";
import authReducer from "./modules/auth/reducers";
import taskReducer from "./modules/task/reducers";

/* IMPORT ALL REDUCERS HERE */
//import categoryReducer from "./categoryReducer";

// If it is client side or not. (window is defined or not)
const isClient = typeof window !== "undefined";

let mainReducer;
if (isClient) {
  // Client side logic.

  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  // Root persist configuration.
  const publicPersistConfig = {
    key: "root",
    storage: storage,
    // blacklist the states for which nested persist configs you are going to define.
    // --OR-- You might use whitelist if you want to persist all states of seleted reducers.
    blacklist: ["categoryReducer"],
  };

  // Persist config for each of reducers you create.
  const categoriesPersistConfig = {
    key: "categoryReducer",
    storage: storage,
    // whitelist OR blacklist states according to your need.
    whitelist: ["items"],
  };

  /* COMBINE ALL REDUCERS */
  const combinedReducers = combineReducers({
    categoryReducer_persist: persistReducer(categoriesPersistConfig, categoryReducer),//for persist
    authReducer,
    userReducer,
    taskReducer,
    categoryReducer,
  });

  // Main Reducer if in client side.
  mainReducer = persistReducer(publicPersistConfig, combinedReducers);
} else {
  //Server side logic.
  // Main Reducer if in client side.
  mainReducer = combineReducers({
    categoryReducer:categoryReducer,
  });
}

function reducer(state, action) {
  switch (action.type) {
    /* ON HYDRATE */
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      if (state.categoryReducer) nextState.categoryReducer = state.categoryReducer; // Preserve state during client side navigations.
      return nextState;

    default:
      return mainReducer(state, action);
  }
}

export default reducer;
