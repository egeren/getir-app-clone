import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user-store";

const reducer = combineReducers({
    userReducer
});

export { userActions } from "./user-store";

export default configureStore({reducer});