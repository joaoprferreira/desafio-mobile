import api from './api';
import {Task} from '../types/Task';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (
  task: Omit<Task, 'id' | 'createdAt'>,
): Promise<Task> => {
  const response = await api.post('/task/create', task);
  return response.data;
};
