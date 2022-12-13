import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "../reducer/MainProfileReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
});

export const store = configureStore({
  reducer: bigReducer,
});
