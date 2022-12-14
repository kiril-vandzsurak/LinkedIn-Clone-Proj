import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getData from "../reducers/getData";
import profileReducer from "../reducers/MainProfileReducer";
import postsReducer from "../reducers/getPostsReducer";
const mainReducer = combineReducers({
  people: getData,
  profile: profileReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
