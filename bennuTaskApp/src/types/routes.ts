import {ROUTES} from '../routes/routes';

export enum StackRoutesEnum {
  home = 'Home',
  newTask = 'NewTask',
  editTask = 'EditTask',
}

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.NEW_TASK]: undefined;
  [ROUTES.EDIT_TASK]: {id?: string};
};
