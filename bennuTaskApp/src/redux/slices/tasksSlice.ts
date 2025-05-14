import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as TaskService from '../../services/TaskService';
import {IListTask, Task, Task as TaskType} from '../../types/Task';

interface TasksUIState {
  loading: boolean;
  filter: string;
}

const initialState: TasksUIState = {
  loading: false,
  filter: '',
};

// export const fetchTasks = createAsyncThunk<TaskType[]>(
//   'task/fetchTasks',
//   TaskService.fetchTasks,
// );
// export const addTask = createAsyncThunk<Task, Omit<Task, 'id' | 'createdAt'>>(
//   'task/create',
//   TaskService.createTask,
// );
// export const editTask = createAsyncThunk<
//   TaskType,
//   {id: string; task: Partial<Task>}
// >('task/edit', async ({id, task}) => {
//   return TaskService.updateTask(id, task);
// });

const taskSlice = createSlice({
  name: 'taskUI',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {setLoading, setFilter} = taskSlice.actions;
export default taskSlice.reducer;
