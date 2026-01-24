import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import usersSlice from "./features/user/usersSlice";
import clientsSlice from "./features/client/clientsSlice";

const rootReducer =combineReducers({
    counter: counterSlice,
    users: usersSlice,
    clients: clientsSlice 
});

export default rootReducer;