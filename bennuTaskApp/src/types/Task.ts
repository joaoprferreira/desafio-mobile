export type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
};

export interface ITask {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
  createdAt?: string;
}

export interface IListTask {
  items: Task[];
  loading: boolean;
  error: string | null;
}
