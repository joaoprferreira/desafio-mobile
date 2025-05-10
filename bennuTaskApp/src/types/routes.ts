import {ROUTES} from '../routes/routes';

export enum StackRoutesEnum {
  home = 'Home',
  newTask = 'NewTask',
}

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.NEW_TASK]: undefined;
  [ROUTES.TODO_DATAIL]: {id?: string};
};
