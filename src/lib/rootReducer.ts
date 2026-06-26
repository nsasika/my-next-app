import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import usersSlice from './features/user/usersSlice';
import clientsSlice from './features/client/clientsSlice';
import uiSlice from './features/ui/uiSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  users: usersSlice,
  clients: clientsSlice,
  ui: uiSlice,
});

export default rootReducer;
