import React from 'react';
import {Home, NewTask} from '../screens';
import {StackRoutesEnum} from '../types/routes';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const StackRoutes: {
  name: StackRoutesEnum;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}[] = [
  {
    name: StackRoutesEnum.home,
    options: {title: 'Minhas Tarefas'},
    component: Home,
  },
  {
    name: StackRoutesEnum.newTask,
    component: NewTask,
    options: {title: 'Voltar para a lista de tarefas '},
  },
  {
    name: StackRoutesEnum.editTask,
    options: {title: 'Editar item'},
    component: NewTask,
  },
];
