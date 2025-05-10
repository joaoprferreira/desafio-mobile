import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/routes';
import {StackRoutes} from '../constants/routes';
import {ROUTES} from './routes';

export const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {StackRoutes.map(({name, component, options}) => (
        <Stack.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
      {/* <Stack.Screen
        name={ROUTES.TODO_DETAIL}
        component={TodoDetail}
        options={({route}) => ({title: `Tarefa #${route.params.id}`})}
      /> */}
    </Stack.Navigator>
  );
};
