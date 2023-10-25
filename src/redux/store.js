import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './contacts';
import { authReducer } from './auth';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
