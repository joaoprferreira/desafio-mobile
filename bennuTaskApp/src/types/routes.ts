import {ROUTES} from '../routes/routes';

export enum StackRoutesEnum {
  home = 'Home',
}

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.TODO_DATAIL]: {id?: string};
};
