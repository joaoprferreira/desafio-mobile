import {combineReducers} from '@reduxjs/toolkit';
import TaskReducer from '../slices/tasksSlice';

const rootReducer = combineReducers({
  tasks: TaskReducer,
});

export default rootReducer;
