import React from 'react';
import {Home} from '../screens';
import {StackRoutesEnum} from '../types/routes';

export const StackRoutes: {
  name: StackRoutesEnum;
  component: React.ComponentType<any>;
  options: object;
}[] = [
  {
    name: StackRoutesEnum.home,
    options: {title: 'minhas tarefas'},
    component: Home,
  },
];
