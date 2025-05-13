import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from '../slices/tasksSlice';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
