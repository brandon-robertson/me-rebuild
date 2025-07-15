// Import combine reducers
import { combineReducers } from 'redux';
import authReducer from './auth'; // We'll create

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;