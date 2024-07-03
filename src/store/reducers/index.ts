import { combineReducers } from '@reduxjs/toolkit';
import starWarsReducer from './starWarsReducer';

const rootReducer = combineReducers({
  starWars: starWarsReducer,
});

export default rootReducer;