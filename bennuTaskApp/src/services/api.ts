import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Platform} from 'react-native';
import {Task} from '../types/Task';
import {IGetQueryTasks} from './type';
import {BACKEND_API_ANDROID, BACKEND_API_IOS} from '@env';

const baseURL =
  Platform.OS === 'android' ? BACKEND_API_ANDROID : BACKEND_API_IOS;

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getTasks: builder.query<IGetQueryTasks, void>({query: () => '/tasks'}),
    addTask: builder.mutation<Task, Omit<Task, 'id' | 'createdAt'>>({
      query: task => ({
        url: '/task/create',
        method: 'POST',
        body: task,
      }),
    }),
    updateTask: builder.mutation<Task, {id: string; task: Partial<Task>}>({
      query: ({id, task}) => ({
        url: `/task/update`,
        method: 'PUT',
        body: {id, ...task},
      }),
    }),
    deleteTask: builder.mutation<Task, {id: string}>({
      query: ({id}) => ({
        url: `/task/delete`,
        method: 'DELETE',
        body: {id},
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
