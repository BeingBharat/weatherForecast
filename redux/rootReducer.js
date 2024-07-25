// reducers/index.js
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'; // Replace with your specific reducers

const rootReducer = combineReducers({
  weather: weatherReducer,
  // Add more reducers as needed
});

export default rootReducer;
