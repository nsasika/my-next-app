import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import usersSlice from "./features/user/usersSlice";

const rootReducer =combineReducers({
    counter: counterSlice,
    users: usersSlice 

});

export default rootReducer;