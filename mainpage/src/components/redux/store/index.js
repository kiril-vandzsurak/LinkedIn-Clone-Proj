import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getData from "../reducers/getData";
import profileReducer from "../reducers/MainProfileReducer";

const mainReducer = combineReducers({
  people: getData,
  profile: profileReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
