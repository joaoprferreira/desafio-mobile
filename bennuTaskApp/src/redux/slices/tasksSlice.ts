import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as TaskService from '../../services/TaskService';
import {IListTask, Task, Task as TaskType} from '../../types/Task';

const initialState: IListTask = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk<TaskType[]>(
  'task/fetchTasks',
  TaskService.fetchTasks,
);
export const addTask = createAsyncThunk<Task, Omit<Task, 'id' | 'createdAt'>>(
  'task/create',
  TaskService.createTask,
);
export const editTask = createAsyncThunk<
  TaskType,
  {id: string; task: Partial<Task>}
>('task/edit', async ({id, task}) => {
  return TaskService.updateTask(id, task);
});

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setLoadig: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      })

      .addCase(addTask.fulfilled, (state, action) => {
        if (!Array.isArray(state.items)) {
          state.items = [];
        }
        state.items.push(action.payload);
      })

      .addCase(editTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        state.items = state.items.map(task =>
          task.id === updatedTask.id ? updatedTask : task,
        );
      });
  },
});

export default taskSlice.reducer;
