import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from '../slices/tasksSlice';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {tasksApi} from '../../services/api';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
