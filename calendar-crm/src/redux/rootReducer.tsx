import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileReducer from './profileSlice';
// Import your reducers here, for example:
// import someReducer from './path/to/someReducer';

const rootReducer = combineReducers({
  // Add your reducers here, for example:
  // someFeature: someReducer,
  auth: authReducer,
  profile: profileReducer
});

export default rootReducer;
