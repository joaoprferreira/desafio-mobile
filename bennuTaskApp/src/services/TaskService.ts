import api from './api';
import {Task} from '../types/Task';

export const fetchTasks = async (): Promise<Task> => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (
  task: Omit<Task, 'id' | 'createdAt'>,
): Promise<Task> => {
  const response = await api.post('task/create', {
    title: task.title,
    description: task.description,
  });

  return {
    ...response.data,
    completed: false,
    createdAt: new Date().toISOString(),
  };
};

export const updateTask = async (
  id: string,
  task: Partial<Task>,
): Promise<Task> => {
  const response = await api.patch(`task/update${id}`, task);
  return response.data.tasks;
};
