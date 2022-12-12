import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getData from "../reducers/getData";

const mainReducer = combineReducers({
    people: getData,
})

const store = configureStore({
    reducer: mainReducer,
})

export default store