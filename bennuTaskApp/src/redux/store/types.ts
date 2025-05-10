export interface ITask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
}

export interface IListTask {
  items: ITask[];
  loading: boolean;
  error: string;
}
