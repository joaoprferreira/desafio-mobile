import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IListTask} from '../store/types';
import * as TaskService from '../../services/TaskService';

const initialState: IListTask = {
  items: [],
  loading: false,
  error: 'null',
};

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  TaskService.fetchTasks,
);

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, state => {
      state.loading = true;
      state.error = 'null';
    });
  },
});

export default taskSlice.reducer;
