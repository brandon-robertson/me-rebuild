// Import Redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // We'll create next

// Configure store with reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;