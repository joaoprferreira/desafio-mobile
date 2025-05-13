import React from 'react';
import {Home, NewTask} from '../screens';
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
  {
    name: StackRoutesEnum.newTask,
    options: {title: 'Adicionar item'},
    component: NewTask,
  },
  {
    name: StackRoutesEnum.editTask,
    options: {title: 'Editar item'},
    component: NewTask,
  },
];
