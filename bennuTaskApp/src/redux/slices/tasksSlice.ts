import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TasksUIState {
  loading: boolean;
  filter: string;
}

const initialState: TasksUIState = {
  loading: false,
  filter: '',
};

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
